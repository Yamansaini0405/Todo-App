import React,{useState} from "react";
import "./Droparea.css";


function Droparea({onDrop}) {
  const [showDrop, setShowDrop] = useState(false);

  return (
    <section
      onDragEnter={() => setShowDrop(true)}
      onDragLeave={() => setShowDrop(false)}
      onDrop={() => {
        onDrop();
        setShowDrop(false)
      }
      }
      onDragOver={e => e.preventDefault()}
      className={showDrop ? "drop_area": "hide_drop"}
    >
      Droparea
    </section>
  );
}

export default Droparea;
