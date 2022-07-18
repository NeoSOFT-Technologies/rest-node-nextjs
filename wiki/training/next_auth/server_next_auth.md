
# Using Next-Auth To Protect API Routes
[NextAuth](https://next-auth.js.org/) is a complete open-source authentication solution for [NextJs](http://nextjs.org/) applications.

 > Note - check this [link](https://next-auth.js.org/getting-started/introduction) to know more about next-auth.
 
 In this guide we will learn how to protect API routes using next-auth in middleware.
 
 `Step 1` : create a middleware function which takes `req`, `res` and `next` as argument.
 ```
 const authenticateUser = (req: NextApiRequest, res: NextApiResponse, next) => {}
 ```

`Step 2` : import `getToken` from `next-auth/jwt`
```
import {getToken} from next-auth/jwt;
```
`Step 3` : Get the token using `getToken` in middleware function.
```
const authenticateUser = (req: NextApiRequest, res: NextApiResponse, next) => {
	const token = getToken(req, secret);
}
```
> Note :- Here secret is same secret string which was used in `[...nextauth].ts` as secret.

`Step 4` : Check if token is found or not
```javascript
...
...
if (token) {
	// user is authenticated
	next();
} else {
	// unauthenticated user
}
...
...
```
### Concept
`NextAuth` stores signed token and user session in browser cookies. Whenever a `backend request` is made, cookies also goes with the `req`.

Now to check if the user is authenticated or not, we will try to fetch the `jwt token` stored in `req cookies` with the help of `getToken` function provided by `next-auth/jwt`.

`getToken` will check the cookies and verify the `jwt token` with the `secret key` passed in the function call. If the token is present and is valid, then it will return the `token` otherwise it will return `null`.

Now if we get the `token`, then it means user is authenticated and we can call the `next middleware` otherwise we can say that user is not authenticated and return appropriate `error`.