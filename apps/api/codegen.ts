import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: 'src/api/schema/**/*.graphql',
	generates: {
		'./src/types/GeneratedTypes.ts': {
			plugins: ['typescript'],
			config: {
				maybeValue: 'T | undefined',
				inputMaybeValue: 'Maybe<T>',
			},
		},
	},
};

export default config;
