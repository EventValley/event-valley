import { FC } from 'react';

import { Event } from '@/api/graphql';
import { EventsList } from '@/components/EventsList';

interface EventProps {
	events: Event[];
}

export const Events: FC<EventProps> = ({ events }) => {
	return <EventsList events={events} />;
};
