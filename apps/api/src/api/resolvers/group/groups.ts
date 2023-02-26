import db from '../../../lib/db';
import { QueryGroupsArgs } from '../../../types/ApiTypes';

export const groups = async (parent: unknown, { options }: QueryGroupsArgs) => {
	return db.group.findMany({
		where: {
			...(options && options.filter),
		},
		take: (options && options.take) || 48,
		skip: (options && options.skip) || 0,
	});
};
