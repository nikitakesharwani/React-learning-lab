import React from "react";
import UserContactClass from "./UserContactClass";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
    console.log("Child Constructor");
  }

  componentDidMount() {
    console.log("Children Component Did Mount");
  }

  render() {
    console.log("Child Render");
    const { name, location } = this.props;
    const { count, count2 } = this.state;
    return (
      <div className="user-card">
        <h1>Count - {count}</h1>
        <button
          onClick={() => {
            //NEVER UPDATE STATE VARIABLES DIRECTLY
            this.setState({
              count: this.state.count + 1,
              count2: this.state.count2 + 1,
            });
          }}
        >
          Increase Count
        </button>
        <h1>Count - {count2}</h1>
        <h3>User Name : {name} </h3>
        <UserContactClass />
      </div>
    );
  }
}

export default UserClass;
