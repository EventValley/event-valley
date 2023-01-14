import { faker } from '@faker-js/faker';

import { prisma } from '../lib/prisma';

const { company, lorem, image, helpers, date } = faker;

export const createEvents = async (
	groupIds: string[],
	venueIds: string[],
	eventStatusIds: string[],
	count: number
) => {
	const events = faker.datatype.array(count);

	return Promise.all(
		events.map(async () => {
			return prisma.event.create({
				data: {
					name: company.name(),
					description: lorem.words(),
					startsAt: date.soon(),
					endsAt: date.soon(1),
					capacity: 123,
					inviteOnly: false,
					image: image.imageUrl(640, 480, 'nature', true),
					groupId: helpers.shuffle(groupIds)[0],
					venueId: helpers.shuffle(venueIds)[0],
					statusId: helpers.shuffle(eventStatusIds)[0],
				},
			});
		})
	);
};

export const createEventStatuses = async () => {
	const statuses = ['Draft', 'Scheduled', 'Live', 'Canceled'];

	return Promise.all(
		statuses.map(async (status: string) => {
			return prisma.eventStatus.create({
				data: {
					name: status,
				},
			});
		})
	);
};
