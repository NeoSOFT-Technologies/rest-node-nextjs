# React Components
>Components are independent and reusable bits of code.Conceptually, components are like JavaScript functions. They accept arbitrary inputs (called “props”) and return React elements describing what should appear on the screen.

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
📂 src
  └──📂 pages
      |   └── 📝 _app.tsx
      |   └── 📝 index.tsx
      |   └── 📝 register.tsx
      ├──📂 settings
      |   └── [userName].tsx
    
```

## Folder structure for Page Components(routes) in backend
```
.
📂 src
  └──📂 pages
      ├──📂 user
      |   └── [userName].ts
      |   └── index.ts
      ├──📂 auth
      |   └── [...nextauth].ts
      |   └── login.ts    
```

## Folder structure for Reuseable Components

```
.
📂 src
  └──📂 client
         ├──📂 components
             ├──📂 authguard
             |   └── 📝 AuthGuard.tsx
             ├──📂 header
             |   └── 📝 Header.tsx
             |   └── 📝 Header.test.tsx
             ├──📂 i18n
             |   └── 📝 LanguageChange.tsx
             |   └── 📝 LanguageChange.test.tsx
             ├──📂 loader
             |   └── 📝 Loader.tsx
             |   └── 📝 Loader.test.tsx
             ├──📂 password-field
             |   └── 📝 Password.tsx
             |      └── 📝 Password.test.tsx
             └──📂 toast-alert
             └──toast-alert.tsx
```

For adding a component go to frontend-reactjs/src/pages/ for Page Components and frontend-reactjs/src/components/ for Reuseable components and  add the component by creating the folder of the name of the component in small case and add over there.

### How Reuseable components is being used in our project?

>step 1: import the loader from "../../components/loader/Loader"; in Dashboard component
        
        import Loader from "../../components/loader/Loader";
        
>step 2: After importing it into the Dashboard it will return the HTML elements which are present in Loader.tsx components to the App.tsx simply by writing <Loader />. 

>step 3: Now the Dashboard page itself it behave as a individual routes,that means whatever we add in pages folder it will behaves as a individual routes.
