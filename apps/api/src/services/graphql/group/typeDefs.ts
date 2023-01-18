import gql from 'graphql-tag';

export const typeDefs = gql`
	type Group {
		id: ID!
		name: String!
		description: String!
		city: String
		postalCode: String
		region: String
		country: String
		logo: String
		banner: String
		creatorId: String!
		createdAt: String!
		modifiedAt: String!
	}

	enum GroupOrderDirection {
		asc
		desc
	}

	input GroupWhereFilter {
		id: ID
		name: String
		createdAt: String
		updatedAt: String
	}

	input GroupFilter {
		where: GroupWhereFilter
	}

	input GroupOrderBy {
		createdAt: GroupOrderDirection
	}

	input GroupOptions {
		filter: GroupFilter
		take: Int
		skip: Int
		cursor: Int
		orderBy: GroupOrderBy
	}

	extend type Query {
		group(id: ID!): Group
		groups(options: GroupOptions): [Group]!
	}

	input CreateProductInput {
		name: String!
		description: String!
		city: String
		postalCode: String
		region: String
		country: String
		logo: String
		banner: String
		creatorId: String
	}

	input UpdateProductInput {
		id: ID!
		name: String
		description: String
		city: String
		postalCode: String
		region: String
		country: String
		logo: String
		banner: String
		creatorId: String
	}

	extend type Mutation {
		createGroup(input: CreateProductInput): Group!
		updateGroup(input: UpdateProductInput): Group!
	}
`;
