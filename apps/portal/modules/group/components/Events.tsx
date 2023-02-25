import { FC } from 'react';

import { EventsList } from '@/modules/group/components/EventsList';

import { Event, Group } from '../../../lib/graphql/graphql';

interface EventProps {
	group: Group;
	events: Event[];
}

export const Events: FC<EventProps> = ({ group, events }) => {
	return <EventsList group={group} events={events} />;
};
