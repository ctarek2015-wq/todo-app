import { useParams } from "react-router";

export default function TaskItem({ tasks, deleteTask }) {
  const { id } = useParams();
  const task = tasks.find((t) => t.id === Number(id));
  return (
    <div>
      <h2>Task Details</h2>
      {task ? (
        <div>
          <p>Task: {task.task}</p>
          <button onClick={() => deleteTask(task.id)}>Delete Task</button>
        </div>
      ) : (
        <p>Task not found</p>
      )}
    </div>
  );
}
