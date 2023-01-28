import { CodegenConfig } from '@graphql-codegen/cli';

import { config } from './config';

const codeGenConfig: CodegenConfig = {
	schema: config.apiUrl,
	documents: ['./api/fragments/*.ts', './api/mutations/*.ts', './api/queries/*.ts'],
	generates: {
		'./types/ApiTypes.ts': { plugins: ['typescript'] },
		'./api/graphql.tsx': {
			plugins: ['typescript', 'typescript-operations', 'typescript-react-apollo'],
		},
	},
	hooks: {
		afterOneFileWrite: ['prettier --write'],
	},
};

export default codeGenConfig;
