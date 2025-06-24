import React from "react";
import ReactDOM from "react-dom/client";

//Core React Syntax
const heading = React.createElement(
  "h1",
  { id: "heading", class: "head" },
  "Hello World from javascript!"
);

//JSX syntax (React Element)
const jsxHeading = (
  <h1 id="heading" className="head">
    Namaste React from JSX!
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
