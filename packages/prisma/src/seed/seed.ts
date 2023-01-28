import { GroupRoles } from '@event-valley/shared';
import { PrismaClient } from '@prisma/client';

import { createEvents, createEventStatuses, createEventUsers } from './factories/events';
import { createGroups, createGroupUsers } from './factories/groups';
import { createEventRoles, createGroupRoles, createRoles } from './factories/roles';
import { createRSVPS } from './factories/rsvps';
import { createUsers } from './factories/users';
import { createVenues } from './factories/venues';

const prisma = new PrismaClient();

async function main() {
	const roles = await createRoles();
	const roleIds = roles.map((role) => role.id);
	const groupRoles = await createGroupRoles();
	const eventRoles = await createEventRoles();
	const rsvps = await createRSVPS();

	const organizerRole = roles.find((role) => role.name === 'Organizer');
	const memberRole = roles.find((role) => role.name === 'Member');

	const groupAdminRole = groupRoles.find((role) => role.name === GroupRoles.Administrator);
	const groupMemberRole = groupRoles.find((role) => role.name === GroupRoles.Member);

	const eventAdminRole = eventRoles.find((role) => role.name === GroupRoles.Administrator);
	const eventMemberRole = eventRoles.find((role) => role.name === GroupRoles.Member);

	if (
		!organizerRole ||
		!memberRole ||
		!groupAdminRole ||
		!groupMemberRole ||
		!eventAdminRole ||
		!eventMemberRole
	) {
		console.warn('No Organizer role found');
		return;
	}

	const organizers = await createUsers([organizerRole.id], 8);
	const members = await createUsers([memberRole.id], 200);

	const organizerIds = organizers.map((organizer) => organizer.id);
	const membersIds = members.map((members) => members.id);

	const groups = await createGroups(organizerIds, 8);
	const groupIds = groups.map((group) => group.id);

	const groupAdmins = await createGroupUsers(groupAdminRole.id, groupIds, organizerIds, 4);
	const groupMembers = await createGroupUsers(groupMemberRole.id, groupIds, membersIds, 96);

	const venues = await createVenues(groupIds, 48);
	const venueIds = venues.map((venue) => venue.id);

	const eventStatuses = await createEventStatuses();
	const eventStatusIds = eventStatuses.map((status) => status.id);

	const events = await createEvents(groupIds, venueIds, eventStatusIds, 120);
	const eventAdmins = await createEventUsers(events, rsvps, groupAdmins, eventAdminRole.id);
	const eventMembers = await createEventUsers(events, rsvps, groupMembers, eventMemberRole.id);

	console.log('Organizers created', organizers.length);
	console.log('Members created', members.length);
	console.log('Groups created', groups.length);
	console.log('Group admins created', groupAdmins.length);
	console.log('Group members created', groupMembers.length);
	console.log('Venues created', venues.length);
	console.log('Events created', events.length);
	console.log('Event Admins created', eventAdmins);
	console.log('Event Members created', eventMembers);
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
