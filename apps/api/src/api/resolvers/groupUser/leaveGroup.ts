import { sendErrorCode } from '../../../lib/sendErrorCode';
import { ApiContext } from '../../../types/ApiContext';
import { MutationJoinGroupArgs } from '../../../types/GeneratedTypes';

export const leaveGroup = async (
	parent: never,
	{ groupId }: MutationJoinGroupArgs,
	{ db, user }: ApiContext
) => {
	try {
		const group = await db.group.findFirst({ where: { id: groupId } });

		if (!group) {
			return sendErrorCode({ code: 'BAD_USER_INPUT', message: 'Group not found' });
		}

		await db.groupUser.delete({
			where: {
				groupIdUserId: {
					groupId: group.id,
					userId: user.id,
				},
			},
		});

		return {
			id: 'ok',
		};
	} catch (error) {
		return sendErrorCode({ code: 'INTERNAL_SERVER_ERROR', message: 'Internal server error' });
	}
};
