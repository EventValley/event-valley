import { useQuery } from '@apollo/client';

import { Container } from '@/components/Container';
import { EventsList } from '@/components/EventsList';
import { Heading } from '@/components/Heading';
import { Stack } from '@/components/Stack';
import { dateFormat } from '@/lib/dateFormat';
import { HOME } from '@/lib/graphql';
import { useAuth } from '@/modules/auth/store';
import { CalendarWidget } from '@/modules/home/components/CalendarWidget';
import { MyGroupsWidget } from '@/modules/home/components/MyGroupsWidget';
import { EventFragment, GroupFragment } from '@/types/GeneratedTypes';

type HomeData = {
	groups: GroupFragment[];
	events: EventFragment[];
};

export const HomePage = () => {
	const {
		data: { user },
	} = useAuth();

	const { loading, data } = useQuery<HomeData>(HOME, {
		variables: {
			eventOptions: {
				filter: {
					startsAt: {
						gt: dateFormat(new Date()).format('YYYY-MM-DD HH:mm'),
					},
				},
				personal: true,
				take: 12,
				skip: 0,
			},
		},
	});

	if (loading) return <div>Loading...</div>;
	if (!data) return <div>No Data</div>;

	const { events, groups } = data;

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
					<MyGroupsWidget groups={groups} />
				</Stack>
			</Stack>
		</Container>
	);
};
