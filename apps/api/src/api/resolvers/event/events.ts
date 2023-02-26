import db from '../../../lib/db';
import { QueryEventsArgs } from '../../../types/ApiTypes';

export const events = async (parent: unknown, { options }: QueryEventsArgs) => {
	return db.event.findMany({
		where: {
			...(options && options.filter),
		},
		take: (options && options.take) || 18,
		skip: (options && options.skip) || 0,
	});
};
