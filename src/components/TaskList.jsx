import { Link } from "react-router";

export default function TaskList({ tasks }) {
  return (
    <div>
      <h2>Task List</h2>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            <Link to={`/list/${task.id}`}>{task.task}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
