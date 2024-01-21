import React, { useEffect } from "react";
import style from "./about.module.css";

const About = () => {
  useEffect(() => {
    const clockObserver = new IntersectionObserver((entries) => {
      scrollAnimation(entries, style.clockShow);
    });

    const clockElements = document.querySelectorAll(`.${style.clockContainer}`);
    clockElements.forEach((element) => {
      clockObserver.observe(element);
    });

    const countdown = setInterval(updateCountdown, 1000);

    return () => {
      clearInterval(countdown);
      clockObserver.disconnect();
    };
  }, []);

  const updateCountdown = () => {
    const currentTime = new Date();
    const remainingHour = 24 - currentTime.getHours() - 1;
    const remainingMinutes = 60 - currentTime.getMinutes();
    const remainingSeconds = 60 - currentTime.getSeconds();

    const clockElement = document.getElementById("clock");

    // Use requestAnimationFrame for smoother updates
    requestAnimationFrame(() => {
      clockElement.innerHTML = `${remainingHour} hours : ${remainingMinutes} minutes : ${remainingSeconds} seconds`;
    });
  };
  return (
    <section className={style.section}>
      <div className={style["clock-container"]}>
        <h1>OPENING SOON!</h1>
        <div id="clock"></div>
      </div>
    </section>
  );
};

export default About;
