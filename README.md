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

11. React.lazy()
    Allows you to load components dynamically (only when needed), enabling code splitting.

12. Suspense
    Is used to wrap lazy-loaded components and show a fallback UI (like a loader) while the component is being loaded.

# Hooks Learned

1. useState
   A React Hook that lets you add a state variable to a functional component. Returns an array with the current state and a function to update it.

2. useEffect
   A React Hook used to perform side effects like data fetching, subscriptions, or DOM manipulation. It takes a callback and an optional dependency array. Runs after the render phase.

3. useRouteError
   A React Router hook that provides detailed information about any error that occurred while loading a route. Returns an error object that can be used to display custom error messages.

4. useParams
   A React Router hook used to access dynamic URL parameters. Returns an object of key-value pairs from the current route.

5. useSelector
   useSelector is a React-Redux hook that allows you to read data from the Redux store inside your React components.

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

# 🛠️ componentDidMount:

Runs once after the component is mounted (inserted into the DOM).

# 🧹componentWillUnmount - Cleanup on Component Unmount

In a Single Page Application (SPA), components don’t reload the full page — they mount and unmount instead. If we’re using side effects like setInterval or event listeners, it’s important to clean them up when the component unmounts to avoid memory leaks or unwanted behavior.

# 🔄 componentDidUpdate (or useEffect with dependencies)

This lifecycle method (or equivalent hook) runs after a component re-renders due to a change in state or props. It's useful for performing actions after the DOM updates based on a particular state variable.

# 📘 Single Responsibility Principle

The Single Responsibility Principle states that a class or module should have only one reason to change, meaning it should have only one responsibility or job. This improves maintainability, readability, and makes the code easier to test and refactor.

# 🔁 Custom Hooks

Custom Hooks in React allow you to extract and reuse stateful logic across components. They are JavaScript functions that start with use and can call other hooks internally. Custom Hooks promote cleaner, more modular, and DRY (Don't Repeat Yourself) code.

# 📦 Chunking (Code Splitting) in React

Chunking (also called code splitting or dynamic bundling) is a performance optimization technique in React where your app is split into smaller JavaScript bundles ("chunks") that are loaded only when needed.

React supports this using dynamic import() and tools like React.lazy and Suspense.

✅ Pros:

- Faster initial load time
- Reduces bundle size
- Loads only the code required for the current view

❌ Cons:

- Slight delay when loading chunks on demand
- Requires careful error handling for chunk load failures
- Adds complexity in routing and lazy loading setup

# ⚙️ On-Demand Loading vs. Chunking (Code Splitting)

On-demand loading is very similar to chunking (or code splitting)—they're closely related concepts and often used together in React apps.

✅ What's the Difference?
🔧 Chunking / Code Splitting:
This is the technique of breaking your code into smaller bundles (chunks).

🚀 On-Demand Loading:
This refers to the behavior of loading those chunks only when needed (i.e., on demand).

📌 In Short:
🧩 Chunking enables on-demand loading by splitting code into smaller parts that can be loaded only when required—like loading a specific page/component when the user navigates to it.

React features like React.lazy() and import() help implement both.

# 💤 React.lazy() and Suspense

React.lazy() - allows you to load components dynamically (only when needed), enabling code splitting.

Suspense - is used to wrap lazy-loaded components and show a fallback UI (like a loader) while the component is being loaded.

# 📦 Example: lazy(() => import("./components/Grocery"))

This line uses React.lazy() to dynamically load the Grocery component only when it's needed (e.g., during navigation).

const Grocery = lazy(() => import("./components/Grocery"));

- import() is a dynamic import that returns a promise.
- React.lazy() tells React to treat the imported module as a lazy-loaded component.
- Used with <Suspense fallback={<Loader />}><Suspense/> to handle loading states.

# 🧩 Tailwind CSS

Tailwind CSS is a utility-first CSS framework for rapidly building modern, responsive UIs. Instead of writing custom CSS, you compose styles directly in your HTML using pre-defined utility classes like flex, mt-4, text-center, and grid-cols-3. This approach helps maintain consistency, avoid naming issues, and speed up development.

# ⚙️ How Tailwind CSS Uses PostCSS

- Tailwind CSS is built on PostCSS, a powerful tool for transforming CSS with JavaScript plugins.
- Tailwind’s core is a PostCSS plugin that scans your files and generates only the required utility classes based on your configuration.

It uses PostCSS to:

- Expand Tailwind’s @tailwind directives (@tailwind base, @tailwind components, @tailwind utilities) into full CSS.
- Apply custom plugins or variants defined in tailwind.config.js.
- Optimize the final output via tools like autoprefixer and cssnano in production.
- You typically use it with a PostCSS config like:

// postcss.config.js
module.exports = {
plugins: {
tailwindcss: {},
autoprefixer: {},
},
};

# 📦 Higher-Order Components (HOCs)

A Higher-Order Component (HOC) is an advanced technique in React for reusing component logic. An HOC is a function that takes a component and returns a new component with enhanced behavior or additional props.

HOC returns a component and the component returns a jsx.

Syntax:

# const EnhancedComponent = withFeature(OriginalComponent);

Use Cases:

- Code reuse and logic abstraction
- Accessing lifecycle methods in functional components
- Wrapping components with extra props, authentication, styling, etc.

# Example:

function withLoading(Component) {
return function WithLoadingComponent({ isLoading, ...props }) {
if (isLoading) return <div>Loading...</div>;
return <Component {...props} />;
};
}

# ⚠️ HOCs do not modify the original component — they create a wrapper component around it.

# 🔼 Lifting State Up

In React, "Lifting State Up" refers to moving shared state to the closest common ancestor of components that need access to that state. This ensures a single source of truth and allows sibling components to stay in sync.

Example:
If two child components need to communicate (e.g., input and display), move the state to their parent and pass it down via props.

# 🎛 Controlled Components

A Controlled Component is a form element (like <input>, <textarea>, or <select>) whose value is controlled by React state. The data flows from the component's state to the form element, ensuring predictable behavior.

Key Point:

- Uses useState or a parent prop to control input value
- Requires onChange handler to update state
  <input value={name} onChange={(e) => setName(e.target.value)} />

# 🎚 Uncontrolled Components

An Uncontrolled Component manages its own state internally, using the DOM rather than React. You use a ref to access its current value.

Key Point:

- No need for useState
- Less code, but harder to manage for complex forms
  <input ref={inputRef} />

# ✅ What is useContext?

The useContext hook allows you to access data stored in a React Context without manually using a <Context.Consumer> component. It makes sharing values (like user authentication, themes, etc.) across deeply nested components easier without prop drilling.

# Syntax:

const value = useContext(MyContext);

# 🔁 What is a Context.Provider?

Context.Provider is a component that supplies data (value) to all its nested components. It wraps a part of your component tree and passes down data to components that need it.

# Example:

<UserContext.Provider value={{ name: "Nikita" }}>
<App />
</UserContext.Provider>

# 👀 What is Context.Consumer?

Before useContext, Context.Consumer was used to access context data through a render prop function. It's still supported but more verbose than useContext.

# Example:

<UserContext.Consumer>
{(value) => <p>{value.name}</p>}
</UserContext.Consumer>

# 🧾 When to use useContext

- For small to medium applications.
- When you have global settings (like theme, language, or authenticated user info).
- When you want a quick and simple state-sharing solution without extra libraries.

# 🧾 When to use Redux

- For large-scale applications.
- When you need centralized, predictable state management.
- If your app has many unrelated states that need fine-grained updates.
- When you want middleware support for logging, error handling, or API calls.

# Redux Toolkit - steps involved

- Install Libraries - @reduxjs/toolkit and react-redux
- Build our store
- Connect our store to our app
- Create a cartSlice
- Dispatch an action
- Read the data using selector

Term Role
reduce() --> Takes a collection and reduces it to a single value
Redux reducer --> Takes state and action, and returns new state
Called "reducer" because --> It follows the reduce pattern: action stream → single state

# 🔍 What is useSelector in Redux?

useSelector is a React-Redux hook that allows you to read data from the Redux store inside your React components.

# 🧠 How it works:

It takes a selector function — which receives the entire Redux store state — and returns the specific part of the state you need.

- const cartItems = useSelector((store) => store.cart.items);

# In this example:

- store is the entire Redux state.
- store.cart.items is the specific slice we want.

# ✅ Why use it?

- Keeps your components connected to the global state.
- Re-renders the component automatically when the selected state changes.
- Works only inside components wrapped with <Provider> from react-redux.

# 📌 Example use case:

const user = useSelector((state) => state.auth.user);

This will give you access to the current logged-in user stored in Redux.
