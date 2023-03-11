export type Maybe<T> = T | undefined;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type AttendEvent = {
  __typename?: 'AttendEvent';
  success: Scalars['Boolean'];
};

export type CreateEventInput = {
  capacity?: InputMaybe<Scalars['Int']>;
  description: Scalars['String'];
  endsAt: Scalars['String'];
  groupId: Scalars['String'];
  image: Scalars['String'];
  inviteOnly?: InputMaybe<Scalars['Boolean']>;
  name: Scalars['String'];
  startsAt: Scalars['String'];
  statusId: Scalars['String'];
  venueId?: InputMaybe<Scalars['String']>;
};

export type CreateGroupInput = {
  banner: Scalars['String'];
  city?: InputMaybe<Scalars['String']>;
  country?: InputMaybe<Scalars['String']>;
  creatorId: Scalars['String'];
  description: Scalars['String'];
  logo: Scalars['String'];
  name: Scalars['String'];
  postalCode?: InputMaybe<Scalars['String']>;
  region?: InputMaybe<Scalars['String']>;
};

export type CreateVenueInput = {
  city: Scalars['String'];
  country: Scalars['String'];
  groupId: Scalars['String'];
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  postalCode: Scalars['String'];
  region: Scalars['String'];
  streetAddress: Scalars['String'];
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
  eventStats?: Maybe<Array<Maybe<EventStats>>>;
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
  groupId?: InputMaybe<IdOperators>;
  groupSlug?: InputMaybe<StringOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  startsAt?: InputMaybe<DateOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type EventOptions = {
  cursor?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<EventFilter>;
  orderBy?: InputMaybe<EventOrderBy>;
  personal?: InputMaybe<Scalars['Boolean']>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type EventOrderBy = {
  createdAt?: InputMaybe<OrderDirection>;
  startsAt?: InputMaybe<OrderDirection>;
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

export type EventRoleWithRelations = {
  __typename?: 'EventRoleWithRelations';
  createdAt: Scalars['String'];
  eventRolePermission: Array<Maybe<EventRolePermission>>;
  eventUsers: Array<Maybe<User>>;
  id: Scalars['ID'];
  modifiedAt: Scalars['String'];
  name: Scalars['String'];
};

export type EventStats = {
  __typename?: 'EventStats';
  attendees: Scalars['Int'];
  createdAt?: Maybe<Scalars['String']>;
  event: Event;
  eventId: Scalars['ID'];
  id: Scalars['ID'];
  modifiedAt?: Maybe<Scalars['String']>;
  salesValue?: Maybe<Scalars['Int']>;
  ticketsSold: Scalars['Int'];
  views: Scalars['Int'];
};

export type EventStatus = {
  __typename?: 'EventStatus';
  createdAt: Scalars['String'];
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

export type EventUserFilter = {
  createdAt?: InputMaybe<DateOperators>;
  eventId?: InputMaybe<IdOperators>;
  eventRoleId?: InputMaybe<IdOperators>;
  rsvpId?: InputMaybe<IdOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type EventUserOptions = {
  filter?: InputMaybe<EventUserFilter>;
  orderBy?: InputMaybe<EventUserOrderBy>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type EventUserOrderBy = {
  createdAt?: InputMaybe<OrderDirection>;
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
  createdAt?: InputMaybe<DateOperators>;
  id?: InputMaybe<IdOperators>;
  name?: InputMaybe<StringOperators>;
  updatedAt?: InputMaybe<DateOperators>;
};

export type GroupOptions = {
  cursor?: InputMaybe<Scalars['Int']>;
  filter?: InputMaybe<GroupFilter>;
  orderBy?: InputMaybe<GroupOrderBy>;
  personal?: InputMaybe<Scalars['Boolean']>;
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

export type GroupRoleWithRelations = {
  __typename?: 'GroupRoleWithRelations';
  createdAt: Scalars['String'];
  groupRolePermissions?: Maybe<Array<Maybe<GroupRolePermission>>>;
  groupUsers?: Maybe<Array<Maybe<GroupUser>>>;
  id: Scalars['ID'];
  modifiedAt: Scalars['String'];
  name: Scalars['String'];
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

export type GroupUserFilter = {
  groupId?: InputMaybe<IdOperators>;
  groupRoleName?: InputMaybe<Scalars['String']>;
  groupSlug?: InputMaybe<Scalars['String']>;
};

export type GroupUserOptions = {
  filter?: InputMaybe<GroupUserFilter>;
  orderBy?: InputMaybe<GroupUserOrderBy>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
};

export type GroupUserOrderBy = {
  createdAt?: InputMaybe<OrderDirection>;
};

export type IdOperators = {
  contains?: InputMaybe<Scalars['ID']>;
  equals?: InputMaybe<Scalars['ID']>;
  in?: InputMaybe<Array<Scalars['ID']>>;
  not?: InputMaybe<Scalars['ID']>;
  notIn?: InputMaybe<Array<Scalars['ID']>>;
  search?: InputMaybe<Scalars['ID']>;
};

export type Me = {
  __typename?: 'Me';
  accounts?: Maybe<Array<Maybe<UserAccount>>>;
  birthDate?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  email: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  modifiedAt: Scalars['String'];
  name: Scalars['String'];
  phoneNumber?: Maybe<Scalars['String']>;
  role: Role;
  roleId: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  attendEvent: AttendEvent;
  createEvent: Event;
  createGroup: Group;
  createVenue: Venue;
  joinGroup?: Maybe<GroupUser>;
  leaveGroup?: Maybe<GroupUser>;
  notAttendEvent: NotAttendEvent;
  subscribeToEvent?: Maybe<EventUser>;
  unsubscribeToEvent?: Maybe<EventUser>;
  updateEvent: Event;
  updateGroup: Group;
  updateVenue: Venue;
};


export type MutationAttendEventArgs = {
  id: Scalars['ID'];
};


export type MutationCreateEventArgs = {
  input: CreateEventInput;
};


export type MutationCreateGroupArgs = {
  input: CreateGroupInput;
};


export type MutationCreateVenueArgs = {
  input: CreateVenueInput;
};


export type MutationJoinGroupArgs = {
  groupId: Scalars['ID'];
};


export type MutationLeaveGroupArgs = {
  groupId: Scalars['ID'];
};


export type MutationNotAttendEventArgs = {
  id: Scalars['ID'];
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
  input: UpdateVenueInput;
};

export type NotAttendEvent = {
  __typename?: 'NotAttendEvent';
  success: Scalars['Boolean'];
};

export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Permission = {
  __typename?: 'Permission';
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  modifiedAt: Scalars['String'];
  name: Scalars['String'];
  rolePermissions?: Maybe<Array<Maybe<RolePermission>>>;
};

export type PublicGroupUser = {
  __typename?: 'PublicGroupUser';
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

export type Query = {
  __typename?: 'Query';
  event?: Maybe<Event>;
  eventBannedUsers: Array<Maybe<EventBannedUser>>;
  eventPermissions: Array<Maybe<EventPermission>>;
  eventRolePermissions: Array<Maybe<EventRolePermission>>;
  eventRoles: Array<Maybe<EventRoleWithRelations>>;
  eventStatuses: Array<Maybe<EventStatus>>;
  eventUsers: Array<Maybe<EventUser>>;
  events: Array<Maybe<Event>>;
  group?: Maybe<Group>;
  groupBannedUsers: Array<Maybe<GroupBannedUser>>;
  groupPermissions: Array<Maybe<GroupPermission>>;
  groupRolePermissions: Array<Maybe<GroupRolePermission>>;
  groupRoles: Array<Maybe<GroupRoleWithRelations>>;
  groupUsers: Array<Maybe<PublicGroupUser>>;
  groupUsersCount: Scalars['Int'];
  groups: Array<Maybe<Group>>;
  me?: Maybe<Me>;
  myEventRole?: Maybe<EventRole>;
  myGroupRole?: Maybe<GroupRole>;
  myRsvp?: Maybe<Rsvp>;
  permissions: Array<Maybe<Permission>>;
  user?: Maybe<User>;
  users?: Maybe<Array<Maybe<User>>>;
  venue?: Maybe<Venue>;
  venues: Array<Maybe<Venue>>;
};


export type QueryEventArgs = {
  id: Scalars['ID'];
};


export type QueryEventUsersArgs = {
  options?: InputMaybe<EventUserOptions>;
};


export type QueryEventsArgs = {
  options?: InputMaybe<EventOptions>;
};


export type QueryGroupArgs = {
  id?: InputMaybe<Scalars['ID']>;
  slug?: InputMaybe<Scalars['String']>;
};


export type QueryGroupUsersArgs = {
  options?: InputMaybe<GroupUserOptions>;
};


export type QueryGroupUsersCountArgs = {
  groupId?: InputMaybe<Scalars['ID']>;
  groupSlug?: InputMaybe<Scalars['String']>;
};


export type QueryGroupsArgs = {
  options?: InputMaybe<GroupOptions>;
};


export type QueryMyEventRoleArgs = {
  eventId: Scalars['ID'];
};


export type QueryMyGroupRoleArgs = {
  groupId?: InputMaybe<Scalars['ID']>;
  groupSlug?: InputMaybe<Scalars['String']>;
};


export type QueryMyRsvpArgs = {
  eventId: Scalars['ID'];
};


export type QueryUserArgs = {
  id: Scalars['ID'];
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

export type UpdateVenueInput = {
  city: Scalars['String'];
  country: Scalars['String'];
  groupId: Scalars['String'];
  id: Scalars['ID'];
  latitude?: InputMaybe<Scalars['Float']>;
  longitude?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  postalCode: Scalars['String'];
  region: Scalars['String'];
  streetAddress: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  accounts?: Maybe<Array<Maybe<UserAccount>>>;
  birthDate?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  modifiedAt: Scalars['String'];
  name: Scalars['String'];
  role: Role;
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
