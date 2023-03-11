import { GraphQLError } from 'graphql/index';

import { sendErrorCode } from '../../../lib/sendErrorCode';
import { ApiContext } from '../../../types/ApiContext';
import { QueryMyGroupRoleArgs } from '../../../types/GeneratedTypes';

export const myGroupRole = async (
	parent: never,
	{ groupId, groupSlug }: QueryMyGroupRoleArgs,
	{ db, user }: ApiContext
) => {
	if (!groupId && !groupSlug) {
		throw new GraphQLError('Invalid argument value', {
			extensions: {
				code: 'BAD_USER_INPUT',
			},
		});
	}

	try {
		const group = await db.group.findUnique({
			where: {
				id: groupId || undefined,
				slug: groupSlug || undefined,
			},
		});

		if (!group) {
			return sendErrorCode({ code: 'BAD_USER_INPUT', message: 'Group not found' });
		}

		const groupUser = await db.groupUser.findFirst({
			where: {
				userId: user.id,
				groupId: group.id,
			},
			include: {
				groupRole: true,
			},
		});

		if (groupUser) {
			return groupUser.groupRole;
		}

		return null;
	} catch (error) {
		return sendErrorCode({ code: 'INTERNAL_SERVER_ERROR', message: 'Internal server error' });
	}
};
