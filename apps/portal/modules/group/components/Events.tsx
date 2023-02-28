import { FC } from 'react';

import { EventsList } from '@/modules/group/components/EventsList';
import { Event, Group } from '@/types/GeneratedTypes';

interface EventProps {
	group: Group;
	events: Event[];
}

export const Events: FC<EventProps> = ({ group, events }) => {
	return <EventsList group={group} events={events} />;
};
