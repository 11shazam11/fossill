import React from "react";
import style from "./Dropdown.module.css";
import Aurora from "../../animations/Background/Aurora";

const Dropdown = ({ data }) => {
  return (
    <div className={style.container}>
      {data.map((item) => (
        
        <div className={style.item}>
  
          <h1>{item.title}</h1>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Dropdown;
