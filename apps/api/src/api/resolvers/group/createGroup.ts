import slugify from 'slugify';

import db from '../../../lib/db';
import { MutationCreateGroupArgs } from '../../../types/ApiTypes';

export const createGroup = async (parent: unknown, { input }: MutationCreateGroupArgs) => {
	return db.group.create({
		data: {
			...input,
			slug: slugify(input.name, { lower: true }),
		},
	});
};
