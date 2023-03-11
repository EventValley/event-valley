import { sendErrorCode } from '../../../lib/sendErrorCode';
import { ApiContext } from '../../../types/ApiContext';
import { QueryEventArgs } from '../../../types/GeneratedTypes';

export const event = async (parent: unknown, { id }: QueryEventArgs, { db }: ApiContext) => {
	try {
		return db.event.findUnique({
			where: {
				id,
			},
			include: {
				group: true,
				venue: true,
				status: true,
			},
		});
	} catch (error) {
		return sendErrorCode({ code: 'INTERNAL_SERVER_ERROR', message: 'Internal server error' });
	}
};
