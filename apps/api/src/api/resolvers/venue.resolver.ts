import db from '../../lib/db';
import {
	MutationCreateVenueArgs,
	MutationUpdateVenueArgs,
	QueryVenueArgs,
	QueryVenuesArgs,
} from '../../types/ApiTypes';

export const venueResolver = {
	Query: {
		venue: async (parent: unknown, { id }: QueryVenueArgs) => {
			return db.venue.findUnique({
				where: {
					id,
				},
			});
		},

		venues: async (parent: unknown, { options }: QueryVenuesArgs) => {
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
		createVenue: async (parent: unknown, { input }: MutationCreateVenueArgs) => {
			return db.venue.create({
				data: input,
			});
		},
		updateVenue: async (parent: unknown, { input }: MutationUpdateVenueArgs) => {
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
