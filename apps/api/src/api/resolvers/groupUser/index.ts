import { groupUsers } from './groupUsers';
import { groupUsersCount } from './groupUsersCount';
import { joinGroup } from './joinGroup';
import { leaveGroup } from './leaveGroup';

export const groupUserResolver = {
	Query: {
		groupUsers,
		groupUsersCount,
	},
	Mutation: {
		joinGroup,
		leaveGroup,
	},
};
