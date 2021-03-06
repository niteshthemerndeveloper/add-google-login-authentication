# How To Add Google Login to Your React App!

This project is based on the guide provided by [Sivanesh](https://dev.to/sivaneshs/add-google-login-to-your-react-apps-in-10-mins-4del).

## NPM Packages Used:

1. [create-react-app](https://create-react-app.dev/) - It's an utility to create a react application from scratch.

> npx create-react-app coding-enthusiast

2. [react-google-login](https://github.com/anthonyjgrove/react-google-login) - It makes Google OAuth Login process easy to implement.

> npm install react-google-login

## Simple Steps to Add Google Login

In this project, we need to create an application in the `Google developer Console`.

1. Go to the [Credentials Page](https://console.cloud.google.com/projectselector2/apis/credentials?pli=1&supportedpurview=project). **Note**: If you're new then _[create a new project]_(https://console.cloud.google.com/projectcreate) by providing your

- Project Name
- Location `No organisation` is fine if you don't have any `Parent` organisation or folder.

2. Click **Create Credentials > OAuth Client Id** : You'll see an Application Type screen.

3. Select the **Web Application Type**.

4. Add Authorised URIs `can be http://localhost:3000` and Redirect URIs `can be same http://localhost:3000`

> Congratulations! you just created your first OAuth Client id.

## Lets Begin Coding-

### Install

> npm install react-google-login

### Environment Variable Setup

- Create a `.env.local` file in the root folder of your application.

- Add your **OAuth Client Id** using `key-value` pairs

#### Example

> `REACT_APP_CLIENT_ID = "YOUR_ID.apps.googleusercontent.com"`

### Login & Logout Components

1. Create a `Login` component similar to `/src/components/google-auth/Login.js`

2. Create a `Logout` component similar to `/src/components/google-auth/Logout.js`

**Add them in the required location of your app.**

> Congratulations! you now have successfully incorporated Google OAuth into your application.

**NOTE:** Token gets expired in 1 hour. But what if you want to access users data after an hour.

Lets Fix the Token Expires by generating a new token

### Generating a New Token Setup

## NPM helpful commands for React Developers

### `npm start` - Runs the react application on port 3000.

### `npm test` Launches the test runner in the interactive watch mode.

### `npm run build` - It makes the app production ready and creates static assests in `build` folder.

### `npm run eject`

**Note: Need to explore this command in future.**

## Learn More

Best

> Nitesh!
