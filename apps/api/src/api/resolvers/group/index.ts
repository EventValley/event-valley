import { createGroup } from './createGroup';
import { group } from './group';
import { groups } from './groups';
import { updateGroup } from './updateGroup';

export const groupResolver = {
	Query: {
		group,
		groups,
	},
	Mutation: {
		createGroup,
		updateGroup,
	},
};
