# React-learning-lab

React Project from Beginning to Pro

# Two type of export/import

-Default Export/Import
export default Component
import Component from "path";

-Named Export/Import ---> When you have to export multiple things use this
export const Component
import {Component} from "path"

We can export a component as named as well as default export

# React hooks

1. Normal JS utility functions written inside react library. These hooks are imported as named import.
2. Whenever in react, the state variable changes/updates from anywhere. React will re-renders the component.
3. Two important hooks-

- useState() - 80% usage Superpowerful react variables
- useEffect() - 20% usage

4. React is good at DOM manipulation using useState hook.

# Important Terminologies

Reconciliation Algorithm (React Fiber)
Introduced in React 16, the reconciliation algorithm (part of React Fiber) is responsible for efficiently updating the UI by determining what has changed in the virtual DOM and updating only the necessary parts in the actual DOM.

Virtual DOM
A lightweight JavaScript representation of the actual DOM. Each React element is a virtual DOM object. It improves performance by minimizing direct interactions with the real DOM.

Actual DOM
The real Document Object Model that we can see in the browser's developer tools. It's what gets displayed to the user.

Diff Algorithm
Compares the updated virtual DOM with the previous one to detect changes. This difference is used to update only the parts of the actual DOM that have changed, improving efficiency.

createBrowserRouter
A function from react-router-dom used to create a route configuration object for your application, enabling navigation using the browser's history API.

RouterProvider Component
A higher-order component provided by react-router-dom that enables route context and routing in the application. Wraps the app to allow route handling.

react-router-dom
A routing library for React that enables navigation between components without reloading the page. It provides multiple utilities like Route, Link, Outlet, etc.

Outlet Component
A placeholder component used to render child routes dynamically inside parent routes.

Link Component
Used for navigation in a React app. It is a wrapper over the anchor (<a>) tag, but unlike anchor tags, it prevents full page reloads, providing a single-page application experience.

super(props)
Used in class components to call the constructor of the parent class (React.Component). This allows access to this.props inside the constructor.

# Hooks Learned

useState - A state variable used for managing state of a component.
useEffect - a function that takes callback function and the dependency array, it executes when the component is rendered.
useRouteError - a function call to gives more information about the error related to that path in the form of object
useParams - gets the parameter from the url

# useEffect Cases

1. If no dependency array => useEffect is called on every render
2. If dependency array is empty = [] => useEffect is called on initial render(just once)
3. If dependency array is [btnName] state variable => useEffect is called everytime btnName is updated, it is dependent on the value of state variable

# 2 types of routing

1. Client side routing - where there is no network call the home page all the data of other pages
   Handled by: react-router-dom
   How it works:
   React loads a single HTML file (index.html).
   When the user navigates, React updates the URL in the browser and renders the corresponding component without making a network request for a new page.
   No full page reload, faster transitions.
   Ideal for: SPAs (Single Page Applications)

2. Server side routing - where a network call is made to fetch the page data.
   Used with: frameworks like Next.js
   How it works:
   Each route is mapped to a specific server-rendered page or component.
   When the user navigates, the browser makes a network request, and the server responds with an HTML page rendered using React.
   Better for: SEO, faster initial load, dynamic content.

# Class Component

1. a defined class extends React.Component class which comes from react library
2. it uses constructor to pass props and take super(props) inside it
3. to access the props we write {this.props.name}
