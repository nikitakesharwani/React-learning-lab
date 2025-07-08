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

Reconciliation Algorithm(react fiber) introduced in react 16
Virtual DOM - representation of actual DOM, React objects/react element is virtual DOM
Actual DOM - the elements we see in developer tool
Diff Algorithm - finds the difference between 2 virtual DOM, updted and previous virtual DOM
createBrowserRouter - for creating route configuration
RouterProvider Component - that help in routing page
react-router-dom - library to creating routing
Outlet Component - to place a page route dynamically
Link Component - to create navigation, behind the scene it uses anchor tag, its a wrapper over anchor tag and react-router-dom make it not to reload the page like anchor tag

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
