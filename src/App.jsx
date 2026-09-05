// React
import { useState, useEffect, use } from "react";
import { Route, Routes, useNavigate } from "react-router";
// Components
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import TaskItem from "./components/TaskItem.jsx";
import Navbar from "./components/Navbar.jsx";
// Styles
import "./App.css";

function App() {
  const navigate = useNavigate();
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    const newTask = { id: Date.now(), ...task };
    setTasks([...tasks, newTask]);
    navigate(`/list/${newTask.id}`);
  };

  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    navigate("/list");
  };

  return (
    <>
      <Navbar />
      <h1>Welcome to My App</h1>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/new" element={<TaskForm addTask={addTask} />} />
        <Route path="/list" element={<TaskList tasks={tasks} />} />
        <Route
          path="/list/:id"
          element={<TaskItem tasks={tasks} deleteTask={deleteTask} />}
        />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
