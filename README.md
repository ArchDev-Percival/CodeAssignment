# Auth0 Cruise0 Proof of Concept

## Purpose:
A front-end single page application in React.js to demonstrate integration of the Auth0 SDK to meet IAM requirements. 

## Key Demonstrations:

### 1. Show how Auth0 can support the Cruise0 app modernization on ReactJS
 * Demonstrate the ease of use and core functionality of the [Auth0 React SDK for Single Page Apps](https://auth0.com/docs/libraries/auth0-react)
  * Configure the `Auth0Provider` so that `useAuth0()` can be used anywhere within its scope.
  * Use `useAuth0()` to access various authentication capabilities provided by the SDK such as:              
    * `loginWithRedirect`
    * `logout`
    * `user`
    * `isLoading`
    * `error`
  * Demonstrate protected routes such as `/profile`

### 2. Show how a new customer can sign up, and how an existing customer can sign in with email/password, and Google
 * Utilize [Auth0 Database Connections](https://auth0.com/docs/connections/database)
 * Utilize [Auth0 Social Identity Providers](https://auth0.com/docs/connections/identity-providers-social), specifically [Connect[ing] Apps to Google](https://auth0.com/docs/connections/social/google)

### 3. Ensure that customers who login with username/password and Google, with the same email address, will be treated as the same user. Also known as Account Linking.
 * Utilize [Auth0 Account Linking](https://auth0.com/docs/users/user-account-linking) specifically the [Account Link Extension](https://auth0.com/docs/extensions/account-link-extension)

### 4. The application should display an error if the customer’s email address is not verified.
 * Through the context provided within the `Auth0Provider` wrapper, use `useAuth0()` to access the authenticated user's profile. 
 * The boolean value of `user.email_verified` tells us if the present authenticated account is verified and displays relevant "core functionality" if so. If the user is not verified, an appropriate message is displayed. 

### 5. Use Auth0 features to customize the profile page so both the photo and country flag are displayed without prompting users to input directly.
 * Utilize pre-existing [rule](https://auth0.com/docs/rules), that is **Add Country To The User Profile** in the Auth0 management dashboard to enrich the user profile to include country information.
 * **Learning:** Custom claims need to have a globally unique name, which to Auth0 is a URL. [Source](https://auth0.com/docs/tokens/create-namespaced-custom-claims)
 * The country name is used to obtain a country code which is replaced in `https://lipis.github.io/flag-icon-css/flags/4x3/${code}.svg` to obtain the related country flag. 


### 6. If the photo and country of the customer are known, make sure this information is passed back to the application and shown after the user authenticates.
 * When a user is authenticated, the previously displayed LoginButton is replaced with a menu that displays:
    * the user's photo, if present, or the first letter of their name, if a photo is not available.
    * the country flag is displayed along the route to the profile.
 * This information is also present in the user profile page 
    






# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

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

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
