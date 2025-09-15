import React, { useState } from "react";
import style from "./Navbar.module.css";
import Shuffle from "../../animations/shuffle/Shuffle";
import Dropdown from "../Dropdowns/Dropdown";

const Navbar = () => {
    const [showDropdown,setDropdown] = useState(false);
    const [services,setServices] = useState(false);
    function handleServices(){
        setDropdown(!showDropdown);
        setServices(!services);
    }
    const [about,setAbout] = useState(false);
    function handleAbout (){
        setDropdown(!showDropdown);
        setAbout(!about);
    }
    const servicesData = [
        {title:"Design",description:"HandCraft the user Experience"},
        {title:"Technoogy",description:"Leverage the power of code"},
        {title:"Marketing" ,description:"Crative strategies for Band"}
    ]
    const aboutData = [
        {title:"About us",description:"We are super Efficient yest humble to serve you"},
        {title:"About us",description:"We are super Efficient yest humble to serve you"},
        {title:"About us",description:"We are super Efficient yest humble to serve you"},
    ]
  return (
    <>
    <div className={style.container}>
      <div className={style.logo}>
        <Shuffle
          text="FOSSIL"
          shuffleDirection="right"
          duration={0.35}
          animationMode="evenodd"
          shuffleTimes={1}
          ease="power3.out"
          stagger={0.03}
          threshold={0.1}
          triggerOnce={true}
          triggerOnHover={true}
          respectReducedMotion={true}
        />
      </div>
      <div className={style.menu}>
        <div className={style.item}>
            <h1>Work</h1>
        </div>
        <div className={style.item} onMouseEnter={handleServices} onMouseLeave={handleServices}>
            <h1>Services</h1>
        </div>
        <div className={style.item}>
            <h1>Clients</h1>
        </div>
        <div className={style.item} onMouseEnter={handleAbout} onMouseLeave={handleAbout}>
            <h1>About</h1>
        </div>
        <div className={style.item}>
            <h1>Knowledge</h1>
        </div>
        <div className={style.item}>
            {/* <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#EFEFEF"><path d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"/></svg> */}
            <svg xmlns="http://www.w3.org/2000/svg" height="35px" viewBox="0 -960 960 960" width="35px" fill="#000000"><path d="M480-120q-150 0-255-105T120-480q0-150 105-255t255-105q14 0 27.5 1t26.5 3q-41 29-65.5 75.5T444-660q0 90 63 153t153 63q55 0 101-24.5t75-65.5q2 13 3 26.5t1 27.5q0 150-105 255T480-120Zm0-80q88 0 158-48.5T740-375q-20 5-40 8t-40 3q-123 0-209.5-86.5T364-660q0-20 3-40t8-40q-78 32-126.5 102T200-480q0 116 82 198t198 82Zm-10-270Z"/></svg>
        </div>
        <div className={style.item}>
            <button>
                Contact
            </button>
        </div>
        
      </div>
      
    </div>
    {/* {services ? <Dropdown/> : null} */}
      <div className={`${style.dropdownWrapper} ${showDropdown ? style.show : style.hide}`}>
    {services ? <Dropdown data={servicesData}/> : about ? <Dropdown data = {aboutData }/> :null }
  </div>
    </>
    
  );
};

export default Navbar;
