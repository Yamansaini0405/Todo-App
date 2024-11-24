import React from "react";
import Todo from "../assets/direct-hit.png";
import "./TaskColumn.css";
import TaskCard from "./TaskCard";
import Droparea from "./Droparea";

function TaskColumn({ type, icon, tasks, status, handleDelete, setActiveCard, onDrop, handleComplete}) {
  return (
    <section className="task_column">
      <h2 className="task_column_heading">
        <img className="task_column_icon" src={icon} alt="" /> {type}
        
      </h2>
      <hr/>
      <Droparea onDrop={() => onDrop(status, 0)}/>
      {tasks.map(
        (task, idx) =>
          task.status === status && (
           <React.Fragment  key={idx} >
             <TaskCard title={task.task} tags={task.tags}  handleDelete ={handleDelete} index = {idx} status={status} setActiveCard={setActiveCard} handleComplete={handleComplete}/>
             <Droparea onDrop={() => onDrop(status, idx+1)} />
           </React.Fragment>
          )
      )}
    </section>
  );
}

export default TaskColumn;
