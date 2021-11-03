import { Link, NavLink } from "react-router-dom";

import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/welcome">RomaniaToVisit</Link>
      </div>
      <nav className="nav">
        <ul>
          <li>
            <NavLink to="/welcome">Romania Trip</NavLink>
          </li>
          <li>
            <NavLink to="/visit-spots">Visit spots</NavLink>
          </li>
          <li>
            <NavLink to="/counties">Counties</NavLink>
          </li>
          <li>
            <NavLink to="/trip-tool">Trip Tool</NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
