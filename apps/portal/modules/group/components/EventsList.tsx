import { FC } from 'react';

import { EventCard } from '@/components/EventCard';

import { Event, Group } from '../../../lib/graphql/graphql';

interface EventsListProps {
	group: Group;
	events: Event[];
}

export const EventsList: FC<EventsListProps> = ({ group, events }) => {
	return (
		<ul className="flex flex-col gap-24">
			{events.map((event) => {
				return (
					<li key={event.id}>
						<EventCard slug={group.slug} event={event} />
					</li>
				);
			})}
		</ul>
	);
};
