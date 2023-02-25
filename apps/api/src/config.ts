import * as dotenv from 'dotenv-flow';
import env from 'env-var';
import path from 'path';

const envPath = path.resolve('../../../../');
dotenv.config({ path: envPath });

export const config = {
	appUrl: env.get('APP_URL').default('http://localhost:3000').asString(),
	cookieName: env.get('COOKIE_NAME').default('evv').asString(),
	cookieSecret: env.get('COOKIE_SECRET').default('evv-secret').asString(),
	jwtSecret: env.get('JWT_SECRET').default('jwt-secret').asString(),
	databaseUrl: env.get('DATABASE_URL').default('postgres://postgres:@localhost:5432/eventvalley').asString(),
};

export const REDIS_HOST = env.get('REDIS_HOST').asString();
export const REDIS_PORT = env.get('REDIS_PORT').asPortNumber();
export const REDIS_USER = env.get('REDIS_USER').asString();
export const REDIS_PASSWORD = env.get('REDIS_PASSWORD').asString();
