import { PrismaClient } from '@prisma/client';

declare global {
	const prisma: PrismaClient | undefined;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const db = globalThis.prisma || new PrismaClient();
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;

export default db;
