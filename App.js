import React from "react";
import ReactDOM from "react-dom/client";

//Two types of component:
//1. React Class Component
//2. React Functional Component

//JSX syntax (React Element) - Naming Convention, always starts with small letter
const heading = (
  <h1 id="heading" className="head">
    Namaste React from JSX!
  </h1>
);

//React Functional Component - Naming Convention, always starts with Capital letter
const HeadingComponent = () => (
  <h1>Namaste React from React Functional Component</h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

//root.render(heading) --> This is how a element is rendered
root.render(<HeadingComponent />); //This is how a component is rendered
