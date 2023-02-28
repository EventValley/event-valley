import { ApiContext } from '../../../types/ApiContext';
import { QueryGroupsArgs } from '../../../types/ApiTypes';

export const groups = async (parent: unknown, { options }: QueryGroupsArgs, { db, user }: ApiContext) => {
	return db.group.findMany({
		where: {
			...(options && options.filter),
			...(options &&
				options.personal && {
					groupUsers: {
						some: {
							userId: user.id,
						},
					},
				}),
		},
		take: (options && options.take) || 24,
		skip: (options && options.skip) || 0,
	});
};
