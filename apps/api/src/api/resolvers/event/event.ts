import { ApiContext } from '../../../types/ApiContext';
import { QueryEventArgs } from '../../../types/ApiTypes';

export const event = async (parent: unknown, { id }: QueryEventArgs, { db }: ApiContext) => {
	return db.event.findUnique({
		where: {
			id,
		},
		include: {
			group: true,
			eventUsers: {
				include: {
					user: true,
					rsvp: true,
					eventRole: true,
				},
			},
			venue: true,
		},
	});
};
