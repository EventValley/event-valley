import { sendErrorCode } from '../../../lib/sendErrorCode';
import { ApiContext } from '../../../types/ApiContext';
import { QueryEventsArgs } from '../../../types/GeneratedTypes';

export const events = async (parent: unknown, { options }: QueryEventsArgs, { db, user }: ApiContext) => {
	try {
		let groupId;

		if (options && options.filter && options.filter.groupSlug) {
			const group = await db.group.findFirst({
				where: {
					slug: options.filter.groupSlug,
				},
			});

			if (!group) {
				return sendErrorCode({ code: 'BAD_USER_INPUT', message: 'Entity not found' });
			}

			delete options.filter.groupSlug;
			groupId = group.id;
		}

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
				...(groupId && { groupId }),
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
		return sendErrorCode({ code: 'INTERNAL_SERVER_ERROR', message: 'Internal server error' });
	}
};
