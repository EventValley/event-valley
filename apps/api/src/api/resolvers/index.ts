import { eventResolver } from './event';
import { groupResolver } from './group';
import { userResolver } from './user.resolver';
import { venueResolver } from './venue.resolver';

export const resolvers = [eventResolver, groupResolver, userResolver, venueResolver];
