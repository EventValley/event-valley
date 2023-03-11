import { sendErrorCode } from '../../../lib/sendErrorCode';
import { ApiContext } from '../../../types/ApiContext';
import { QueryMyEventRoleArgs } from '../../../types/GeneratedTypes';

export const myEventRole = async (
	parent: never,
	{ eventId }: QueryMyEventRoleArgs,
	{ db, user }: ApiContext
) => {
	try {
		const event = await db.event.findUnique({
			where: {
				id: eventId || undefined,
			},
		});

		if (!event) {
			return sendErrorCode({ code: 'BAD_USER_INPUT', message: 'Entity not found' });
		}

		const eventUser = await db.eventUser.findFirst({
			where: {
				userId: user.id,
				eventId: event.id,
			},
			include: {
				eventRole: true,
			},
		});

		if (eventUser) {
			return eventUser.eventRole;
		}

		return null;
	} catch (error) {
		return sendErrorCode({ code: 'INTERNAL_SERVER_ERROR', message: 'Internal server error' });
	}
};
