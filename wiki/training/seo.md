
# SEO by next/head

`next/head` is a component to dynamically manage the document’s head section. Some common use cases include setting the title, description, and meta tags for the document.

When combined with server-side rendering, it allows you to set meta tags that will be read by search engines and social media crawlers. This makes server-side rendering and React Helmet a powerful combination for creating apps that can benefit from SEO (search engine optimization) and social media data like oEmbed, Facebook Open Graph, or Twitter Cards.

### How to add next/head in Project

Follow the following steps to improve SEO by using next/head :- 

`Step 1` :  import `Head` XML tag in your component.
```
import Head from 'next/head';
```

`Step 3` : Enclose all your meta tags and title you want for the specific page.

At the end your component should look something like this:-
```javascript
import Head from 'next/head';

function App() {
  return (
    <div className="App">
      <Head>
        <title>Register page</title>
        <meta  name="description"
              content="Register page of Next.ts Template application" />
      </Head>
    </div>
  );
}

export default App;
```
Congrats You have successfully implemented next/head to your application


