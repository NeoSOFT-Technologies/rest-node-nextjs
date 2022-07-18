# AuthGuard

Authguard is a utility component implemented in `src/client/components`. It protects your `page` from being accessed by a `unauthenticated user`.

### How does Authguard works?
Authguard is a higher order component which wraps the top level component in `pages/_app.tsx`. 

Now, whenever user visits any `page` ( or say any route ) then it checks the route visited and login state of the user. If the visited route is not a public route and user is not logged in then it redirects the user to the `login page`. 

To achieve this, Authguard maintains a state `authorized` (with default value `false`). Now, if either the user visits a public route or the user is authenticated then turns the `authorized` state true otherwise `false`.

Now if the state `authorized` is true then it returns the `requested page component` otherwise it redirects to `login page`.

e.g.
```javascript
...
...
const  router = useRouter();
const [authorized, setAuthorized] = useState(false);
const { status } = useSession()

function  authCheck(url: string) {
	const  publicPaths = ["/", "/register"];
	const  path = url.split("?")[0];

	if (status == "unauthenticated" && !publicPaths.includes(path)) {
		setAuthorized(false);
		router.push({
			pathname:  "/",
			query: { returnUrl:  url },
		});
	} else {
		setAuthorized(true);
	}
}
...
...
```

### Implementation
To implement Authguard in your project, please follow the below steps :-
`step 1` :- First create a higher order component which takes children component and returns that.
```javascript
function  Authguard({ children }: { children: any }) {
	return children;
}

export  default  Authguard;
```

`step 2` :- Now get the`next-router`, `user-session` (or say user authentication state) and creates a `authorized` state.

 ```javascript
function  Authguard({ children }: { children: any }) {
	const  router = useRouter();
	const [authorized, setAuthorized] = useState(false);
	const { status } = useSession()
	
	return children;
}

export  default  Authguard;
```
> Note :- Don't forget to import useSession, useRoute and useState.

`step 3` :- Create a function (similar to the above one shown in working) which takes the visited URL as an argument and checks the user authorization based on visited URL and user state.

  ```javascript
...
...
	function  authCheck(url: string) {
		const  publicPaths = ["/", "/register"];
		const  path = url.split("?")[0];
 
		if (status == "unauthenticated" && !publicPaths.includes(path)) {
			setAuthorized(false);
			router.push({
				pathname:  "/",
				query: { returnUrl:  url },
			});
		} else {
			setAuthorized(true);
		}
	}
...
...
```

`step 4` :- Return the children component only if `authorized` state is `true`.
```javascript
...
...
function  Authguard({ children }: { children: any }) {
	...
	...
	return authorized && children;
}

export  default  Authguard;
```
`step 5` :- Now just add a `useEffect` to just add the router events in the DOM which will just hide the content while route change and run the `authCheck` function again on after completing route changes and run the `authCheck` once to check the user authorization when user will load the site initially.

```javascript
...
...
useEffect(() => {
	authCheck(router.asPath);
	const  hideContent = () =>  setAuthorized(false);
	router.events.on("routeChangeStart", hideContent);
	router.events.on("routeChangeComplete", authCheck);

	return () => {
		router.events.off("routeChangeStart", hideContent);
		router.events.off("routeChangeComplete", authCheck);
	};
}, []);
...
...
```

`step 6` :- Wrap your top level component in AuthGuard.

_app.tsx
```javascript
function  MyApp({ Component, pageProps }: AppPropsWithLayout) {
	return (
		<>
			...
			....
			<Authguard>
				<Component  {...pageProps}  />
			</Authguard>
			...
			...
		</>
	);
}
```
🥳..Now just sit back and take rest and then create your pages.

