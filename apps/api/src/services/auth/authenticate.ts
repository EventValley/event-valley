import { prisma } from '../../lib/db';
import { JWTPayload } from '../../types/JWTPayload';
import { verifyJWT } from './jwt';

export const authenticate = async (request: any, reply: any) => {
	const auth = request.headers.authorization;
	const cookie = request.cookies.ev;
	const token = auth ? auth.split(' ')[1] : cookie;

	if (!token) {
		reply.code(401).send({ error: 'Unauthorized' });
		return false;
	}

	const decodedToken = verifyJWT(token) as JWTPayload;

	if (!decodedToken) {
		reply.code(401).send({ error: 'Unauthorized' });
		return false;
	}

	const user = await prisma.user.findFirst({
		where: {
			id: decodedToken.userId,
		},
		include: {
			role: true,
		},
	});

	if (!user) {
		reply.code(401).send({ error: 'Unauthorized' });
		return false;
	}

	return user;
};
