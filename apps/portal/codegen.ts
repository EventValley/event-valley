import { CodegenConfig } from '@graphql-codegen/cli';

import { config } from './config';

const codeGenConfig: CodegenConfig = {
	schema: config.apiUrl,
	generates: { './types/ApiTypes.ts': { plugins: ['typescript'] } },
};

export default codeGenConfig;
