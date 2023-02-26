import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
};

export type CreateEventInput = {
	capacity?: InputMaybe<Scalars['Int']>;
	description: Scalars['String'];
	endsAt: Scalars['String'];
	groupId: Scalars['String'];
	image?: InputMaybe<Scalars['String']>;
	inviteOnly?: InputMaybe<Scalars['Boolean']>;
	name: Scalars['String'];
	startsAt: Scalars['String'];
	statusId: Scalars['String'];
	venueId?: InputMaybe<Scalars['String']>;
};

export type CreateGroupInput = {
	banner?: InputMaybe<Scalars['String']>;
	city?: InputMaybe<Scalars['String']>;
	country?: InputMaybe<Scalars['String']>;
	creatorId?: InputMaybe<Scalars['String']>;
	description: Scalars['String'];
	logo?: InputMaybe<Scalars['String']>;
	name: Scalars['String'];
	postalCode?: InputMaybe<Scalars['String']>;
	region?: InputMaybe<Scalars['String']>;
};

export type DateOperators = {
	equals?: InputMaybe<Scalars['String']>;
	gt?: InputMaybe<Scalars['String']>;
	lt?: InputMaybe<Scalars['String']>;
};

export type Event = {
	__typename?: 'Event';
	canceled?: Maybe<Scalars['Boolean']>;
	capacity?: Maybe<Scalars['Int']>;
	createdAt?: Maybe<Scalars['String']>;
	description: Scalars['String'];
	endsAt: Scalars['String'];
	eventUsers?: Maybe<Array<Maybe<EventUser>>>;
	group: Group;
	groupId: Scalars['String'];
	id: Scalars['ID'];
	image: Scalars['String'];
	inviteOnly?: Maybe<Scalars['Boolean']>;
	modifiedAt?: Maybe<Scalars['String']>;
	name: Scalars['String'];
	startsAt: Scalars['String'];
	status?: Maybe<EventStatus>;
	statusId: Scalars['String'];
	streamUrl?: Maybe<Scalars['String']>;
	url?: Maybe<Scalars['String']>;
	venue?: Maybe<Venue>;
	venueId?: Maybe<Scalars['String']>;
};

export type EventBannedUser = {
	__typename?: 'EventBannedUser';
	createdAt: Scalars['String'];
	event?: Maybe<Event>;
	eventId: Scalars['String'];
	id: Scalars['ID'];
	modifiedAt: Scalars['String'];
	user?: Maybe<User>;
	userId: Scalars['String'];
};

export type EventFilter = {
	createdAt?: InputMaybe<DateOperators>;
	groupId?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<IdOperators>;
	name?: InputMaybe<StringOperators>;
	updatedAt?: InputMaybe<DateOperators>;
};

export type EventOptions = {
	cursor?: InputMaybe<Scalars['Int']>;
	filter?: InputMaybe<EventFilter>;
	orderBy?: InputMaybe<EventOrderBy>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
};

export type EventOrderBy = {
	createdAt?: InputMaybe<OrderDirection>;
};

export type EventPermission = {
	__typename?: 'EventPermission';
	createdAt: Scalars['String'];
	eventRolePermission?: Maybe<Array<Maybe<EventRolePermission>>>;
	id: Scalars['ID'];
	modifiedAt: Scalars['String'];
	name: Scalars['String'];
};

export type EventRole = {
	__typename?: 'EventRole';
	createdAt: Scalars['String'];
	eventRolePermission: Array<Maybe<EventRolePermission>>;
	eventRoles: Array<Maybe<EventRole>>;
	eventUsers: Array<Maybe<User>>;
	id: Scalars['ID'];
	modifiedAt: Scalars['String'];
	name: Scalars['String'];
};

export type EventRolePermission = {
	__typename?: 'EventRolePermission';
	createdAt: Scalars['String'];
	eventPermission?: Maybe<EventPermission>;
	eventPermissionId: Scalars['String'];
	eventRole: EventRole;
	eventRoleId: Scalars['String'];
	id: Scalars['ID'];
	modifiedAt: Scalars['String'];
};

export type EventStatus = {
	__typename?: 'EventStatus';
	createdAt: Scalars['String'];
	events: Array<Maybe<Event>>;
	id: Scalars['ID'];
	modifiedAt: Scalars['String'];
	name: Scalars['String'];
};

export type EventUser = {
	__typename?: 'EventUser';
	createdAt: Scalars['String'];
	event?: Maybe<Event>;
	eventId: Scalars['String'];
	eventRole?: Maybe<EventRole>;
	eventRoleId: Scalars['String'];
	id: Scalars['ID'];
	modifiedAt: Scalars['String'];
	rsvp?: Maybe<Rsvp>;
	rsvpId: Scalars['String'];
	user: User;
	userId: Scalars['String'];
};

export type Group = {
	__typename?: 'Group';
	banner: Scalars['String'];
	city?: Maybe<Scalars['String']>;
	country?: Maybe<Scalars['String']>;
	createdAt: Scalars['String'];
	creatorId: Scalars['String'];
	description: Scalars['String'];
	id: Scalars['ID'];
	logo: Scalars['String'];
	modifiedAt: Scalars['String'];
	name: Scalars['String'];
	postalCode?: Maybe<Scalars['String']>;
	region?: Maybe<Scalars['String']>;
	slug: Scalars['String'];
};

export type GroupBannedUser = {
	__typename?: 'GroupBannedUser';
	createdAt: Scalars['String'];
	group?: Maybe<Group>;
	groupId: Scalars['String'];
	id: Scalars['ID'];
	modifiedAt: Scalars['String'];
	user?: Maybe<User>;
	userId: Scalars['String'];
};

export type GroupFilter = {
	where?: InputMaybe<GroupWhereFilter>;
};

export type GroupOptions = {
	cursor?: InputMaybe<Scalars['Int']>;
	filter?: InputMaybe<GroupFilter>;
	orderBy?: InputMaybe<GroupOrderBy>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
};

export type GroupOrderBy = {
	createdAt?: InputMaybe<OrderDirection>;
};

export type GroupPermission = {
	__typename?: 'GroupPermission';
	createdAt: Scalars['String'];
	groupRolePermissions?: Maybe<Array<Maybe<GroupRolePermission>>>;
	id: Scalars['ID'];
	modifiedAt: Scalars['String'];
	name: Scalars['String'];
};

export type GroupRole = {
	__typename?: 'GroupRole';
	createdAt: Scalars['String'];
	groupRolePermissions?: Maybe<Array<Maybe<GroupRolePermission>>>;
	groupUsers?: Maybe<Array<Maybe<GroupUser>>>;
	id: Scalars['ID'];
	modifiedAt: Scalars['String'];
	name: Scalars['String'];
};

export type GroupRolePermission = {
	__typename?: 'GroupRolePermission';
	createdAt: Scalars['String'];
	groupPermission?: Maybe<GroupPermission>;
	groupPermissionId: Scalars['String'];
	groupRole: GroupRole;
	groupRoleId: Scalars['String'];
	id: Scalars['ID'];
	modifiedAt: Scalars['String'];
};

export type GroupUser = {
	__typename?: 'GroupUser';
	createdAt: Scalars['String'];
	group: Group;
	groupId: Scalars['String'];
	groupRole: GroupRole;
	groupRoleId: Scalars['String'];
	id: Scalars['ID'];
	modifiedAt: Scalars['String'];
	user: User;
	userId: Scalars['String'];
};

export type GroupWhereFilter = {
	createdAt?: InputMaybe<DateOperators>;
	id?: InputMaybe<IdOperators>;
	name?: InputMaybe<StringOperators>;
	updatedAt?: InputMaybe<DateOperators>;
};

export type GroupWithRelations = {
	__typename?: 'GroupWithRelations';
	banner: Scalars['String'];
	city?: Maybe<Scalars['String']>;
	country?: Maybe<Scalars['String']>;
	createdAt: Scalars['String'];
	creatorId: Scalars['String'];
	description: Scalars['String'];
	events?: Maybe<Array<Maybe<Event>>>;
	groupUsers?: Maybe<Array<Maybe<GroupUser>>>;
	id: Scalars['ID'];
	logo: Scalars['String'];
	modifiedAt: Scalars['String'];
	name: Scalars['String'];
	postalCode?: Maybe<Scalars['String']>;
	region?: Maybe<Scalars['String']>;
	slug: Scalars['String'];
};

export type IdOperators = {
	contains?: InputMaybe<Scalars['String']>;
	equals?: InputMaybe<Scalars['String']>;
	in?: InputMaybe<Array<Scalars['String']>>;
	not?: InputMaybe<Scalars['String']>;
	notIn?: InputMaybe<Array<Scalars['String']>>;
	search?: InputMaybe<Scalars['String']>;
};

export type Mutation = {
	__typename?: 'Mutation';
	createEvent: Event;
	createGroup: Group;
	createVenue: Venue;
	joinGroup?: Maybe<GroupUser>;
	leaveGroup?: Maybe<GroupUser>;
	subscribeToEvent?: Maybe<EventUser>;
	unsubscribeToEvent?: Maybe<EventUser>;
	updateEvent: Event;
	updateGroup: Group;
	updateVenue: Venue;
};

export type MutationCreateEventArgs = {
	input: CreateEventInput;
};

export type MutationCreateGroupArgs = {
	input: CreateGroupInput;
};

export type MutationCreateVenueArgs = {
	input: CreateEventInput;
};

export type MutationJoinGroupArgs = {
	groupId: Scalars['ID'];
};

export type MutationLeaveGroupArgs = {
	groupId: Scalars['ID'];
};

export type MutationSubscribeToEventArgs = {
	eventId: Scalars['ID'];
};

export type MutationUnsubscribeToEventArgs = {
	eventId: Scalars['ID'];
};

export type MutationUpdateEventArgs = {
	input: UpdateEventInput;
};

export type MutationUpdateGroupArgs = {
	input: UpdateGroupInput;
};

export type MutationUpdateVenueArgs = {
	input: UpdateEventInput;
};

export enum OrderDirection {
	Asc = 'asc',
	Desc = 'desc',
}

export type Permission = {
	__typename?: 'Permission';
	createdAt: Scalars['String'];
	id: Scalars['ID'];
	modifiedAt: Scalars['String'];
	name: Scalars['String'];
	rolePermissions?: Maybe<Array<Maybe<RolePermission>>>;
};

export type Query = {
	__typename?: 'Query';
	event?: Maybe<Event>;
	eventBannedUsers: Array<Maybe<EventBannedUser>>;
	eventPermissions: Array<Maybe<EventPermission>>;
	eventRolePermissions: Array<Maybe<EventRolePermission>>;
	eventStatuses: Array<Maybe<EventStatus>>;
	events: Array<Maybe<Event>>;
	group?: Maybe<GroupWithRelations>;
	groupBannedUsers: Array<Maybe<GroupBannedUser>>;
	groupPermissions: Array<Maybe<GroupPermission>>;
	groupRolePermissions: Array<Maybe<GroupRolePermission>>;
	groupRoles: Array<Maybe<GroupRole>>;
	groupUsers?: Maybe<Array<Maybe<GroupUser>>>;
	groups: Array<Maybe<Group>>;
	myEvents: Array<Maybe<Event>>;
	myGroups: Array<Maybe<Group>>;
	permissions: Array<Maybe<Permission>>;
	upcomingEvents: Array<Maybe<Event>>;
	user?: Maybe<User>;
	users?: Maybe<Array<Maybe<User>>>;
	venue?: Maybe<Venue>;
	venues: Array<Maybe<Venue>>;
};

export type QueryEventArgs = {
	id: Scalars['ID'];
};

export type QueryEventsArgs = {
	options?: InputMaybe<EventOptions>;
};

export type QueryGroupArgs = {
	id?: InputMaybe<Scalars['ID']>;
	slug?: InputMaybe<Scalars['String']>;
};

export type QueryGroupsArgs = {
	options?: InputMaybe<GroupOptions>;
};

export type QueryMyGroupsArgs = {
	options?: InputMaybe<GroupOptions>;
};

export type QueryVenueArgs = {
	id: Scalars['ID'];
};

export type QueryVenuesArgs = {
	options?: InputMaybe<VenueOptions>;
};

export type Role = {
	__typename?: 'Role';
	createdAt: Scalars['String'];
	id: Scalars['ID'];
	modifiedAt: Scalars['String'];
	name: Scalars['String'];
	rolePermissions?: Maybe<Array<Maybe<RolePermission>>>;
	roles?: Maybe<Array<Maybe<Role>>>;
	users?: Maybe<Array<Maybe<User>>>;
};

export type RolePermission = {
	__typename?: 'RolePermission';
	createdAt: Scalars['String'];
	id: Scalars['ID'];
	modifiedAt: Scalars['String'];
	permission?: Maybe<Permission>;
	permissionId: Scalars['String'];
	role?: Maybe<Role>;
	rolePermissions: Array<Maybe<RolePermission>>;
};

export type StringOperators = {
	contains?: InputMaybe<Scalars['String']>;
	equals?: InputMaybe<Scalars['String']>;
	in?: InputMaybe<Array<Scalars['String']>>;
	not?: InputMaybe<Scalars['String']>;
	notIn?: InputMaybe<Array<Scalars['String']>>;
	search?: InputMaybe<Scalars['String']>;
};

export type UpdateEventInput = {
	capacity?: InputMaybe<Scalars['Int']>;
	description?: InputMaybe<Scalars['String']>;
	endsAt?: InputMaybe<Scalars['String']>;
	groupId?: InputMaybe<Scalars['String']>;
	id: Scalars['ID'];
	image?: InputMaybe<Scalars['String']>;
	inviteOnly?: InputMaybe<Scalars['Boolean']>;
	name?: InputMaybe<Scalars['String']>;
	startsAt?: InputMaybe<Scalars['String']>;
	statusId?: InputMaybe<Scalars['String']>;
	venueId?: InputMaybe<Scalars['String']>;
};

export type UpdateGroupInput = {
	banner?: InputMaybe<Scalars['String']>;
	city?: InputMaybe<Scalars['String']>;
	country?: InputMaybe<Scalars['String']>;
	creatorId?: InputMaybe<Scalars['String']>;
	description?: InputMaybe<Scalars['String']>;
	id: Scalars['ID'];
	logo?: InputMaybe<Scalars['String']>;
	name?: InputMaybe<Scalars['String']>;
	postalCode?: InputMaybe<Scalars['String']>;
	region?: InputMaybe<Scalars['String']>;
};

export type User = {
	__typename?: 'User';
	accounts?: Maybe<Array<Maybe<UserAccount>>>;
	birthDate?: Maybe<Scalars['String']>;
	createdAt: Scalars['String'];
	email: Scalars['String'];
	events?: Maybe<Array<Maybe<Event>>>;
	groupRole?: Maybe<GroupRole>;
	groupRoleId: Scalars['String'];
	groups?: Maybe<Array<Maybe<Group>>>;
	id: Scalars['ID'];
	image?: Maybe<Scalars['String']>;
	modifiedAt: Scalars['String'];
	name: Scalars['String'];
	phoneNumber?: Maybe<Scalars['String']>;
	role: Role;
	roleId: Scalars['String'];
};

export type UserAccount = {
	__typename?: 'UserAccount';
	createdAt: Scalars['String'];
	id: Scalars['ID'];
	modifiedAt: Scalars['String'];
	provider: Scalars['String'];
};

export type Venue = {
	__typename?: 'Venue';
	city?: Maybe<Scalars['String']>;
	country?: Maybe<Scalars['String']>;
	groupId?: Maybe<Scalars['String']>;
	id: Scalars['ID'];
	latitude?: Maybe<Scalars['Float']>;
	longitude?: Maybe<Scalars['Float']>;
	name: Scalars['String'];
	postalCode?: Maybe<Scalars['String']>;
	region?: Maybe<Scalars['String']>;
	streetAddress?: Maybe<Scalars['String']>;
};

export type VenueFilter = {
	createdAt?: InputMaybe<DateOperators>;
	groupId?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<IdOperators>;
	name?: InputMaybe<StringOperators>;
	updatedAt?: InputMaybe<DateOperators>;
};

export type VenueOptions = {
	cursor?: InputMaybe<Scalars['Int']>;
	filter?: InputMaybe<VenueFilter>;
	orderBy?: InputMaybe<VenueOrderBy>;
	skip?: InputMaybe<Scalars['Int']>;
	take?: InputMaybe<Scalars['Int']>;
};

export type VenueOrderBy = {
	createdAt?: InputMaybe<OrderDirection>;
};

export type Rsvp = {
	__typename?: 'rsvp';
	createdAt: Scalars['String'];
	id: Scalars['ID'];
	modifiedAt: Scalars['String'];
	name: Scalars['String'];
};

export type GroupFragmentFragment = {
	__typename?: 'Group';
	id: string;
	name: string;
	slug: string;
	description: string;
	city?: string | null;
	postalCode?: string | null;
	region?: string | null;
	country?: string | null;
	logo: string;
	banner: string;
};

export type GroupFullFragmentFragment = {
	__typename?: 'GroupWithRelations';
	id: string;
	name: string;
	slug: string;
	description: string;
	city?: string | null;
	postalCode?: string | null;
	region?: string | null;
	country?: string | null;
	logo: string;
	banner: string;
	createdAt: string;
	modifiedAt: string;
	groupUsers?: Array<{
		__typename?: 'GroupUser';
		id: string;
		createdAt: string;
		modifiedAt: string;
		groupRole: { __typename?: 'GroupRole'; id: string; name: string };
		user: { __typename?: 'User'; id: string; name: string; email: string; image?: string | null };
	} | null> | null;
	events?: Array<{
		__typename?: 'Event';
		id: string;
		name: string;
		image: string;
		description: string;
		startsAt: string;
		venue?: {
			__typename?: 'Venue';
			streetAddress?: string | null;
			city?: string | null;
			postalCode?: string | null;
			region?: string | null;
			country?: string | null;
		} | null;
	} | null> | null;
};

export type EventQueryVariables = Exact<{
	id: Scalars['ID'];
}>;

export type EventQuery = {
	__typename?: 'Query';
	event?: {
		__typename?: 'Event';
		id: string;
		name: string;
		description: string;
		url?: string | null;
		streamUrl?: string | null;
		startsAt: string;
		endsAt: string;
		canceled?: boolean | null;
		image: string;
		group: { __typename?: 'Group'; id: string; name: string; logo: string; banner: string };
		eventUsers?: Array<{
			__typename?: 'EventUser';
			id: string;
			user: { __typename?: 'User'; name: string; image?: string | null };
			eventRole?: { __typename?: 'EventRole'; id: string; name: string } | null;
			rsvp?: { __typename?: 'rsvp'; id: string; name: string } | null;
		} | null> | null;
		venue?: {
			__typename?: 'Venue';
			id: string;
			name: string;
			streetAddress?: string | null;
			city?: string | null;
			region?: string | null;
			country?: string | null;
			latitude?: number | null;
			longitude?: number | null;
		} | null;
	} | null;
};

export type EventsQueryVariables = Exact<{ [key: string]: never }>;

export type EventsQuery = {
	__typename?: 'Query';
	events: Array<{ __typename?: 'Event'; id: string; name: string; description: string } | null>;
};

export type GroupQueryVariables = Exact<{
	id?: InputMaybe<Scalars['ID']>;
	slug?: InputMaybe<Scalars['String']>;
}>;

export type GroupQuery = {
	__typename?: 'Query';
	group?: {
		__typename?: 'GroupWithRelations';
		id: string;
		name: string;
		slug: string;
		description: string;
		city?: string | null;
		postalCode?: string | null;
		region?: string | null;
		country?: string | null;
		logo: string;
		banner: string;
		createdAt: string;
		modifiedAt: string;
		groupUsers?: Array<{
			__typename?: 'GroupUser';
			id: string;
			createdAt: string;
			modifiedAt: string;
			groupRole: { __typename?: 'GroupRole'; id: string; name: string };
			user: { __typename?: 'User'; id: string; name: string; email: string; image?: string | null };
		} | null> | null;
		events?: Array<{
			__typename?: 'Event';
			id: string;
			name: string;
			image: string;
			description: string;
			startsAt: string;
			venue?: {
				__typename?: 'Venue';
				streetAddress?: string | null;
				city?: string | null;
				postalCode?: string | null;
				region?: string | null;
				country?: string | null;
			} | null;
		} | null> | null;
	} | null;
};

export type GroupsQueryVariables = Exact<{ [key: string]: never }>;

export type GroupsQuery = {
	__typename?: 'Query';
	groups: Array<{ __typename?: 'Group'; id: string; name: string; slug: string; description: string } | null>;
};

export type HomeQueryVariables = Exact<{ [key: string]: never }>;

export type HomeQuery = {
	__typename?: 'Query';
	myGroups: Array<{
		__typename?: 'Group';
		id: string;
		name: string;
		slug: string;
		description: string;
		city?: string | null;
		postalCode?: string | null;
		region?: string | null;
		country?: string | null;
		logo: string;
		banner: string;
	} | null>;
	upcomingEvents: Array<{
		__typename?: 'Event';
		id: string;
		name: string;
		description: string;
		url?: string | null;
		streamUrl?: string | null;
		startsAt: string;
		endsAt: string;
		canceled?: boolean | null;
		image: string;
		group: { __typename?: 'Group'; id: string; name: string; slug: string; logo: string };
		venue?: {
			__typename?: 'Venue';
			id: string;
			name: string;
			streetAddress?: string | null;
			city?: string | null;
			region?: string | null;
			country?: string | null;
			latitude?: number | null;
			longitude?: number | null;
		} | null;
	} | null>;
};

export type MyGroupsQueryVariables = Exact<{ [key: string]: never }>;

export type MyGroupsQuery = {
	__typename?: 'Query';
	myGroups: Array<{ __typename?: 'Group'; id: string; name: string; logo: string; banner: string } | null>;
};

export type UpcomingEvensQueryVariables = Exact<{ [key: string]: never }>;

export type UpcomingEvensQuery = {
	__typename?: 'Query';
	upcomingEvents: Array<{
		__typename?: 'Event';
		id: string;
		name: string;
		description: string;
		url?: string | null;
		streamUrl?: string | null;
		startsAt: string;
		endsAt: string;
		canceled?: boolean | null;
		image: string;
		group: { __typename?: 'Group'; id: string; name: string; slug: string; logo: string };
		venue?: {
			__typename?: 'Venue';
			id: string;
			name: string;
			streetAddress?: string | null;
			city?: string | null;
			region?: string | null;
			country?: string | null;
			latitude?: number | null;
			longitude?: number | null;
		} | null;
	} | null>;
};

export type UserQueryVariables = Exact<{ [key: string]: never }>;

export type UserQuery = {
	__typename?: 'Query';
	user?: {
		__typename?: 'User';
		id: string;
		name: string;
		email: string;
		image?: string | null;
		birthDate?: string | null;
		phoneNumber?: string | null;
		role: { __typename?: 'Role'; id: string; name: string };
	} | null;
};

export const GroupFragmentFragmentDoc = gql`
	fragment GroupFragment on Group {
		id
		name
		slug
		description
		city
		postalCode
		region
		country
		logo
		banner
	}
`;
export const GroupFullFragmentFragmentDoc = gql`
	fragment GroupFullFragment on GroupWithRelations {
		id
		name
		slug
		description
		city
		postalCode
		region
		country
		logo
		banner
		groupUsers {
			id
			groupRole {
				id
				name
			}
			user {
				id
				name
				email
				image
			}
			createdAt
			modifiedAt
		}
		events {
			id
			name
			image
			description
			startsAt
			venue {
				streetAddress
				city
				postalCode
				region
				country
			}
		}
		createdAt
		modifiedAt
	}
`;
export const EventDocument = gql`
	query event($id: ID!) {
		event(id: $id) {
			id
			name
			description
			url
			streamUrl
			startsAt
			endsAt
			canceled
			image
			group {
				id
				name
				logo
				banner
			}
			eventUsers {
				id
				user {
					name
					image
				}
				eventRole {
					id
					name
				}
				rsvp {
					id
					name
				}
			}
			venue {
				id
				name
				streetAddress
				city
				region
				country
				latitude
				longitude
			}
		}
	}
`;

/**
 * __useEventQuery__
 *
 * To run a query within a React component, call `useEventQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useEventQuery(baseOptions: Apollo.QueryHookOptions<EventQuery, EventQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<EventQuery, EventQueryVariables>(EventDocument, options);
}
export function useEventLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<EventQuery, EventQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<EventQuery, EventQueryVariables>(EventDocument, options);
}
export type EventQueryHookResult = ReturnType<typeof useEventQuery>;
export type EventLazyQueryHookResult = ReturnType<typeof useEventLazyQuery>;
export type EventQueryResult = Apollo.QueryResult<EventQuery, EventQueryVariables>;
export const EventsDocument = gql`
	query events {
		events {
			id
			name
			description
		}
	}
`;

/**
 * __useEventsQuery__
 *
 * To run a query within a React component, call `useEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useEventsQuery(baseOptions?: Apollo.QueryHookOptions<EventsQuery, EventsQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
}
export function useEventsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<EventsQuery, EventsQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
}
export type EventsQueryHookResult = ReturnType<typeof useEventsQuery>;
export type EventsLazyQueryHookResult = ReturnType<typeof useEventsLazyQuery>;
export type EventsQueryResult = Apollo.QueryResult<EventsQuery, EventsQueryVariables>;
export const GroupDocument = gql`
	query group($id: ID, $slug: String) {
		group(id: $id, slug: $slug) {
			...GroupFullFragment
		}
	}
	${GroupFullFragmentFragmentDoc}
`;

/**
 * __useGroupQuery__
 *
 * To run a query within a React component, call `useGroupQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupQuery({
 *   variables: {
 *      id: // value for 'id'
 *      slug: // value for 'slug'
 *   },
 * });
 */
export function useGroupQuery(baseOptions?: Apollo.QueryHookOptions<GroupQuery, GroupQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GroupQuery, GroupQueryVariables>(GroupDocument, options);
}
export function useGroupLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GroupQuery, GroupQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GroupQuery, GroupQueryVariables>(GroupDocument, options);
}
export type GroupQueryHookResult = ReturnType<typeof useGroupQuery>;
export type GroupLazyQueryHookResult = ReturnType<typeof useGroupLazyQuery>;
export type GroupQueryResult = Apollo.QueryResult<GroupQuery, GroupQueryVariables>;
export const GroupsDocument = gql`
	query groups {
		groups {
			id
			name
			slug
			description
		}
	}
`;

/**
 * __useGroupsQuery__
 *
 * To run a query within a React component, call `useGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGroupsQuery({
 *   variables: {
 *   },
 * });
 */
export function useGroupsQuery(baseOptions?: Apollo.QueryHookOptions<GroupsQuery, GroupsQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<GroupsQuery, GroupsQueryVariables>(GroupsDocument, options);
}
export function useGroupsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<GroupsQuery, GroupsQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<GroupsQuery, GroupsQueryVariables>(GroupsDocument, options);
}
export type GroupsQueryHookResult = ReturnType<typeof useGroupsQuery>;
export type GroupsLazyQueryHookResult = ReturnType<typeof useGroupsLazyQuery>;
export type GroupsQueryResult = Apollo.QueryResult<GroupsQuery, GroupsQueryVariables>;
export const HomeDocument = gql`
	query home {
		myGroups(options: { take: 4 }) {
			...GroupFragment
		}
		upcomingEvents {
			id
			name
			description
			url
			streamUrl
			startsAt
			endsAt
			canceled
			image
			group {
				id
				name
				slug
				logo
			}
			venue {
				id
				name
				streetAddress
				city
				region
				country
				latitude
				longitude
			}
		}
	}
	${GroupFragmentFragmentDoc}
`;

/**
 * __useHomeQuery__
 *
 * To run a query within a React component, call `useHomeQuery` and pass it any options that fit your needs.
 * When your component renders, `useHomeQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHomeQuery({
 *   variables: {
 *   },
 * });
 */
export function useHomeQuery(baseOptions?: Apollo.QueryHookOptions<HomeQuery, HomeQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<HomeQuery, HomeQueryVariables>(HomeDocument, options);
}
export function useHomeLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HomeQuery, HomeQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<HomeQuery, HomeQueryVariables>(HomeDocument, options);
}
export type HomeQueryHookResult = ReturnType<typeof useHomeQuery>;
export type HomeLazyQueryHookResult = ReturnType<typeof useHomeLazyQuery>;
export type HomeQueryResult = Apollo.QueryResult<HomeQuery, HomeQueryVariables>;
export const MyGroupsDocument = gql`
	query myGroups {
		myGroups {
			id
			name
			logo
			banner
		}
	}
`;

/**
 * __useMyGroupsQuery__
 *
 * To run a query within a React component, call `useMyGroupsQuery` and pass it any options that fit your needs.
 * When your component renders, `useMyGroupsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useMyGroupsQuery({
 *   variables: {
 *   },
 * });
 */
export function useMyGroupsQuery(
	baseOptions?: Apollo.QueryHookOptions<MyGroupsQuery, MyGroupsQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<MyGroupsQuery, MyGroupsQueryVariables>(MyGroupsDocument, options);
}
export function useMyGroupsLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<MyGroupsQuery, MyGroupsQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<MyGroupsQuery, MyGroupsQueryVariables>(MyGroupsDocument, options);
}
export type MyGroupsQueryHookResult = ReturnType<typeof useMyGroupsQuery>;
export type MyGroupsLazyQueryHookResult = ReturnType<typeof useMyGroupsLazyQuery>;
export type MyGroupsQueryResult = Apollo.QueryResult<MyGroupsQuery, MyGroupsQueryVariables>;
export const UpcomingEvensDocument = gql`
	query upcomingEvens {
		upcomingEvents {
			id
			name
			description
			url
			streamUrl
			startsAt
			endsAt
			canceled
			image
			group {
				id
				name
				slug
				logo
			}
			venue {
				id
				name
				streetAddress
				city
				region
				country
				latitude
				longitude
			}
		}
	}
`;

/**
 * __useUpcomingEvensQuery__
 *
 * To run a query within a React component, call `useUpcomingEvensQuery` and pass it any options that fit your needs.
 * When your component renders, `useUpcomingEvensQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUpcomingEvensQuery({
 *   variables: {
 *   },
 * });
 */
export function useUpcomingEvensQuery(
	baseOptions?: Apollo.QueryHookOptions<UpcomingEvensQuery, UpcomingEvensQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<UpcomingEvensQuery, UpcomingEvensQueryVariables>(UpcomingEvensDocument, options);
}
export function useUpcomingEvensLazyQuery(
	baseOptions?: Apollo.LazyQueryHookOptions<UpcomingEvensQuery, UpcomingEvensQueryVariables>
) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<UpcomingEvensQuery, UpcomingEvensQueryVariables>(UpcomingEvensDocument, options);
}
export type UpcomingEvensQueryHookResult = ReturnType<typeof useUpcomingEvensQuery>;
export type UpcomingEvensLazyQueryHookResult = ReturnType<typeof useUpcomingEvensLazyQuery>;
export type UpcomingEvensQueryResult = Apollo.QueryResult<UpcomingEvensQuery, UpcomingEvensQueryVariables>;
export const UserDocument = gql`
	query user {
		user {
			id
			name
			email
			image
			birthDate
			phoneNumber
			role {
				id
				name
			}
		}
	}
`;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
	const options = { ...defaultOptions, ...baseOptions };
	return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
}
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
