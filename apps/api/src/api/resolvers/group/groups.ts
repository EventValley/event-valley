import { ApiContext } from '../../../types/ApiContext';
import { QueryGroupsArgs } from '../../../types/ApiTypes';

export const groups = async (parent: unknown, { options }: QueryGroupsArgs, { db }: ApiContext) => {
	return db.group.findMany({
		where: {
			...(options && options.filter),
		},
		take: (options && options.take) || 24,
		skip: (options && options.skip) || 0,
	});
};
