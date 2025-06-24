import React from "react";
import ReactDOM from "react-dom/client";

//old way of writing using normal function syntax but requires a return keyword
const TitleComponent = function () {
  return <h1>Namaste React from Title Component🚀</h1>;
};

//arrow function mostly seen in practice
const HeadingComponent = () => (
  <div id="container">
    <TitleComponent />
    <h1>Namaste React from React Functional Component</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />); //This is how a component is rendered
