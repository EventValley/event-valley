import fastifyAuth from '@fastify/auth';
import cookie from '@fastify/cookie';
import Fastify, { FastifyInstance } from 'fastify';
import { serializerCompiler, validatorCompiler } from 'fastify-type-provider-zod';

import { api } from './api';
import { auth } from './services/auth';

export const app = async (instance: FastifyInstance) => {
	await instance.register(api);
};

const port = Number(process.env.PORT) || 3000;

const fastify = Fastify({
	logger: true,
});

fastify.setValidatorCompiler(validatorCompiler);
fastify.setSerializerCompiler(serializerCompiler);

(async () => {
	try {
		fastify.register(cookie, {
			secret: 'cookie_secret',
			hook: 'onRequest',
			parseOptions: {},
		});
		await fastify.register(app);
		await fastify.register(fastifyAuth);
		await fastify.register(auth);
		// fastify.after(routes);

		await fastify.listen({ port });
	} catch (error) {
		fastify.log.error(error);
		// process.exit(1);
	}

	['SIGINT', 'SIGTERM'].forEach((signal) => {
		process.once(signal, async () => {
			await fastify.close();
		});
	});
})();
