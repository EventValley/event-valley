import * as dotenv from 'dotenv-flow';
import env from 'env-var';
import path from 'path';

const envPath = path.resolve('../../');
dotenv.config({ path: envPath });

export const config = {
	apiUrl: env.get('API_URL').default('http://localhost:3000/api').asString(),
};
