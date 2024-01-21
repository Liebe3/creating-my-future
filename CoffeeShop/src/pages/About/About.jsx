import React, { useEffect } from 'react';
import style from "./about.module.css";

const About = () => {
  return (
    <div className={style.section}>
      <section>
        <div className={`${style.clockContainer} clock-container`}>
          <h1>OPENING SOON!</h1>
          <div id="clock" className={style.clock}>
          </div>
        </div>
      </section>

      {useEffect(() => {
        const scrollAnimation = (entries, className) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add(className);
            }
          });
        };

        const Myclock = new IntersectionObserver((entries) => {
          scrollAnimation(entries, style.clockShow);
        });

        const clock = document.querySelectorAll(`.${style.clockContainer}`);
        clock.forEach((element) => {
          Myclock.observe(element);
        });

        const countdown = setInterval(() => {
          const currentTime = new Date();
          let remainingHour = 24 - currentTime.getHours() - 1;
          let remainingMinutes = 60 - currentTime.getMinutes();
          let remainingSeconds = 60 - currentTime.getSeconds();
          document.getElementById("clock").innerHTML = `${remainingHour} hours : ${remainingMinutes} minutes : ${remainingSeconds} seconds`;
        }, 1000);

        return () => {
          clearInterval(countdown);
          Myclock.disconnect();
        };
      }, [])}
    </div>
  );
};

export default About;