// React
import { useState } from "react";
import { Route, Routes } from "react-router";
// Components
import TaskForm from "./components/TaskForm.jsx";
import TaskList from "./components/TaskList.jsx";
import TaskItem from "./components/TaskItem.jsx";
import Navbar from "./components/Navbar.jsx";
// Styles
import "./App.css";

function App() {
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const addTask = (task) => {
    const newTask = { id: Date.now(), ...task };
    setTasks([...tasks, newTask]);
    localStorage.setItem("tasks", JSON.stringify([...tasks, newTask]));
  };

  return (
    <>
      <Navbar />
      <h1>Welcome to My App</h1>
      <Routes>
        <Route path="/" element={<h1>Home Page</h1>} />
        <Route path="/new" element={<TaskForm addTask={addTask} />} />
        <Route path="/list" element={<TaskList tasks={tasks} />} />
        <Route path="/list/:id" element={<TaskItem />} />
        <Route path="*" element={<h1>Page Not Found</h1>} />
      </Routes>
    </>
  );
}

export default App;
