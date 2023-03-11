import { sendErrorCode } from '../../../lib/sendErrorCode';
import { ApiContext } from '../../../types/ApiContext';
import { MutationAttendEventArgs } from '../../../types/GeneratedTypes';

export const attendEvent = async (
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

		const currentGroupUser = await db.groupUser.findFirst({
			where: {
				groupId: event.group.id,
				userId: user.id,
			},
			include: {
				groupRole: true,
			},
		});

		const rsvps = await db.rsvp.findMany();

		const attending = rsvps.find((rsvp) => rsvp.name === 'yes');
		const notAttending = rsvps.find((rsvp) => rsvp.name === 'no');

		const eventAttendeesCount = await db.eventUser.count({
			where: {
				eventId: id,
				rsvpId: attending?.id,
			},
		});

		const eventRole = await db.eventRole.findFirst({
			where: {
				name:
					currentGroupUser && currentGroupUser.groupRole.name ? currentGroupUser.groupRole.name : 'Member',
			},
		});

		const isAttending = event.capacity && eventAttendeesCount <= event.capacity ? attending : notAttending;

		const eventUser = await db.eventUser.create({
			data: {
				eventId: id,
				eventRoleId: eventRole?.id as string,
				userId: user.id,
				rsvpId: isAttending?.id as string,
			},
		});

		return !!eventUser;
	} catch (error) {
		return sendErrorCode({ code: 'INTERNAL_SERVER_ERROR', message: 'Internal server error' });
	}
};
