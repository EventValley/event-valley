import slugify from 'slugify';

import { ApiContext } from '../../../types/ApiContext';
import { MutationCreateGroupArgs } from '../../../types/GeneratedTypes';

export const createGroup = async (
	parent: unknown,
	{ input }: MutationCreateGroupArgs,
	{ db }: ApiContext
) => {
	return db.group.create({
		data: {
			...input,
			slug: slugify(input.name, { lower: true }),
		},
	});
};
