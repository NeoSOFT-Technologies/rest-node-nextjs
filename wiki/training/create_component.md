# React Components
>Components are independent and reusable bits of code.Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called βpropsβ) and return React elements describing what should appear on the screen.

### How To Create Component
### Class Component
A class component must include the extends React.Component statement. This statement creates an inheritance to React.Component, and gives your component access to React.Component's functions.

The component also requires a render() method, this method returns HTML.

*Example*
Create a Class component called Hello

```javascript
class Hello extends React.Component {
  render() {
    return <h1>Hello</h1>;
  }
}
```

###  Function Component
Here is the same example as above, but created using a Function component instead.

A Function component also returns HTML, and behaves much the same way as a Class component, but Function components can be written using much less code & are easier to understand.
Example
Create a Function component called Hello
```javascript
function Hello() {
  return <h2>Hello</h2>;
}
```

## Folder structure for Page Components(routes) in frontend

```
.
π src
  βββπ pages
      |   βββ π _app.tsx
      |   βββ π index.tsx
      |   βββ π register.tsx
      βββπ settings
      |   βββ [userName].tsx
    
```

## Folder structure for Page Components(routes) in backend
```
.
π src
  βββπ pages
      βββπ user
      |   βββ [userName].ts
      |   βββ index.ts
      βββπ auth
      |   βββ [...nextauth].ts
      |   βββ login.ts    
```

## Folder structure for Reuseable Components

```
.
π src
  βββπ client
         βββπ components
             βββπ authguard
             |   βββ π AuthGuard.tsx
             βββπ header
             |   βββ π Header.tsx
             |   βββ π Header.test.tsx
             βββπ i18n
             |   βββ π LanguageChange.tsx
             |   βββ π LanguageChange.test.tsx
             βββπ loader
             |   βββ π Loader.tsx
             |   βββ π Loader.test.tsx
             βββπ password-field
             |   βββ π Password.tsx
             |      βββ π Password.test.tsx
             βββπ toast-alert
             βββtoast-alert.tsx
```

For adding a component go to frontend-reactjs/src/pages/ for Page Components and frontend-reactjs/src/components/ for Reuseable components and  add the component by creating the folder of the name of the component in small case and add over there.

### How Reuseable components is being used in our project?

>step 1: import the loader from "../../components/loader/Loader"; in Dashboard component
        
        import Loader from "../../components/loader/Loader";
        
>step 2: After importing it into the Dashboard it will return the HTML elements which are present in Loader.tsx components to the App.tsx simply by writing <Loader />. 

>step 3: Now the Dashboard page itself it behave as a individual routes,that means whatever we add in pages folder it will behaves as a individual routes.
