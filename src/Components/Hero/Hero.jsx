import React from "react";
import style from "./Hero.module.css";
import Cubes from "../../animations/Cubes/Cubes";
import CircularText from "../../animations/Circular/CircularText";

const Hero = () => {
  return (
    <div className={style.container}>
      <div className={style.main}>
        <div className={style.left}>
          <div className={style.cubes}>
            <div style={{ height: "600px", position: "relative" }}>
              <Cubes
                gridSize={8}
                maxAngle={60}
                radius={4}
                borderStyle="2px dashed #5227FF"
                faceColor="#1a1a2e"
                rippleColor="#ff6b6b"
                rippleSpeed={1.5}
                autoAnimate={true}
                rippleOnClick={true}
              />
            </div>
          </div>
        </div>
        <div className={style.right}>
          <h1>Design Transform Accelerate</h1>
          <p className={style.upper}>
            Redefining user experiences through Behavioural Science & AI
          </p>
          <p>Your Trusted UI UX Design Agency.</p>
        </div>
      </div>
      <div className={style.logoList}></div>
      <div className={style.circular}>
        <CircularText
  text="FOSSIL*INFOTECH*"
  onHover="speedUp"
  spinDuration={20}
  className="custom-class"
/>
      </div>
    </div>
  );
};

export default Hero;
