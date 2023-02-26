import { log } from '@event-valley/log';
import { GraphQLError } from 'graphql';

import { ApiContext } from '../../../types/ApiContext';
import { QueryGroupsArgs } from '../../../types/ApiTypes';

export const myGroups = async (parent: never, { options }: QueryGroupsArgs, { user, db }: ApiContext) => {
	try {
		return db.group.findMany({
			where: {
				...(options && options.filter),
				groupUsers: {
					some: {
						userId: user.id,
					},
				},
			},
			take: (options && options.take) || 24,
			skip: (options && options.skip) || 0,
		});
	} catch (e) {
		log.error(`Error while returning myGroups: ${e}`);

		throw new GraphQLError('Something went wrong', {
			extensions: {
				code: 'INTERNAL_SERVER_ERROR',
			},
		});
	}
};
