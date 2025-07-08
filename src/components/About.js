import React from "react";
import UserClass from "../components/UserClass";

class About extends React.Component {
  constructor(props) {
    super(props);

    console.log("Parent Constructor");
  }
  //componentDidMount is used to make an API call, similar to useEffect()
  componentDidMount() {
    //Make an API call here
    console.log("Parent Component Did Mount");
  }

  render() {
    console.log("Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        <h4>This is Swiggy Food Ordering Website</h4>
        <UserClass name="First" location="Bangalore" />
        <UserClass name="Second" location="Delhi" />
      </div>
    );
  }
}

export default About;

/**
-------------------Render Phase----------------------
-Parent Constructor
-Parent Render
    -First Child Constructor
    -First Child Render
    
    -Second Child Constructor
    -Second Child Render
--------------------Commit Phase---------------------
    -First Child ComponentDidMount
    -Second Child ComponentDidMount

-Parent ComponentDidMount
 */
