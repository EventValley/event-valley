import { faker } from '@faker-js/faker';
import { Event, GroupUser, Prisma, rsvp } from '@prisma/client';

import { prisma } from '../lib/prisma';

const { company, lorem, image, helpers, date, datatype } = faker;

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
					capacity: datatype.number({ max: 100 }),
					canceled: false,
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

export const createEventUsers = async (
	events: Event[],
	rsvps: rsvp[],
	groupUsers: GroupUser[],
	eventRoleId: string
) => {
	const eventUsers: Prisma.EventUserCreateManyInput[] = [];

	events.forEach((event) => {
		const matchingGroupUsers = groupUsers.filter((groupUser) => groupUser.groupId === event.groupId);

		if (matchingGroupUsers.length > 0) {
			const max = faker.datatype.number({ min: 1, max: matchingGroupUsers.length });
			const usersForEvent = helpers.arrayElements(helpers.shuffle(matchingGroupUsers), max);

			usersForEvent.forEach((currentGroupUser) => {
				eventUsers.push({
					eventId: event.id,
					userId: currentGroupUser.userId,
					rsvpId: helpers.shuffle(rsvps)[0].id,
					eventRoleId,
				});
			});
		}
	});

	return prisma.eventUser.createMany({
		data: eventUsers,
	});
};
