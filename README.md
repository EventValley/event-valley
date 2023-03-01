# Event Valley

Event valley is an open source event management app. Main goal of the app is to bring the best experience for the users.

## Features
- Create, edit, and delete groups
- Create, edit, and delete events
- Manage attendees and tickets
- View event details, including location and schedule
- Secure authentication and authorization
- and more...

## Technologies Used

### Backend
- Fastify
- Graphql
- JWT Authentication
- BullMQ for task management

### Frontend
- React
- NextJS
- Apollo Client
- Minimal UI


## Installation

#### Requirements:
- node >=19.x
- docker >= 20.x

Clone the repository and run the following commands:

```shell
npm i
npm run dev
```
This will install the necessary dependencies and start the app in development mode including docker containers.

#### Migration
```shell
npm run db:migrate
```
This will run the database migrations.

#### Seeding
```shell
npm run db:seed
```
This will seed the database with some initial data.

## Getting started
To get started with the app, follow these steps:

1. Install the app (see Installation section above).
2. Navigate to http://localhost:3000 in your browser.
3. Sign up for an account or log in if you already have one.
4. Create an event and start managing your event details!


## Contributing
We welcome contributions from the community. If you'd like to contribute, please follow these guidelines:

- Fork the repository and create a new branch for your changes.
- Make your changes and ensure all tests pass.
- Submit a pull request with a detailed description of your changes.
