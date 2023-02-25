export type Maybe<T> = T | null;
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
  users?: Maybe<Array<Maybe<EventUser>>>;
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
  events?: Maybe<Array<Maybe<Event>>>;
  id: Scalars['ID'];
  logo: Scalars['String'];
  modifiedAt: Scalars['String'];
  name: Scalars['String'];
  postalCode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
  slug: Scalars['String'];
  users?: Maybe<Array<Maybe<GroupUser>>>;
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

export type Query = {
  __typename?: 'Query';
  event?: Maybe<Event>;
  eventBannedUsers: Array<Maybe<EventBannedUser>>;
  eventPermissions: Array<Maybe<EventPermission>>;
  eventRolePermissions: Array<Maybe<EventRolePermission>>;
  eventStatuses: Array<Maybe<EventStatus>>;
  events: Array<Maybe<Event>>;
  group?: Maybe<Group>;
  groupBannedUsers: Array<Maybe<GroupBannedUser>>;
  groupPermissions: Array<Maybe<GroupPermission>>;
  groupRolePermissions: Array<Maybe<GroupRolePermission>>;
  groupRoles: Array<Maybe<GroupRole>>;
  groupUsers?: Maybe<Array<Maybe<GroupUser>>>;
  groups: Array<Maybe<Group>>;
  permissions: Array<Maybe<Permission>>;
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
