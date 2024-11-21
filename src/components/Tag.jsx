import React from 'react'
import "./Tag.css"

function Tag({type, selectTag, selected}) {
    const tagStyle = {
        Imp: {backgroundColor: "#fda821"},
        MostImp: {backgroundColor: "#15d4c8"},
        opt: {backgroundColor: "#ffd12c"},
        default: {backgroundColor: "#f9f9f9"}

    }

  return (
    <button style={selected ? tagStyle[type]:tagStyle.default} type='button' className="tag" onClick={()=>selectTag(type)}>{type}</button>
  )
}

export default Tag