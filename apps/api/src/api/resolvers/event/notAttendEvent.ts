import { sendErrorCode } from '../../../lib/sendErrorCode';
import { ApiContext } from '../../../types/ApiContext';
import { MutationAttendEventArgs } from '../../../types/GeneratedTypes';

export const notAttendEvent = async (
	parent: never,
	{ id }: MutationAttendEventArgs,
	{ db, user }: ApiContext
) => {
	try {
		const event = await db.event.findFirst({
			where: {
				id,
			},
			include: {
				group: true,
			},
		});

		if (!event) {
			return sendErrorCode({ code: 'BAD_USER_INPUT', message: 'Event not found' });
		}

		const rsvps = await db.rsvp.findFirst({
			where: {
				name: 'no',
			},
		});

		const eventUser = await db.eventUser.update({
			where: {
				// eslint-disable-next-line camelcase
				eventIdUserId: {
					eventId: id,
					userId: user.id,
				},
			},
			data: {
				rsvpId: rsvps?.id as string,
			},
		});

		return !!eventUser;
	} catch (error) {
		return sendErrorCode({ code: 'INTERNAL_SERVER_ERROR', message: 'Internal server error' });
	}
};
