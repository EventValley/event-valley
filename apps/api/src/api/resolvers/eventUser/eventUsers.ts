import { sendErrorCode } from '../../../lib/sendErrorCode';
import { ApiContext } from '../../../types/ApiContext';
import { QueryEventUsersArgs } from '../../../types/GeneratedTypes';

export const eventUsers = async (parent: unknown, { options }: QueryEventUsersArgs, { db }: ApiContext) => {
	try {
		return db.eventUser.findMany({
			where: {
				...(options && options.filter),
			},
			include: {
				user: true,
				rsvp: true,
				eventRole: true,
			},
			take: (options && options.take) || 12,
			skip: (options && options.skip) || 0,
		});
	} catch (e) {
		return sendErrorCode({ code: 'INTERNAL_SERVER_ERROR', message: 'Internal server error' });
	}
};
