import React from "react";
import UserClass from "../components/UserClass";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
    //console.log("Parent Constructor");
  }
  //componentDidMount is used to make an API call, similar to useEffect()
  componentDidMount() {
    //Make an API call here
    //console.log("Parent Component Did Mount");

    this.timer = setInterval(() => {
      //console.log("Component interval Op");
    }, 1000);
  }
  componentDidUpdate() {
    //updates based on some value
    //console.log("Component Did Update");
  }

  componentWillUnmount() {
    clearInterval(this.timer);
    //console.log("Component did unmount");
  }

  render() {
    //console.log("Parent Render");
    return (
      <div>
        <h1>About Us</h1>
        <button
          onClick={() => {
            this.setState({
              count: this.state.count + 1,
            });
          }}
        >
          Click to increase{this.state.count}
        </button>
        <UserContext.Consumer>
          {({ loggedInUser }) => <h4 className="font-bold ">{loggedInUser}</h4>}
        </UserContext.Consumer>
        <h4>This is Swiggy Food Ordering Website</h4>
        <UserClass />
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
