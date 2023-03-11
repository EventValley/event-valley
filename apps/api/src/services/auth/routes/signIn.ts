import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';

import { config } from '../../../config';
import { prisma } from '../../../lib/db';
import { signInSchema } from '../../../schemas/signInSchema';
import { queues } from '../../queue';
import { NOTIFICATION_TYPE } from '../../queue/notification';
import { getVerificationToken } from '../getVerificationToken';

export const signIn = async (fastify: FastifyInstance) => {
	fastify.withTypeProvider<ZodTypeProvider>().route({
		method: ['POST', 'OPTIONS'],
		url: '/sign-in',
		schema: signInSchema,
		handler: async (request: any, reply) => {
			try {
				const { email } = request.body;
				const user = await prisma.user.findFirst({ where: { email } });

				if (!user) {
					reply.code(401).send({ error: 'Unauthorized' });
					return;
				}

				const origin = request.headers.origin ? request.headers.origin : config.appUrl;

				const token = await getVerificationToken(user.id);
				const verificationUrl = `${origin}/auth/callback/email/${token}`;

				await queues.notification.add(NOTIFICATION_TYPE.USER_VERIFICATION, { email, verificationUrl });

				reply.send({ message: 'Verification token has been sent to your email!' });
			} catch (error) {
				console.log('error', error);
				reply.send({ error });
			}
		},
	});
};
