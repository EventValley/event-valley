import { createGroup } from './createGroup';
import { group } from './group';
import { groups } from './groups';
import { myGroups } from './myGroups';
import { updateGroup } from './updateGroup';

export const groupResolver = {
	Query: {
		group,
		groups,
		myGroups,
	},
	Mutation: {
		createGroup,
		updateGroup,
	},
};
