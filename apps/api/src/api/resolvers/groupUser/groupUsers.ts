import { sendErrorCode } from '../../../lib/sendErrorCode';
import { ApiContext } from '../../../types/ApiContext';
import { QueryGroupUsersArgs } from '../../../types/GeneratedTypes';

export const groupUsers = async (parent: unknown, { options }: QueryGroupUsersArgs, { db }: ApiContext) => {
	try {
		const groupRole = await db.groupRole.findFirst({
			where: {
				name: options?.filter?.groupRoleName || undefined,
			},
		});

		const group = await db.group.findFirst({
			where: {
				slug: options?.filter?.groupSlug || undefined,
			},
		});

		if (!group) {
			return sendErrorCode({ code: 'BAD_USER_INPUT', message: 'Group not found' });
		}

		return db.groupUser.findMany({
			where: {
				groupId: group?.id,
				groupRoleId: groupRole?.id || undefined,
			},
			include: {
				user: true,
				groupRole: true,
			},
			take: (options && options.take) || 12,
			skip: (options && options.skip) || 0,
		});
	} catch (e) {
		return sendErrorCode({ code: 'INTERNAL_SERVER_ERROR', message: 'Internal server error' });
	}
};
