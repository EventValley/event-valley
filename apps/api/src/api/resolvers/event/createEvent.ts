import { ApiContext } from '../../../types/ApiContext';
import { MutationCreateEventArgs } from '../../../types/GeneratedTypes';

export const createEvent = async (
	parent: unknown,
	{ input }: MutationCreateEventArgs,
	{ db }: ApiContext
) => {
	return db.event.create({
		data: input,
	});
};
