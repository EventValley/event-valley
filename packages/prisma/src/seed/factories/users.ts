import { faker } from '@faker-js/faker';

import { prisma } from '../lib/prisma';

const { internet, date, name, phone, image, helpers, datatype } = faker;

export const createUsers = async (roleIds: string[], count: number) => {
	const users = datatype.array(count);

	return Promise.all(
		users.map(async () => {
			const newUser = await prisma.user.create({
				data: {
					name: name.fullName(),
					email: internet.email(),
					emailVerified: date.birthdate(),
					image: image.imageUrl(150, 150, 'tech', true),
					birthdate: date.birthdate(),
					phoneNumber: phone.number(),
					roleId: helpers.shuffle(roleIds)[0],
				},
			});

			await prisma.userAccount.create({
				data: {
					provider: 'email',
					providerAccountId: datatype.uuid(),
					userId: newUser.id,
				},
			});

			return newUser;
		})
	);
};
