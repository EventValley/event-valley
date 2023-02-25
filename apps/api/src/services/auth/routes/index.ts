import { FastifyInstance } from 'fastify';

import { callback } from './callback';
import { signIn } from './signIn';
import { signUp } from './signUp';

export const routes = async (fastify: FastifyInstance) => {
	fastify.register(signIn);
	fastify.register(signUp);
	fastify.register(callback);
};
