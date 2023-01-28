import { prisma } from '../lib/prisma';

export const createRSVPS = async () => {
	const rsvps = ['yes', 'no', 'wait'];

	return Promise.all(
		rsvps.map((rsvp) => {
			return prisma.rsvp.create({
				data: {
					name: rsvp,
				},
			});
		})
	);
};
