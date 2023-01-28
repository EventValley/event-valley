import { FC } from 'react';

import { Event } from '@/api/graphql';
import { EventCard } from '@/components/EventCard';

interface EventsListProps {
	events: Event[];
}

export const EventsList: FC<EventsListProps> = ({ events }) => {
	return (
		<ul className="flex flex-col gap-24">
			{events.map((event) => {
				return (
					<li key={event.id}>
						<EventCard event={event} />
					</li>
				);
			})}
		</ul>
	);
};
