import { Link, NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../../../actions/authenticationActions/autActionCreators";
import { RootState } from "../../../reducers/rootReducer";

import "./Header.css";

const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector(
    (state: RootState) => state.authentification.isUserAuthenticated
  );
  return (
    <header className="header">
      <div className="logo">
        <Link to="/welcome">RomaniaToVisit</Link>
      </div>
      <nav className="nav">
        {isAuthenticated && (
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
            <li>
              <NavLink to="/traditions">Traditions</NavLink>
            </li>
            <li onClick={() => dispatch(logout())}>
              <NavLink to="/login">Logout</NavLink>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
