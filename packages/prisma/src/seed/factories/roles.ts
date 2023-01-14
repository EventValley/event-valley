import { GroupRoles, Roles } from '@event-valley/shared';

import { prisma } from '../lib/prisma';

export const createRoles = async () => {
	const roles = [Roles.Organizer, Roles.Member];

	return Promise.all(
		roles.map(async (role) => {
			return prisma.role.create({
				data: {
					name: role,
				},
			});
		})
	);
};

export const createGroupRoles = async () => {
	const roles = [GroupRoles.Administrator, GroupRoles.Member];

	return Promise.all(
		roles.map(async (role) => {
			return prisma.groupRole.create({
				data: {
					name: role,
				},
			});
		})
	);
};
