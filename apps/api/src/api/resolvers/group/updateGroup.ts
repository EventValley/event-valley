import db from '../../../lib/db';
import { MutationUpdateGroupArgs } from '../../../types/ApiTypes';

export const updateGroup = async (parent: unknown, { input }: MutationUpdateGroupArgs) => {
	return db.group.update({
		where: {
			id: input.id,
		},
		data: {
			...input,
			id: undefined,
		},
	});
};
