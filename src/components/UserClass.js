import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    const { name, location } = this.props;
    return (
      <div className="user-card">
        <h3>User Name : {name} </h3>
        <h3>Location : {location} </h3>
        <h3>Contact : 9254897546 </h3>
      </div>
    );
  }
}

export default UserClass;
