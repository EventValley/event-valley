import { GraphQLError } from 'graphql';
import slugify from 'slugify';

import db from '../../lib/db';
import {
	MutationCreateGroupArgs,
	MutationUpdateGroupArgs,
	QueryGroupArgs,
	QueryGroupsArgs,
} from '../../types/ApiTypes';

export const groupResolver = {
	Query: {
		group: async (parent: unknown, { id, slug }: QueryGroupArgs) => {
			if (!id && !slug) {
				throw new GraphQLError('Invalid argument value', {
					extensions: {
						code: 'BAD_USER_INPUT',
					},
				});
			}

			return db.group.findUnique({
				where: {
					id: id || undefined,
					slug: slug || undefined,
				},
				include: {
					events: {
						where: {
							AND: [{ canceled: false }, { endsAt: { gt: new Date() } }],
						},
						orderBy: { startsAt: 'asc' },
						include: {
							venue: true,
						},
					},

					users: {
						include: {
							user: true,
							groupRole: true,
						},
					},
				},
			});
		},
		groups: async (parent: unknown, { options }: QueryGroupsArgs) => {
			return db.group.findMany({
				where: {
					...(options && options.filter),
				},
				take: (options && options.take) || 48,
				skip: (options && options.skip) || 0,
			});
		},
	},
	Mutation: {
		createGroup: async (parent: unknown, { input }: MutationCreateGroupArgs) => {
			return db.group.create({
				data: {
					...input,
					slug: slugify(input.name, { lower: true }),
				},
			});
		},
		updateGroup: async (parent: unknown, { input }: MutationUpdateGroupArgs) => {
			return db.group.update({
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
