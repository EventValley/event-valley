import { Container } from '@/components/Container';
import { EventsList } from '@/components/EventsList';
import { Heading } from '@/components/Heading';
import { Stack } from '@/components/Stack';
import { EventFragment, useMyEventsQuery } from '@/lib/graphql/graphql';
import { notEmpty } from '@/lib/noEmpty';
import { CalendarWidget } from '@/modules/home/components/CalendarWidget';

export const MyEventsPage = () => {
	const { loading, error, data } = useMyEventsQuery();

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error: {error.message}</p>;
	if (!data || !data.events) return <p>Not found</p>;

	const events: EventFragment[] = data.events.filter(notEmpty);

	return (
		<Container className="flex flex-col gap-48">
			<Heading as="h1" size="lg" weight={700}>
				My Events
			</Heading>

			<Stack className="flex flex-row gap-48">
				<Stack className="flex flex-col gap-48 w-9/12">
					<EventsList events={events} />
				</Stack>
				<Stack className="flex flex-col gap-48 w-3/12 flex-shrink-0">
					<CalendarWidget />
				</Stack>
			</Stack>
		</Container>
	);
};
