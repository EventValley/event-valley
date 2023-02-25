import db from '../../lib/db';

export const userResolver = {
	Query: {
		user: async (parent: unknown, args: unknown, ctx: any) => {
			return db.user.findUnique({
				where: { id: ctx.user.id },
				include: {
					role: true,
					accounts: true,
				},
			});
		},
	},
};
