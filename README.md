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

1. Reconciliation Algorithm (React Fiber)
   Introduced in React 16, the reconciliation algorithm (part of React Fiber) is responsible for efficiently updating the UI by determining what has changed in the virtual DOM and updating only the necessary parts in the actual DOM.

2. Virtual DOM
   A lightweight JavaScript representation of the actual DOM. Each React element is a virtual DOM object. It improves performance by minimizing direct interactions with the real DOM.

3. Actual DOM
   The real Document Object Model that we can see in the browser's developer tools. It's what gets displayed to the user.

4. Diff Algorithm
   Compares the updated virtual DOM with the previous one to detect changes. This difference is used to update only the parts of the actual DOM that have changed, improving efficiency.

5. createBrowserRouter
   A function from react-router-dom used to create a route configuration object for your application, enabling navigation using the browser's history API.

6. RouterProvider Component
   A higher-order component provided by react-router-dom that enables route context and routing in the application. Wraps the app to allow route handling.

7. react-router-dom
   A routing library for React that enables navigation between components without reloading the page. It provides multiple utilities like Route, Link, Outlet, etc.

8. Outlet Component
   A placeholder component used to render child routes dynamically inside parent routes.

9. Link Component
   Used for navigation in a React app. It is a wrapper over the anchor (<a>) tag, but unlike anchor tags, it prevents full page reloads, providing a single-page application experience.

10. super(props)
    Used in class components to call the constructor of the parent class (React.Component). This allows access to this.props inside the constructor.

# Hooks Learned

1. useState
   A React Hook that lets you add a state variable to a functional component. Returns an array with the current state and a function to update it.

2. useEffect
   A React Hook used to perform side effects like data fetching, subscriptions, or DOM manipulation. It takes a callback and an optional dependency array. Runs after the render phase.

3. useRouteError
   A React Router hook that provides detailed information about any error that occurred while loading a route. Returns an error object that can be used to display custom error messages.

4. useParams
   A React Router hook used to access dynamic URL parameters. Returns an object of key-value pairs from the current route.

# useEffect Cases

1. If no dependency array => useEffect is called on every render
2. If dependency array is empty = [] => useEffect is called on initial render(just once)
3. If dependency array is [btnName] state variable => useEffect is called everytime btnName is updated, it is dependent on the value of state variable

# 2 types of routing

1. Client side routing - where there is no network call the home page all the data of other pages
   Handled by: react-router-dom
   How it works:

   - React loads a single HTML file (index.html).
   - When the user navigates, React updates the URL in the browser and renders the corresponding component without making a network request for a new page.
   - No full page reload, faster transitions.
   - Ideal for: SPAs (Single Page Applications)

2. Server side routing - where a network call is made to fetch the page data.
   Used with: frameworks like Next.js
   How it works:
   - Each route is mapped to a specific server-rendered page or component.
   - When the user navigates, the browser makes a network request, and the server responds with an HTML page rendered using React.
   - Better for: SEO, faster initial load, dynamic content.

# Class Component

1. A class component is created by extending React.Component from the React library.
    class MyComponent extends React.Component {}

2. It uses a constructor() to initialize state and receive props, and super(props) is used to pass props to the base class.

3. Props can be accessed using this.props.propertyName.
    Example: {this.props.name}

4. State is updated using this.setState() which triggers a re-render.

# Component Lifecycle

---- Component Class Lifecycle (Mounting Phase):
The lifecycle of a React class component during mounting involves the following key methods:

1. constructor()
   Initializes state and binds methods. Called only once when the component is created.

2. static getDerivedStateFromProps()
   Rarely used. Allows the component to update state based on props before rendering.

3. render()
   (Part of the Render Phase)
   Returns JSX to build the virtual DOM. It’s a pure function and does not interact with the actual DOM.

4. componentDidMount()
   (Part of the Commit Phase)
   Invoked once after the component is added to the actual DOM. Ideal for API calls, subscriptions, and DOM manipulations.

---- React Lifecycle Phases:
React lifecycle is split into two main phases:

# Render Phase

- Methods like constructor, getDerivedStateFromProps, and render are called.
- React builds the virtual DOM and determines what needs to change.
- No actual DOM mutations or side-effects occur here.

# Commit Phase

- Changes calculated in the render phase are applied to the actual DOM.
- componentDidMount() is called here during mounting.
- Safe to perform DOM updates, API calls, etc.

------------------- Render Phase -------------------

1. Parent Constructor
2. Parent Render
   First Child Constructor
   First Child Render
   GrandChild Constructor
   GrandChild Render
   Second Child Constructor
   Second Child Render
   GrandChild Constructor
   GrandChild Render

💡 Note: DOM is not updated yet during the render phase. React is building the virtual DOM tree.

=====================DOM UPDATED - IN SINGLE BATCH=====================
DOM UPDATED – IN SINGLE BATCH – What It Means

When React mounts components (or re-renders them), it does not update the actual DOM immediately after every render. Instead, it:

1. Collects all virtual DOM changes made during the render phase.
2. Batches them together.
3. Then, in the commit phase, it applies all DOM updates in one go (in a single batch).

🧠 Why does React do this?

- To optimize performance.
- Updating the real DOM is expensive — doing it in a single batch is faster than updating the DOM after every component render.

✅ Example

1. If you're mounting a parent and two child components:
   - React renders: Parent ➝ Child ➝ Grandchild (just virtual DOM, no visible change yet)
   - Then DOM is updated all at once: ✅ all 3 appear on screen together

------------------- Commit Phase -------------------

4. GrandChild ComponentDidMount()
5. Second Child componentDidMount()
6. First Child componentDidMount()
7. Parent componentDidMount()

💡 Note: In the commit phase, React applies changes to the actual DOM and runs componentDidMount() in child-first order.

componentDidMount:
Runs once after the component is mounted (inserted into the DOM).

🧹componentWillUnmount - Cleanup on Component Unmount
In a Single Page Application (SPA), components don’t reload the full page — they mount and unmount instead. If we’re using side effects like setInterval or event listeners, it’s important to clean them up when the component unmounts to avoid memory leaks or unwanted behavior.

🔄 componentDidUpdate (or useEffect with dependencies)
This lifecycle method (or equivalent hook) runs after a component re-renders due to a change in state or props. It's useful for performing actions after the DOM updates based on a particular state variable.
