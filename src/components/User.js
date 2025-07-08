const User = ({ name, location }) => {
  return (
    <div className="user-card">
      <h3>User Name : {name} </h3>
      <h3>Location : {location} </h3>
      <h3>Contact : 9254897546 </h3>
    </div>
  );
};

export default User;
