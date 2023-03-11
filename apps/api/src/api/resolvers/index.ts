import { eventResolver } from './event';
import { eventRoleResolver } from './eventRole';
import { eventUserResolver } from './eventUser';
import { groupResolver } from './group';
import { groupRoleResolver } from './groupRole';
import { groupUserResolver } from './groupUser';
import { rsvpResolver } from './rsvp';
import { userResolver } from './user';
import { venueResolver } from './venue.resolver';

export const resolvers = [
	eventResolver,
	eventRoleResolver,
	eventUserResolver,
	groupResolver,
	groupRoleResolver,
	groupUserResolver,
	rsvpResolver,
	userResolver,
	venueResolver,
];
