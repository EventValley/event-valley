import { ApiContext } from '../../../types/ApiContext';
import { QueryEventsArgs } from '../../../types/ApiTypes';

export const events = async (parent: unknown, { options }: QueryEventsArgs, { db, user }: ApiContext) => {
	try {
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
				// Due to Frontend apollo graphql issue, we need to convert the date to a string
				...(options &&
					options.filter?.startsAt?.gt && {
						startsAt: {
							gt: new Date(options.filter.startsAt.gt),
						},
					}),
				...(options &&
					options.filter?.startsAt?.lt && {
						startsAt: {
							lt: new Date(options.filter.startsAt.lt),
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
	} catch (e) {
		console.log(e);
		throw new Error('Something went wrong');
	}
};
