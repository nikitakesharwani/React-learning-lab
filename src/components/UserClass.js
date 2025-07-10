import React from "react";
import UserContactClass from "./UserContactClass";

class UserClass extends React.Component {
  constructor() {
    super();

    this.state = {
      userInfo: {
        name: "",
        location: "",
        bio: "",
        avatar_url: "",
      },
    };
    //console.log("Child Constructor");
  }

  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/nikitakesharwani");
    const json = await data.json();

    console.log(json);
    this.setState({
      userInfo: json,
    });
    //console.log("Children Component Did Mount");
  }

  componentDidUpdate() {}

  
  render() {
    //console.log("Child Render");
    const { name, location, bio, avatar_url } = this.state.userInfo;

    return (
      <div className="user-card">
        <img src={avatar_url} />
        <h3>User Name : {name} </h3>
        <h3>Location : {location} </h3>
        <h3>Bio : {bio} </h3>
      </div>
    );
  }
}

export default UserClass;
