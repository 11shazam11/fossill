import React from 'react';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import style from "./App.module.css";
import ScrollReveal from './animations/Scroll/ScrollReveal';
const App = () => {
  return (
    <div className={style.container}>
      <nav >
        <Navbar/>
      </nav>
      <div className={style.main}>
        <Hero/>
         
      </div>
      <div className={style.bottom}>
        <div><h1>                                        </h1></div>
        <ScrollReveal
  baseOpacity={0}
  enableBlur={true}
  baseRotation={5}
  blurStrength={10}
>
  We are a global creative agency that combines design expertise with technology and intelligence.
</ScrollReveal>
      </div>
      
    </div>
  )
}

export default App
