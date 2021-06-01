import { Link, useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";

import { signOut } from "../../reducers/auth/auth.actions";

import "./nav.styles.css";

const Nav = ({ user, setUser }) => {
  const dispatch = useDispatch();
  const history = useHistory();

  const handleSignOut = () => {
    dispatch(signOut(history));
    setUser(null);
  };

  return (
    <nav className="navigation">
      <ul className="navbar">
        <li className="nav-links">
          <Link to="/">Home</Link>
        </li>
        <li className="nav-links">
          <Link to="/threads">Discussions</Link>
        </li>
        {user ? (
          <li className="nav-links" onClick={handleSignOut}>
            <Link to="#">Logout</Link>
          </li>
        ) : (
          <li className="nav-links">
            <Link to="/auth">Login</Link>
          </li>
        )}
      </ul>
    </nav>
  );
};
export default Nav;
