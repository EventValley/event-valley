import { sendErrorCode } from '../../../lib/sendErrorCode';
import { ApiContext } from '../../../types/ApiContext';
import { QueryGroupUsersCountArgs } from '../../../types/GeneratedTypes';

export const groupUsersCount = async (
	parent: unknown,
	{ groupId, groupSlug }: QueryGroupUsersCountArgs,
	{ db }: ApiContext
) => {
	try {
		const group = await db.group.findFirst({
			where: {
				id: groupId || undefined,
				slug: groupSlug || undefined,
			},
		});

		if (!group) {
			return sendErrorCode({ code: 'BAD_USER_INPUT', message: 'Group not found' });
		}

		return db.groupUser.count({
			where: {
				groupId: group.id,
			},
		});
	} catch (error) {
		return sendErrorCode({ code: 'INTERNAL_SERVER_ERROR', message: 'Internal server error' });
	}
};
