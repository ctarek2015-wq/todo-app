import { Link } from "react-router";

export default function Navbar() {
  return (
    <nav>
      <Link to="/">Home</Link>
      <Link to="/new">Add Task</Link>
      <Link to="/list">Task List</Link>
    </nav>
  );
}
