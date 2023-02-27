import { CodegenConfig } from '@graphql-codegen/cli';

// import { config } from './config';

const codeGenConfig: CodegenConfig = {
	schema: 'http://localhost:3000/api',
	documents: [
		'./lib/graphql/fragments/*.ts',
		'./lib/graphql/fragments/*.graphql',
		'./lib/graphql/mutations/*.ts',
		'./lib/graphql/queries/*.ts',
		'./lib/graphql/queries/*.graphql',
	],
	generates: {
		'./lib/graphql/graphql.tsx': {
			plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
			config: {
				inlineFragmentTypes: 'combined',
			},
		},
	},
	hooks: {
		afterOneFileWrite: ['prettier --write'],
	},
};

export default codeGenConfig;
