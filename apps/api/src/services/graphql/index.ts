import { ApolloServer, BaseContext } from '@apollo/server';
import { fastifyApolloDrainPlugin, fastifyApolloHandler } from '@as-integrations/fastify';
import { FastifyInstance } from 'fastify';
import gql from 'graphql-tag';

import { group } from './group';

const defaultTypeDefs = gql`
	type Query
	type Mutation
`;

export const graphql = async (fastify: FastifyInstance) => {
	const apollo = new ApolloServer<BaseContext>({
		typeDefs: [defaultTypeDefs, group.typeDefs],
		resolvers: [group.resolvers],
		plugins: [fastifyApolloDrainPlugin(fastify)],
	});

	await apollo.start();

	fastify.post('/api', fastifyApolloHandler(apollo));
};
