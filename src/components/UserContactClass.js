import React from "react";

class UserContactClass extends React.Component {
  constructor(props) {
    super(props);
    console.log("GrandChild Constructor");
  }
  componentDidMount() {
    console.log("GrandChild ComponentDidMount");
  }

  render() {
    console.log("GrandChild Render");
    return (
      <div>
        <h3>Location : Gurgaon </h3>
        <h3>Contact : 9254897546 </h3>
      </div>
    );
  }
}

export default UserContactClass;
