/** @return { import("next-auth/adapters").Adapter } */

import { Roles } from '@/types/Roles';

export default function PrismaAdapter(db: any, options = {}) {
	return {
		async createUser(user: any) {
			const defaultRole = await db.role.findUnique({
				where: {
					name: Roles.Member,
				},
			});

			return db.user.create({
				data: {
					...user,
					role: {
						connect: {
							name: defaultRole.name,
						},
					},
				},
			});
		},
		async getUser(id: string) {
			return db.user.findUniqueOrThrow({ where: { id } });
		},
		async getUserByEmail(email: string) {
			return db.user.findUnique({ where: { email: email } });
		},
		async getUserByAccount({ providerAccountId, provider }: any) {
			return db.user.findUnique({
				where: {
					userAccount: {
						providerAccountId,
						provider,
					},
				},
			});
		},
		async updateUser(user: any) {
			return db.user.update({
				where: { id: user.id },
				data: {
					...user,
				},
			});
		},
		async deleteUser(userId: string) {
			return db.user.delete({ where: { id: userId } });
		},
		async linkAccount(account: any) {
			console.log(account, account);

			return;
			// db.user.update({
			// 	where: { id: account.userId },
			// 	data: {
			// 		account: {
			// 			connect: { id: 24 },
			// 		},
			// 	},
			// });
		},
		async unlinkAccount({ providerAccountId, provider }: any) {
			return;
		},
		async createSession({ sessionToken, userId, expires }: any) {
			return db.session.create({
				data: {
					sessionToken,
					userId,
					expires,
				},
			});
		},
		async getSessionAndUser(sessionToken: string) {
			const session = await db.session.findUnique({
				where: {
					sessionToken,
				},
			});

			const user = await db.user.findUnique({
				where: {
					id: session.userId,
				},
			});

			if (!session || !user) {
				return null;
			}

			return {
				session,
				user,
			};
		},
		async updateSession({ sessionToken, expires }: { sessionToken: string; userId: string; expires: Date }) {
			return db.session.update({
				where: {
					sessionToken,
				},
				data: {
					expires,
				},
			});
		},
		async deleteSession(sessionToken: string) {
			return db.session.delete({
				where: {
					sessionToken,
				},
			});
		},
		async createVerificationToken({
			identifier,
			expires,
			token,
		}: {
			identifier: string;
			expires: Date;
			token: string;
		}) {
			return db.verificationToken.create({
				data: {
					identifier,
					expires,
					token,
				},
			});
		},
		async useVerificationToken({ identifier, token }: { identifier: string; token: string }) {
			return db.verificationToken.findUnique({
				where: {
					identifierToken: {
						identifier,
						token,
					},
				},
			});
		},
	};
}
