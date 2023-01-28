import { faker } from '@faker-js/faker';
import { Prisma } from '@prisma/client';
import slugify from 'slugify';

import { prisma } from '../lib/prisma';

const { company, lorem, address, image, datatype, helpers } = faker;

export const createGroups = async (userIds: string[], count: number) => {
	const groups = datatype.array(count);

	return Promise.all(
		groups.map(async () => {
			const name = company.name();
			const slug = slugify(name, { lower: true });

			return prisma.group.create({
				data: {
					name,
					slug,
					description: lorem.paragraphs(4),
					city: address.city(),
					postalCode: address.zipCode(),
					region: address.state(),
					country: address.country(),
					logo: image.imageUrl(150, 150, 'tech', true),
					banner: image.imageUrl(960, 320, 'landscape', true),
					creatorId: helpers.shuffle(userIds)[0],
				},
			});
		})
	);
};

export const createGroupUsers = async (
	groupRoleId: string,
	groupIds: string[],
	userIds: string[],
	maxUserPerGroup: number
) => {
	const groupUsers: Prisma.GroupUserCreateManyInput[] = [];

	groupIds.forEach((groupId) => {
		const max = faker.datatype.number({ min: 1, max: maxUserPerGroup });
		const currentGroupUsers = helpers.arrayElements(userIds, max);

		currentGroupUsers.forEach((userId) => {
			groupUsers.push({
				groupId,
				userId: userId,
				groupRoleId: groupRoleId,
			});
		});
	});

	return Promise.all(
		groupUsers.map(async (groupUser) => {
			return prisma.groupUser.create({
				data: groupUser,
			});
		})
	);
};
