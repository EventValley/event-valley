import { log } from '@event-valley/log';
import { GraphQLError } from 'graphql/index';

import { ApiContext } from '../../../types/ApiContext';
import { QueryEventsArgs } from '../../../types/ApiTypes';

export const upcomingEvents = async (
	parent: unknown,
	{ options }: QueryEventsArgs,
	{ db, user }: ApiContext
) => {
	try {
		return db.event.findMany({
			where: {
				eventUsers: {
					some: {
						userId: user.id,
					},
				},
				...(options && options.filter),
				startsAt: {
					gt: new Date(),
				},
			},
			include: {
				group: true,
				venue: true,
			},
			orderBy: {
				startsAt: 'asc',
			},
			take: (options && options.take) || 18,
			skip: (options && options.skip) || 0,
		});
	} catch (e) {
		log.error(`Error while returning upcomingEvents: ${e}`);

		throw new GraphQLError('Something went wrong', {
			extensions: {
				code: 'INTERNAL_SERVER_ERROR',
			},
		});
	}
};
