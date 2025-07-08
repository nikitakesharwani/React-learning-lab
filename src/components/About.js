import User from "../components/User";
import UserClass from "../components/UserClass";
const About = () => {
  return (
    <div>
      <h1>About Us</h1>
      <h4>This is Swiggy Food Ordering Website</h4>
      <User name="Nikita (functional Component)" location="Bangalore" />
      <UserClass name="Nikita (class Component)" location="Bangalore" />
    </div>
  );
};

export default About;
