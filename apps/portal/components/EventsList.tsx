import { FC } from 'react';

import { EventCard } from '@/components/EventCard';
import { Heading } from '@/components/Heading';
import { Stack } from '@/components/Stack';
import { dateFormat } from '@/lib/dateFormat';
import { EventFragment } from '@/lib/graphql/graphql';
import { groupEventsByDate } from '@/lib/groupEventsByDate';

type EventsListProps = {
	events: EventFragment[];
};

export const EventsList: FC<EventsListProps> = ({ events }) => {
	const groupedEvents = groupEventsByDate(events);

	return (
		<Stack direction="vertical" className="gap-48">
			{Object.keys(groupedEvents).map((keyName) => (
				<div key={keyName} className="flex flex-col gap-24">
					<div className="flex flex-col gap-8">
						<Heading size="md" weight={700}>
							{dateFormat.tz(keyName).format('dddd, MMMM D')}
						</Heading>
						<div className="bg-gray-200 opacity-50 h-1 w-full"></div>
					</div>
					<div className="flex flex-col gap-12">
						{groupedEvents[keyName].map((event) => (
							<EventCard key={event.id} event={event} />
						))}
					</div>
				</div>
			))}
		</Stack>
	);
};
