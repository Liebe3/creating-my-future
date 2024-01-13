import React from 'react'
import './About.module.css';

const About = () => {
  useEffect(() =>{
  
  const scrollAnimation = (entries, className)  =>{
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add(className);
      }

    });
  };

  const Myclock = new IntersectionObserver((entries) => {
    scrollAnimation(entries, "clock-show");
  });

  const clock = document.querySelectorAll(".clock-container");
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
}, []); 

return (
  <div>
    <section>
      <div className="clock-container">
        <h1>OPENING SOON! </h1>
        <div id="clock"></div>
      </div>
    </section>
  </div>
);
}

export default About;