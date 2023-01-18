import db from '../../../lib/db';
import { CreateGroupInput, GroupListOptions, GroupOptions, UpdateGroupInput } from '../../../types/Group';

export const resolvers = {
	Query: {
		group: async (parent: unknown, { id }: GroupOptions) => {
			return db.group.findUnique({
				where: {
					id,
				},
				include: {
					users: true,
					events: true,
				},
			});
		},
		groups: async (parent: unknown, { options }: GroupListOptions) => {
			return db.group.findMany({
				...(options && options.filter),
				take: (options && options.take) || 48,
				skip: (options && options.skip) || 0,
			});
		},
	},
	Mutation: {
		createGroup: async (parent: unknown, { input }: CreateGroupInput) => {
			console.log('input', input);

			return db.group.create({
				data: input,
			});
		},
		updateGroup: async (
			parent: unknown,
			{ id, name, description, city, postalCode, region, country, logo, banner }: UpdateGroupInput
		) => {
			return db.group.update({
				where: {
					id,
				},
				data: {
					name,
					description,
					city,
					postalCode,
					region,
					country,
					logo,
					banner,
				},
			});
		},
	},
};
