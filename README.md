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
RouterProvider - that help in routing page
react-router-dom - library to creating routing

# Hooks Learned

useState - A state variable used for managing state of a component.
useEffect - a function that takes callback function and the dependency array, it executes when the component is rendered.
useRouteError - a function call to gives more information about the error related to that path in the form of object

# useEffect Cases

1. If no dependency array => useEffect is called on every render
2. If dependency array is empty = [] =>useEffect is called on initial render(just once)
3. If dependency array is [btnName] state variable => useEffect is called everytime btnName is updated, it is dependent on the value of state variable
