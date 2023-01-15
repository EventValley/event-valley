import { PrismaClient } from '@prisma/client';

declare global {
	const prisma: PrismaClient | undefined;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const client = globalThis.prisma || new PrismaClient();
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
if (process.env.NODE_ENV !== 'production') globalThis.prisma = client;

export default client;
