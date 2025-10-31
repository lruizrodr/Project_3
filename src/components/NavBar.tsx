import { Link } from "react-router-dom";

function NavBar() {
  return (
    <nav>
      <h2>Task Manager</h2>
      <div>
        <Link to="/todos">Todos</Link> | <Link to="/contact">Contact</Link>
      </div>
    </nav>
  );
}

export default NavBar;
