import { faker } from '@faker-js/faker';

import { prisma } from '../lib/prisma';

const { company, address, helpers } = faker;

export const createVenues = async (groupIds: string[], count: number) => {
	const venues = faker.datatype.array(count);

	return Promise.all(
		venues.map(async () => {
			return prisma.venue.create({
				data: {
					name: company.name(),
					streetAddress: address.streetAddress(),
					city: address.city(),
					postalCode: address.zipCode(),
					region: address.state(),
					country: address.country(),
					latitude: Number(address.latitude()),
					longitude: Number(address.longitude()),
					groupId: helpers.shuffle(groupIds)[0],
				},
			});
		})
	);
};
