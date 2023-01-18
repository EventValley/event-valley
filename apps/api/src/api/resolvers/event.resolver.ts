import db from '../../lib/db';
import {
	MutationCreateEventArgs,
	MutationUpdateEventArgs,
	QueryEventArgs,
	QueryEventsArgs,
} from '../../types/ApiTypes';

export const eventResolver = {
	Query: {
		event: async (parent: unknown, { id }: QueryEventArgs) => {
			return db.event.findUnique({
				where: {
					id,
				},
				include: {
					users: true,
					events: true,
				},
			});
		},

		events: async (parent: unknown, { options }: QueryEventsArgs) => {
			return db.event.findMany({
				where: {
					...(options && options.filter),
				},
				take: (options && options.take) || 48,
				skip: (options && options.skip) || 0,
			});
		},
	},
	Mutation: {
		createEvent: async (parent: unknown, { input }: MutationCreateEventArgs) => {
			return db.event.create({
				data: input,
			});
		},
		updateEvent: async (parent: unknown, { input }: MutationUpdateEventArgs) => {
			return db.event.update({
				where: {
					id: input.id,
				},
				data: {
					...input,
					id: undefined,
				},
			});
		},
	},
};
