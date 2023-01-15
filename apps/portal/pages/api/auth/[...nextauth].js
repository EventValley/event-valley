import NextAuth from 'next-auth';
import EmailProvider from 'next-auth/providers/email';

import db from '../../../lib/db';
import PrismaAdapter from '../../../lib/prisma-adapter';

export const authOptions = {
	adapter: PrismaAdapter(db),
	providers: [
		EmailProvider({
			server: {
				host: process.env.MAIL_SMTP_HOST,
				port: process.env.MAIL_SMTP_PORT,
				auth: {
					user: process.env.MAIL_SMTP_USER,
					pass: process.env.MAIL_SMTP_PASS,
				},
			},
			from: process.env.EMAIL_FROM,
		}),
	],
};

export default NextAuth(authOptions);
