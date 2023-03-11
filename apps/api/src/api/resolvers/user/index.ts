import { me } from './me';
import { user } from './user';

export const userResolver = {
	Query: {
		me,
		user,
	},
};
