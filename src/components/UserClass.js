import React from "react";
class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
    };
  }
  render() {
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
        <h3>Location : {location} </h3>
        <h3>Contact : 9254897546 </h3>
      </div>
    );
  }
}

export default UserClass;
