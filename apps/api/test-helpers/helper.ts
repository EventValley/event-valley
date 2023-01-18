import Fastify from 'fastify';
import fp from 'fastify-plugin';
import { afterAll, beforeAll } from 'vitest';

import { app } from '../src/app';

export function build() {
	const server = Fastify();

	beforeAll(async () => {
		void server.register(fp(app));
		await server.ready();
	});

	afterAll(() => server.close());

	return server;
}
