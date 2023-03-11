import { sendErrorCode } from '../../../lib/sendErrorCode';
import { ApiContext } from '../../../types/ApiContext';
import { QueryMyEventRoleArgs } from '../../../types/GeneratedTypes';

export const myRsvp = async (
	parent: unknown,
	{ eventId }: QueryMyEventRoleArgs,
	{ db, user }: ApiContext
) => {
	try {
		const eventUser = await db.eventUser.findFirst({
			where: {
				eventId,
				userId: user.id,
			},
			include: {
				rsvp: true,
			},
		});

		if (eventUser) {
			return eventUser.rsvp;
		}

		return null;
	} catch (error) {
		return sendErrorCode({ code: 'INTERNAL_SERVER_ERROR', message: 'Internal server error' });
	}
};
