import { CodegenConfig } from '@graphql-codegen/cli';

// import { config } from './config';

const codeGenConfig: CodegenConfig = {
	schema: 'http://localhost:3000/api',
	documents: ['./lib/graphql/fragments/*.ts', './lib/graphql/mutations/*.ts', './lib/graphql/queries/*.ts'],
	generates: {
		'./types/GeneratedTypes.ts': {
			plugins: ['typescript', 'typescript-operations'],
		},
	},
	hooks: {
		afterOneFileWrite: ['prettier --write'],
	},
};

export default codeGenConfig;
