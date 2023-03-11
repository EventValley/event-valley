import { sendErrorCode } from '../../../lib/sendErrorCode';
import { ApiContext } from '../../../types/ApiContext';
import { QueryGroupsArgs } from '../../../types/GeneratedTypes';

export const groups = async (parent: unknown, { options }: QueryGroupsArgs, { db, user }: ApiContext) => {
	try {
		return db.group.findMany({
			where: {
				...(options && options.filter),
				...(options &&
					options.personal && {
						groupUsers: {
							some: {
								userId: user.id,
							},
						},
					}),
			},
			take: (options && options.take) || 24,
			skip: (options && options.skip) || 0,
		});
	} catch (error) {
		return sendErrorCode({ code: 'INTERNAL_SERVER_ERROR', message: 'Internal server error' });
	}
};
