import { GraphQLError } from 'graphql/index';

import db from '../../../lib/db';
import { QueryGroupArgs } from '../../../types/ApiTypes';

export const group = async (parent: unknown, { id, slug }: QueryGroupArgs) => {
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

			groupUsers: {
				include: {
					user: true,
					groupRole: true,
				},
			},
		},
	});
};
