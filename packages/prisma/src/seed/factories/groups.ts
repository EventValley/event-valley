import { faker } from '@faker-js/faker';

import { prisma } from '../lib/prisma';

const { company, lorem, address, image, datatype, helpers } = faker;

export const createGroups = async (userIds: string[], count: number) => {
	const groups = datatype.array(count);

	return Promise.all(
		groups.map(async () => {
			return prisma.group.create({
				data: {
					name: company.name(),
					description: lorem.words(),
					city: address.city(),
					postalCode: address.zipCode(),
					region: address.state(),
					country: address.country(),
					logo: image.imageUrl(150, 150, 'tech', true),
					banner: image.imageUrl(150, 150, 'tech', true),
					creatorId: helpers.shuffle(userIds)[0],
				},
			});
		})
	);
};
