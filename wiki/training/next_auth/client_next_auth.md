
# Next-Auth
[NextAuth](https://next-auth.js.org/) is a complete open-source authentication solution for [NextJs](http://nextjs.org/) applications.
#### Advantages of NextAuth

 - Designed to work with any authentication service. It supports OAuth 1.0, 1.0A, 2.0 and OpenID Connect.
 - Built-in support for many popular sign-in services e.g Google, Github, etc.
 - Supports email / passwordless authentication.
 
 > Note - check this [link](https://next-auth.js.org/getting-started/introduction) to know more about next-auth.
 
 ### Implementation
 `Step 1` : Install the next-auth.
```
npm install next-auth
```

`Step 2` : Create a file called `[...nextauth].ts` in `pages/api/auth` to include NextAuth.js in your project.

`Step 3` : In `[...nextauth].ts` file, import `NextAuth` from `next-auth` and `CredentialsProvider` from `next-auth/providers/credentials`
```javascript
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
```

`Step 4` : Export the NextAuth function with following configurations.
 - **providers** - list of various authentication service providers. we will pass `CredentialsProvider`.
 - **pages** - to configure the custom login page with next-auth.
 - **secret** - to sign the `jwt token` stored in next-auth session.
 - **callbacks** - to configure the `jwt` and `session` callbacks.
```javascript 
export default NextAuth({
	providers: [
		CredentialsProvider({
			// authorize function
			async authorize(credentials, req) {
		        const res = await fetch('<backend login url>', {
			        method: 'POST',
		          body: JSON.stringify(credentials),
		          headers: {
		            'Content-Type': 'application/json',
		            'Accept-Language': 'en-US',
		          },
		        });

		        const user = await res.json();
      
		        // If no error and we have user data, return it
		        if (res.ok && user) {
		          return user;
		        }
		        // Return null if user data could not be retrieved
		        return null;
			 }),
		})
	],
	callsbacks: {},
	secrets: "your jwt secret",
	pages: {
		signIn: "/",  // to provide the custom login page
	}
});
```

`Step 5` : 

#### Using NextAuth API in `login page` to login the user.
`Step 1` : Go to your login page. In our case it's home route `/`.
`Step 2` : Import `signIn` function from `next-auth/react`.
```javascript
import {signIn} from "next-auth/react";
```
`step 3` : Call the `signIn` function with user credentials on click login button and check the `res` for further user routing.
```javascript
const handleSubmit = async () => {
	const res = await singIn("credentials", {
		...userCredentials,
		redirect: false,
	});
}
```

#### Use of `useSession` hook to check authenticated user
`useSession` is a react hook provided by `next-auth` to check the user session.

Follow the following steps to use `useSession` hook in your component :-

> Note :- To be able to use `useSession` first you'll need to expose the session context, [`<SessionProvider />`](https://next-auth.js.org/getting-started/client#sessionprovider), at the top level of your application. Refer the below code.

pages/_app.tsx
```
import { SessionProvider } from "next-auth/react";
export default function App({  
	Component,  
	pageProps: { session, ...pageProps },
}) {  
	return (    
		<SessionProvider session={session}>      
			<Component {...pageProps} />    
		</SessionProvider>  
)}
```

`Step 1` : Import `useSession` from `next-auth/react`.
```javascript
import {useSession} from "next-auth/react";
```

`Step 2` : Call the hook and get the session and authentication status;
```javascript
const {data: session, status} = useSession();
```

`Step 3` : Check the `status`  to verify if user is logged in or not.
```javascript
if (status == "unauthenticated") {
	// navigate to login page
} else {
	// user is authenticated.
}
```

Voila🥳🥳....you have implemented the next-auth in your project.
