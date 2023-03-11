import { sendErrorCode } from '../../../lib/sendErrorCode';
import { ApiContext } from '../../../types/ApiContext';

export const user = async (parent: never, args: never, { db, user }: ApiContext) => {
	try {
		return db.user.findUnique({
			where: { id: user.id },
			include: {
				accounts: true,
			},
		});
	} catch (error) {
		return sendErrorCode({ code: 'INTERNAL_SERVER_ERROR', message: 'Internal server error' });
	}
};
