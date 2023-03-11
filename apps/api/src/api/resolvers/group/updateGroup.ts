import { ApiContext } from '../../../types/ApiContext';
import { MutationUpdateGroupArgs } from '../../../types/GeneratedTypes';

export const updateGroup = async (
	parent: unknown,
	{ input }: MutationUpdateGroupArgs,
	{ db }: ApiContext
) => {
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
