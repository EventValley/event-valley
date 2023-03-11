import { ApiContext } from '../../../types/ApiContext';
import { MutationUpdateEventArgs } from '../../../types/GeneratedTypes';

export const updateEvent = async (
	parent: unknown,
	{ input }: MutationUpdateEventArgs,
	{ db }: ApiContext
) => {
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
