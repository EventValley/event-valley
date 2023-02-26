import { useState } from 'react';
import Calendar from 'react-calendar';

import { Container } from '@/components/Container';
import { Heading } from '@/components/Heading';
import { Stack } from '@/components/Stack';
import { useHomeQuery } from '@/lib/graphql/graphql';
import { useAuth } from '@/modules/auth/store';
import { CalendarWidget } from '@/modules/home/components/CalendarWidget';
import { MyGroupsWidget } from '@/modules/home/components/MyGroupsWidget';
import { UpcomingEvents } from '@/modules/home/components/UpcomingEvents';

export const HomePage = () => {
	const {
		data: { user },
	} = useAuth();
	const { loading, data } = useHomeQuery();

	if (loading) return <div>Loading...</div>;
	if (!data) return <div>No Data</div>;

	const { upcomingEvents, myGroups } = data;

	console.log('myGroups', myGroups);

	return (
		<Container className="flex flex-col gap-48">
			<Heading as="h1" size="xl">
				Welcome, {user.name}!
			</Heading>

			<Stack className="flex flex-row gap-48">
				<Stack className="flex flex-col gap-48 w-9/12">
					<UpcomingEvents list={upcomingEvents} />
				</Stack>
				<Stack className="flex flex-col gap-48 w-3/12 flex-shrink-0">
					<CalendarWidget />
					<MyGroupsWidget groups={myGroups} />
				</Stack>
			</Stack>
		</Container>
	);
};
