import { PrismaClient } from '@prisma/client';

export type ApiContext = {
	user: any | null;
	db: PrismaClient;
};
