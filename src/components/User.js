import { useEffect, useState } from "react";

const User = ({ name, location }) => {
  const [count] = useState(0);
  const [count2] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      console.log("Component interval Op");
    }, 1000);

    return () => {
      //this is similar to ComponentWillUnmount
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="user-card">
      <h1>Count - {count}</h1>
      <h1>Count - {count2}</h1>
      <h3>User Name : {name} </h3>
      <h3>Location : {location} </h3>
      <h3>Contact : 9254897546 </h3>
    </div>
  );
};

export default User;
