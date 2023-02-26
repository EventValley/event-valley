import db from '../../../lib/db';
import { MutationCreateEventArgs } from '../../../types/ApiTypes';

export const createEvent = async (parent: unknown, { input }: MutationCreateEventArgs) => {
	return db.event.create({
		data: input,
	});
};
