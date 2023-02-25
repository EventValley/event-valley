import { PrismaClient } from '@prisma/client';

export const prisma = new PrismaClient();

declare global {
	const prisma: PrismaClient | undefined;
}

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
export const db = globalThis.prisma || new PrismaClient();
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
if (process.env.NODE_ENV !== 'production') globalThis.prisma = db;

export default db;
