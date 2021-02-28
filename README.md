# Hasura React Admin

This is a prototype started repository for a [React Admin](https://marmelab.com/react-admin/) + [Hasura](https://hasura.io) combined admin panel. The idea is to provide an extremely easy setup for a near complete client facing Admin panel for a Hasura backend.

## The road to easy

- [x] Generating TypeScript-types based on the GraphQL-schema.
- [ ] Generate React Admin resources based on the GraphQL-schema.
- [ ] Dockerize project.
- [ ] Provide easy configuration + installation script.

## Environment variables

```bash
REACT_APP_HASURA_URI=
REACT_APP_HASURA_SECRET=

```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The `generate` script is run pre-start, to provide TypeScript typings for your development experience.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run generate`

This script runs the generate function to create required TypeScript types. Make sure you have the required environment variables pointing to your graphQL-endpoint before you run this script.

## This is based on a CRA-template

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
