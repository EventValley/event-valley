import * as dotenv from 'dotenv-flow';
import env from 'env-var';
import path from 'path';

const envPath = path.resolve('../../../../');
dotenv.config({ path: envPath });

export const config = {
	cookieName: env.get('COOKIE_NAME').default('evv').asString(),
	cookieSecret: env.get('COOKIE_SECRET').default('evv-secret').asString(),
	jwtSecret: env.get('JWT_SECRET').default('jwt-secret').asString(),
	databaseUrl: env.get('DATABASE_URL').default('postgres://postgres:@localhost:5432/eventvalley').asString(),
};
