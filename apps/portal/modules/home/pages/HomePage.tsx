import { Container } from '@/components/Container';
import { EventsList } from '@/components/EventsList';
import { Heading } from '@/components/Heading';
import { Stack } from '@/components/Stack';
import { useHomeQuery } from '@/lib/graphql/graphql';
import { notEmpty } from '@/lib/noEmpty';
import { useAuth } from '@/modules/auth/store';
import { CalendarWidget } from '@/modules/home/components/CalendarWidget';
import { MyGroupsWidget } from '@/modules/home/components/MyGroupsWidget';

export const HomePage = () => {
	const {
		data: { user },
	} = useAuth();
	const { loading, data } = useHomeQuery();

	if (loading) return <div>Loading...</div>;
	if (!data) return <div>No Data</div>;

	const { myGroups } = data;
	const events = data.events.filter(notEmpty);

	return (
		<Container className="flex flex-col gap-48">
			<Heading as="h1" size="xl">
				Welcome, {user.name}!
			</Heading>

			<Stack className="flex flex-row gap-48">
				<Stack className="flex flex-col gap-48 w-9/12">
					<EventsList events={events} />
				</Stack>
				<Stack className="flex flex-col gap-48 w-3/12 flex-shrink-0">
					<CalendarWidget />
					<MyGroupsWidget groups={myGroups} />
				</Stack>
			</Stack>
		</Container>
	);
};
