import fastifyAuth from '@fastify/auth';
import fastifyJwt from '@fastify/jwt';
import { FastifyInstance } from 'fastify';

import { config } from '../../config';
import { routes } from './routes';

const verifyJWT = async (request: any, reply: any, done: any) => {
	try {
		await request.jwtVerify();
		done();
	} catch (error) {
		done(error);
	}
};

export const auth = async (fastify: FastifyInstance) => {
	await fastify.register(fastifyAuth);

	await fastify.register(fastifyJwt, {
		secret: config.jwtSecret,
	});

	fastify.decorate('verifyJWT', verifyJWT);
	fastify.register(routes, { prefix: '/auth' });
};
