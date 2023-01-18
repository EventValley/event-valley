import { CodegenConfig } from '@graphql-codegen/cli';

const config: CodegenConfig = {
	schema: 'src/api/schema/**/*.graphql',
	generates: { './src/types/ApiTypes.ts': { plugins: ['typescript'] } },
};

export default config;
