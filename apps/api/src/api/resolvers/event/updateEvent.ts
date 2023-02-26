import db from '../../../lib/db';
import { MutationUpdateEventArgs } from '../../../types/ApiTypes';

export const updateEvent = async (parent: unknown, { input }: MutationUpdateEventArgs) => {
	return db.event.update({
		where: {
			id: input.id,
		},
		data: {
			...input,
			id: undefined,
		},
	});
};
