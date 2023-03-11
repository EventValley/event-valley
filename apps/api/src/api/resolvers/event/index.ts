import { attendEvent } from './attendEvent';
import { createEvent } from './createEvent';
import { event } from './event';
import { events } from './events';
import { notAttendEvent } from './notAttendEvent';
import { updateEvent } from './updateEvent';

export const eventResolver = {
	Query: {
		event,
		events,
	},
	Mutation: {
		attendEvent,
		notAttendEvent,
		createEvent,
		updateEvent,
	},
};
