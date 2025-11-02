import { Link, useLocation } from "react-router-dom";
import "./NavBar.css";

function NavBar() {
  const { pathname } = useLocation();

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <h1 className="navbar-logo">Concrete Task Manager</h1>
        <div className="navbar-links">
          <Link
            to="/todos"
            className={pathname === "/todos" ? "nav-link active" : "nav-link"}
          >
            Todos
          </Link>
          <Link
            to="/contact"
            className={pathname === "/contact" ? "nav-link active" : "nav-link"}
          >
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
