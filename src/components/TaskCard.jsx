import React from "react";

import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({title,tags, handleDelete, index, setActiveCard, handleComplete, status } ) => {
  return (
    <article className="task_card" draggable onDragStart={() => setActiveCard(index)} onDragEnd={() => setActiveCard(null)}>
      {/* {tasks.map((item) => {
        return (
          <>
            <p className="task_text">{title}</p>
            <div className="task_card_bottom_line">
              <div className="task_card_tags">
                {tags.map((tag, idx)=> <Tag key={idx} type={tag}/>)}
                
              </div>
              <div className="task_delete">
                <img src={deleteIcon} className="delete_icon" alt="" />
              </div>
            </div>
          </>
        );
      })} */}

      <p className='task_text'>{title}</p>

            <div className='task_card_bottom_line'>
                <div className='task_card_tags'>
                {tags.map((tag, index) => <Tag key={index} type={tag} selected={true}/>)}
                </div>
                <div className="options">
                <div>
                  <input type="checkbox" onClick={() => {
                    handleComplete(status,index)
                  }}/>
                </div>
                <div onClick={() => handleDelete(index)}
                    className='task_delete'
                    >
                    <img src={deleteIcon} className='delete_icon' alt='' />
                </div>
                </div>
            </div>
    </article>
  );
};

export default TaskCard;
