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
  capacity?: Maybe<Scalars['Int']>;
  createdAt?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  endsAt?: Maybe<Scalars['String']>;
  groupId?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  image?: Maybe<Scalars['String']>;
  inviteOnly?: Maybe<Scalars['Boolean']>;
  modifiedAt?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  startsAt?: Maybe<Scalars['String']>;
  statusId?: Maybe<Scalars['String']>;
  venueId?: Maybe<Scalars['String']>;
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

export type Group = {
  __typename?: 'Group';
  banner?: Maybe<Scalars['String']>;
  city?: Maybe<Scalars['String']>;
  country?: Maybe<Scalars['String']>;
  createdAt: Scalars['String'];
  creatorId: Scalars['String'];
  description: Scalars['String'];
  id: Scalars['ID'];
  logo?: Maybe<Scalars['String']>;
  modifiedAt: Scalars['String'];
  name: Scalars['String'];
  postalCode?: Maybe<Scalars['String']>;
  region?: Maybe<Scalars['String']>;
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

export type Query = {
  __typename?: 'Query';
  event?: Maybe<Event>;
  events: Array<Maybe<Event>>;
  group?: Maybe<Group>;
  groups: Array<Maybe<Group>>;
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
  id: Scalars['ID'];
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
