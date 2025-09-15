import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import style from "./App.module.css";
const App = () => {
  return (
    <div className={style.container}>
      <nav >
        <Navbar/>
      </nav>
      <div className={style.main}>
        <Hero/>
      </div>
      
    </div>
  )
}

export default App
