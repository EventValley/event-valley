import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';

import { config } from '../../../config';
import { prisma } from '../../../lib/db';
import { signUpSchema } from '../../../schemas/signInSchema';
import { queues } from '../../queue';
import { NOTIFICATION_TYPE } from '../../queue/notification';
import { getVerificationToken } from '../getVerificationToken';

export const signUp = async (fastify: FastifyInstance) => {
	fastify.withTypeProvider<ZodTypeProvider>().route({
		method: 'POST',
		url: '/sign-up',
		schema: signUpSchema,
		handler: async (request: any, reply) => {
			try {
				const { email } = request.body;

				const role = await prisma.role.findFirst({ where: { name: 'Member' } });

				if (!role) {
					throw new Error('Role not found');
				}

				const user = await prisma.user.create({
					data: {
						name: '',
						email,
						roleId: role.id,
					},
				});

				const origin = request.headers.origin ? request.headers.origin : config.appUrl;

				const token = await getVerificationToken(user.id);
				const verificationUrl = `${origin}/auth/callback/email/${token}`;

				await queues.notification.add(NOTIFICATION_TYPE.USER_VERIFICATION, { email, verificationUrl });

				reply.send({ message: 'Verification token has been sent to your email!' });
			} catch (error) {
				console.log(error);
				reply.send({ message: 'Error happened while signing up' });
			}
		},
	});
};
