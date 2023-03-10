import Fastify, { FastifyInstance } from 'fastify';

import { api } from './api';

export const app = async (instance: FastifyInstance) => {
	await instance.register(api);
};

const port = Number(process.env.PORT) || 3000;

const fastify = Fastify({
	logger: true,
});

(async () => {
	try {
		await fastify.register(app);
		await fastify.listen({ port });
	} catch (error) {
		fastify.log.error(error);
		// process.exit(1);
	}

	['SIGINT', 'SIGTERM'].forEach((signal) => {
		process.once(signal, async () => {
			fastify.close();
		});
	});
})();
