import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({setTasks}) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "to do",
     tags: ["Imp"]
  });

  const selectTag = (tag) => {
    
    if(taskData.tags.some(item => item === tag)){
        const filterTags = taskData.tags.filter(item => item !== tag)
        setTaskData(prev => {
            return {...prev, tags:filterTags}
        })
    } else {
        setTaskData(prev => {
            return {...prev, tags:[...prev.tags, tag]}
        })
    }
    
  }
  
  const checkTag = (tag) => {
    return taskData.tags.some(item => item === tag)
  }
  
  
  

  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
      
    })
    console.log(taskData)
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(taskData)
    setTasks(prev => {
        return [...prev, taskData]
    })
    setTaskData({
      task: "",
      status: "to do",
       tags: ["Imp"]
    })
  }
  

  return (
    <header className="app_header">
      <form onSubmit={handleSubmit} action="">
        <input
          required
          name="task"
          value={taskData.task }
          onChange={handleChange}
          className="task_input"
          type="text"
          placeholder="Enter your task"
        />
        <div className="task_form_bottom_line">
          <Tag type="Imp" selectTag = {selectTag} selected={checkTag("Imp")}/>
          <Tag type="MostImp" selectTag = {selectTag} selected={checkTag("MostImp")}/>
          <Tag type="opt" selectTag = {selectTag} selected={checkTag("opt")}/>

          <select
            value={taskData.status}
            name="status"
            onChange={handleChange}
            className="task_status"
          >
            <option value="to do">To do</option>
            <option value="doing">Doing</option>
            <option value="done">Done</option>
          </select>
          <button  className="task_submit" type="submit">
            +Add task
          </button>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;
