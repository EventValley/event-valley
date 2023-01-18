import { ApolloServer, BaseContext } from '@apollo/server';
import { fastifyApolloDrainPlugin, fastifyApolloHandler } from '@as-integrations/fastify';
import { loadFiles } from '@graphql-tools/load-files';
import { FastifyInstance } from 'fastify';

import { eventResolver, groupResolver, venueResolver } from './resolvers';

export const api = async (fastify: FastifyInstance) => {
	const apollo = new ApolloServer<BaseContext>({
		typeDefs: await loadFiles('./**/*.graphql'),
		resolvers: [eventResolver, groupResolver, venueResolver],
		plugins: [fastifyApolloDrainPlugin(fastify)],
	});

	await apollo.start();

	fastify.post('/api', fastifyApolloHandler(apollo));
};
