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
