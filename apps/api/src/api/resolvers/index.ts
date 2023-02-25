import { eventResolver } from './event.resolver';
import { groupResolver } from './group.resolver';
import { userResolver } from './user.resolver';
import { venueResolver } from './venue.resolver';

export const resolvers = [eventResolver, groupResolver, userResolver, venueResolver];
