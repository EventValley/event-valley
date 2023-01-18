import db from '../../lib/db';
import {
	MutationCreateGroupArgs,
	MutationUpdateGroupArgs,
	QueryGroupArgs,
	QueryGroupsArgs,
} from '../../types/ApiTypes';

export const groupResolver = {
	Query: {
		group: async (parent: unknown, { id }: QueryGroupArgs) => {
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
				data: input,
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
