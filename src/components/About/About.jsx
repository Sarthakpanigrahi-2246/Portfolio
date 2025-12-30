import React from "react";
import "./About.css";
import mypic from "../../assets/mypic.jpg";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function About() {

  useGSAP(() => {
    gsap.from(".circle", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".circle",
        scroll:"body",
         scrub: 2,
        // markers: true,
        start: "top 60%",
        end: "top 20%",
      }
    });
    gsap.from(".line", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".circle",
        scroll:"body",
         scrub: 2,
        // markers: true,
        start: "top 60%",
        end: "top 20%",
      }
    });

      gsap.from(".aboutdetail h1", {
      x: -100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".circle",
        scroll:"body",
         scrub: 2,
        // markers: true,
        start: "top 60%",
        end: "top 20%",
      }
    });

      gsap.from(".aboutdetail li", {
      y: 100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".circle",
        scroll:"body",
         scrub: 2,
        // markers: true,
        start: "top 60%",
        end: "top 20%",
      }
    });

     gsap.from(".rightabout img", {
      x: 100,
      opacity: 0,
      duration: 1,
      stagger: 1,
      scrollTrigger: {
        trigger: ".circle",
        scroll:"body",
         scrub: 2,
        // markers: true,
        start: "top 60%",
        end: "top 20%",
      }
    });

  });

  return (
    <div className="about" id="about">
      <div className="leftabout">
        <div className="circle-line">
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
          <div className="line"></div>
          <div className="circle"></div>
        </div>

        <div className="aboutdetail">
          <div className="personalinfo">
            <div className="detail">
              <h1 className="headline" id="headline1">Personal Info</h1>

              <ul className="left">
                <li><span className="namehold">NAME :</span><span>SARTHAK PANIGRAHI</span></li>
                <li><span className="namehold">AGE :</span><span>20</span></li>
                <li><span className="namehold">GENDER :</span><span>MALE</span></li>
              </ul>

              <h1 className="headline" id="headline2">Education</h1>

              <ul className="right">
                <li><span className="namehold">UNIVERSITY :</span><span>JSPM UNIVERSITY</span></li>
                <li><span className="namehold">DEGREE :</span><span>BTECH</span></li>
                <li><span className="namehold">BRANCH :</span><span>COMPUTER SCIENCE ENGINEERING</span></li>
                <li><span className="namehold">CGPA :</span><span>7.5</span></li>
              </ul>

              <h1 className="headline" id="skill1">SKILL</h1>

              <ul className="skill" id="skill">
                <li><span className="namehold">FULL STACK</span></li>
                <li><span className="namehold">JAVA</span></li>
                <li><span className="namehold">AWS CERTIFIED</span></li>
                <li><span className="namehold">DEVOPS</span></li>
              </ul>
            </div>
          </div>
        </div>

      </div>

      <div className="rightabout">
        <img src={mypic} id="img" alt="" />
      </div>
    </div>
  );
}

export default About;
