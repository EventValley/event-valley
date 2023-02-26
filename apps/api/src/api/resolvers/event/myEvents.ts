import { log } from '@event-valley/log';
import { GraphQLError } from 'graphql/index';

import { ApiContext } from '../../../types/ApiContext';

export const myEvents = async (parent: never, args: never, { user, db }: ApiContext) => {
	try {
		return db.event.findMany({
			where: {
				eventUsers: {
					some: {
						userId: user.id,
					},
				},
			},
		});
	} catch (e) {
		log.error(`Error while returning myEvents: ${e}`);

		throw new GraphQLError('Something went wrong', {
			extensions: {
				code: 'INTERNAL_SERVER_ERROR',
			},
		});
	}
};
