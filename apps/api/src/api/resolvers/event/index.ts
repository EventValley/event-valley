import { createEvent } from './createEvent';
import { event } from './event';
import { events } from './events';
import { myEvents } from './myEvents';
import { upcomingEvents } from './upcomingEvents';
import { updateEvent } from './updateEvent';

export const eventResolver = {
	Query: {
		event,
		events,
		upcomingEvents,
		myEvents,
	},
	Mutation: {
		createEvent,
		updateEvent,
	},
};
