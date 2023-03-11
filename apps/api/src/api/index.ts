import { ApolloServer } from '@apollo/server';
import {
	ApolloFastifyContextFunction,
	fastifyApolloDrainPlugin,
	fastifyApolloHandler,
} from '@as-integrations/fastify';
import cors from '@fastify/cors';
import { loadFiles } from '@graphql-tools/load-files';
import { makeExecutableSchema } from '@graphql-tools/schema';
import { FastifyInstance } from 'fastify';

import { prisma } from '../lib/db';
import { authenticate } from '../services/auth/authenticate';
import { ApiContext } from '../types/ApiContext';
import { getAuthorizedSchema } from './directives';
import { resolvers } from './resolvers';

const contextAuth: ApolloFastifyContextFunction<ApiContext> = async (request, reply) => ({
	user: await authenticate(request, reply),
	db: prisma,
});

export const api = async (fastify: FastifyInstance) => {
	let schema = makeExecutableSchema({ typeDefs: await loadFiles('./**/*.graphql'), resolvers });
	schema = getAuthorizedSchema(schema);

	const apollo = new ApolloServer<ApiContext>({
		schema,
		plugins: [fastifyApolloDrainPlugin(fastify)],
	});

	await apollo.start();

	fastify.register(cors, {
		origin: '*',
		methods: ['POST', 'OPTIONS'],
	});

	fastify.post('/api', fastifyApolloHandler(apollo, { context: contextAuth }));
};
