import { createEvent } from './createEvent';
import { event } from './event';
import { events } from './events';
import { updateEvent } from './updateEvent';

export const eventResolver = {
	Query: {
		event,
		events,
	},
	Mutation: {
		createEvent,
		updateEvent,
	},
};
