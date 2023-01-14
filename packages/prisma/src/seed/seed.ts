import { PrismaClient } from '@prisma/client';

import { createEvents, createEventStatuses } from './factories/events';
import { createGroups } from './factories/groups';
import { createGroupRoles, createRoles } from './factories/roles';
import { createUsers } from './factories/users';
import { createVenues } from './factories/venues';
const prisma = new PrismaClient();

async function main() {
	const roles = await createRoles();
	const roleIds = roles.map((role) => role.id);
	const groupRoles = await createGroupRoles();
	const users = await createUsers(roleIds, 8);

	const organizerRole = roles.find((role) => role.name === 'Organizer');

	if (!organizerRole) {
		console.warn('No Organizer role found');
		return;
	}

	const organizers = users.filter((user) => user.roleId === organizerRole.id);
	const organizerIds = organizers.map((organizer) => organizer.id);

	const groups = await createGroups(organizerIds, 8);
	const groupIds = groups.map((group) => group.id);

	const venues = await createVenues(groupIds, 48);
	const venueIds = venues.map((venue) => venue.id);

	const eventStatuses = await createEventStatuses();
	const eventStatusIds = eventStatuses.map((status) => status.id);

	const events = await createEvents(groupIds, venueIds, eventStatusIds, 120);

	console.log('User created', users.length);
	console.log('Groups created', groups.length);
	console.log('Venues created', venues.length);
	console.log('Events created', events.length);
}

main()
	.then(async () => {
		await prisma.$disconnect();
	})
	.catch(async (e) => {
		console.error(e);
		await prisma.$disconnect();
		process.exit(1);
	});
