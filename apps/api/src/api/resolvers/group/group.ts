import { sendErrorCode } from '../../../lib/sendErrorCode';
import { ApiContext } from '../../../types/ApiContext';
import { QueryGroupArgs } from '../../../types/GeneratedTypes';

export const group = async (parent: unknown, { id, slug }: QueryGroupArgs, { db }: ApiContext) => {
	if (!id && !slug) {
		sendErrorCode({ code: 'BAD_USER_INPUT', message: 'Invalid argument values' });
		return;
	}

	try {
		const group = await db.group.findUnique({
			where: {
				id: id || undefined,
				slug: slug || undefined,
			},
		});

		if (!group) {
			return sendErrorCode({ code: 'BAD_USER_INPUT', message: 'Group not found' });
		}

		return group;
	} catch (error) {
		return sendErrorCode({ code: 'INTERNAL_SERVER_ERROR', message: 'Internal server error' });
	}
};
