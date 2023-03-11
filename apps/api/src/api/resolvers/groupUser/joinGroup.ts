import { sendErrorCode } from '../../../lib/sendErrorCode';
import { ApiContext } from '../../../types/ApiContext';
import { MutationJoinGroupArgs } from '../../../types/GeneratedTypes';

export const joinGroup = async (
	parent: never,
	{ groupId }: MutationJoinGroupArgs,
	{ db, user }: ApiContext
) => {
	try {
		const group = await db.group.findFirst({ where: { id: groupId } });

		if (!group) {
			return sendErrorCode({ code: 'BAD_USER_INPUT', message: 'Group not found' });
		}

		const groupRole = await db.groupRole.findFirst({ where: { name: 'Member' } });

		if (!groupRole) {
			return sendErrorCode({ code: 'BAD_USER_INPUT', message: 'Entity not found' });
		}

		return db.groupUser.create({
			data: {
				groupId: group.id,
				userId: user.id,
				groupRoleId: groupRole.id,
			},
		});
	} catch (error) {
		return sendErrorCode({ code: 'INTERNAL_SERVER_ERROR', message: 'Internal server error' });
	}
};
