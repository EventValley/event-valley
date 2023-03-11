import { ApiContext } from '../../types/ApiContext';
import {
	MutationCreateVenueArgs,
	MutationUpdateVenueArgs,
	QueryVenueArgs,
	QueryVenuesArgs,
} from '../../types/GeneratedTypes';

export const venueResolver = {
	Query: {
		venue: async (parent: unknown, { id }: QueryVenueArgs, { db }: ApiContext) => {
			return db.venue.findUnique({
				where: {
					id,
				},
			});
		},

		venues: async (parent: unknown, { options }: QueryVenuesArgs, { db }: ApiContext) => {
			return db.venue.findMany({
				where: {
					...(options && options.filter),
				},
				take: (options && options.take) || 48,
				skip: (options && options.skip) || 0,
			});
		},
	},
	Mutation: {
		createVenue: async (parent: unknown, { input }: MutationCreateVenueArgs, { db }: ApiContext) => {
			return db.venue.create({
				data: input,
			});
		},
		updateVenue: async (parent: unknown, { input }: MutationUpdateVenueArgs, { db }: ApiContext) => {
			return db.venue.update({
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
