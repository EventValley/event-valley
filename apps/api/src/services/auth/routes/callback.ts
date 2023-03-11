import { FastifyInstance } from 'fastify';
import { ZodTypeProvider } from 'fastify-type-provider-zod';

import { prisma } from '../../../lib/db';
import { callbackSchema } from '../../../schemas/signInSchema';
import { signJWT } from '../jwt';

export const callback = async (fastify: FastifyInstance) => {
	fastify.withTypeProvider<ZodTypeProvider>().route({
		method: 'GET',
		url: '/callback/email/:token',
		schema: callbackSchema,
		handler: async (request: any, reply) => {
			const { token } = request.params;

			if (!token) {
				reply.code(400).send({
					error: 'Error while authenticating',
				});
			}

			try {
				const verificationToken = await prisma.verificationToken.findFirst({
					where: {
						token: token,
					},
				});

				if (!verificationToken) {
					reply.code(400).send({
						error: 'Invalid token',
					});
					return;
				}

				if (verificationToken.expires <= new Date()) {
					reply.code(400).send({
						error: 'Invalid token',
					});
					return;
				}

				await prisma.verificationToken.delete({
					where: {
						identifierToken: {
							token: token,
							identifier: verificationToken.identifier,
						},
					},
				});

				const newToken = signJWT({ userId: verificationToken.identifier });

				reply.send({ token: newToken });
			} catch (error) {
				console.log('error', error);

				reply.code(400).send({
					error: 'Invalid token',
				});
			}
		},
	});
};
