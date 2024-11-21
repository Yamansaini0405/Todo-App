import React, { useEffect, useState } from "react";
import "./App.css";
import TaskForm from "./components/TaskForm";
import TaskColumn from "./components/TaskColumn";
import TodoIcon from './assets/direct-hit.png'
import DoingIcon from './assets/glowing-star.png'
import DoneIcon from './assets/check-mark-button.png'

const oldTasks = localStorage.getItem("tasks");



const App = () => {

  const [tasks, setTasks] = useState(JSON.parse(oldTasks)||[ ]);
  console.log(tasks)

  useEffect(()=> {
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }, [tasks])

  const handleDelete = (taskIdx) => {
    const newTasks = tasks.filter((task, index) => index !== taskIdx)
    setTasks(newTasks)
  }

  return (
    <div className="app">
      <TaskForm setTasks={setTasks}/>
      <main className="app_main">
        <TaskColumn type ='To do' icon = {TodoIcon} tasks={tasks} status="to do" handleDelete={handleDelete}/>
       <TaskColumn type = 'Doing' icon = {DoingIcon} tasks={tasks} status= "doing" handleDelete={handleDelete}/>
       <TaskColumn type = 'Done' icon = {DoneIcon} tasks={tasks} status="done" handleDelete={handleDelete}/>
      </main>
    </div>
  );
};

export default App;