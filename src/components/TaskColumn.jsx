import React from "react";
import Todo from "../assets/direct-hit.png";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";

function TaskColumn({ type, icon, tasks, status, handleDelete }) {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt="" /> {type}
      </h2>
      {tasks.map(
        (task, idx) =>
          task.status === status && (
            <TaskCard key={idx} title={task.task} tags={task.tags}  handleDelete ={handleDelete} index = {idx}/>
          )
      )}
    </section>
  );
}

export default TaskColumn;
