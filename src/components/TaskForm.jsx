import { useState } from "react";

export default function TaskForm({ addTask }) {
  const [formData, setFormData] = useState({ task: "" });

  const handleChange = ({ target: { name, value } }) => {
    setFormData({ [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(formData);
    setFormData({ task: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="task">New Task:</label>
      <input
        type="text"
        id="task"
        name="task"
        value={formData.task}
        onChange={handleChange}
        placeholder="Enter a new task"
      />
      <button type="submit">Add Task</button>
    </form>
  );
}
