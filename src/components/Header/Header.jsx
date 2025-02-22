import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <h2>This is header</h2>
      <NavLink className="mr-5" to="/">
        Home
      </NavLink>
      <NavLink to="/login">Login</NavLink>
    </div>
  );
};

export default Header;
