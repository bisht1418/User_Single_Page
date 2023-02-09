import { NavLink } from "react-router-dom";

export default function Navbar() {
  return (
    <div>
      <div className="link_container">
        <NavLink className="link" to="./">
          Home
        </NavLink>
        <NavLink className="link" to="./about">
          About
        </NavLink>
        <NavLink className="link" to="./contact">
          Contact
        </NavLink>
        <NavLink className="link" to="./login">
          Login
        </NavLink>
        <NavLink className="link" to="./user">
          User
        </NavLink>
      </div>
    </div>
  );
}
