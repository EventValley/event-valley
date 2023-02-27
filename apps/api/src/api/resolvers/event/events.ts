import { ApiContext } from '../../../types/ApiContext';
import { QueryEventsArgs } from '../../../types/ApiTypes';

export const events = async (parent: unknown, { options }: QueryEventsArgs, { db, user }: ApiContext) => {
	return db.event.findMany({
		where: {
			...(options && options.filter),
			...(options &&
				options.personal && {
					eventUsers: {
						some: {
							userId: user.id,
						},
					},
				}),
		},
		include: {
			group: true,
			venue: true,
		},
		orderBy: {
			startsAt: 'asc',
		},
		take: (options && options.take) || 12,
		skip: (options && options.skip) || 0,
	});
};
