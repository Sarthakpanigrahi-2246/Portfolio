import React from "react";
import "./Home.css";
import githubLogo from "../../assets/github.svg";
import linkedinLogo from "../../assets/linkedin.svg";
import leetcodeLogo from "../../assets/leetcode.svg";
import ResumePDF from "../resume/Sarthak_Resume.pdf";
//  npm install react-type-animation
import { TypeAnimation } from "react-type-animation";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Home() {
  useGSAP(() => {
    let tl1 = gsap.timeline();
    tl1.from(".line1", {
      y: 100,
      duration: 1,
      opacity: 0,
    });
    tl1.from(".line2", {
      y: 100,
      duration: 1,
      opacity: 0,
    });
    tl1.from(".line3", {
      y: 100,
      duration: 1,
      opacity: 0,
    });
    tl1.from("#hirebtn", {
      y: 100,
      duration: 1,
      opacity: 0,
    });
    gsap.from("righthome", {
      x: 100,
      duration: 1,
      opacity: 0,
    });
  });
  return (
    <div className="home">
      <div className="lefthome">
        <div className="homedetail">
          <div className="mystudy">3rd Year Student</div>
          <div className="line1">HEYYY I'M</div>
          <div className="line2">SARTHAK PANIGRAHI</div>

          <div className="line3">
            <TypeAnimation
              sequence={["fullStack Developer", 2000, "React Developer", 2000]}
              wrapper="span"
              speed={50}
              style={{ fontSize: "2.0rem", display: "inline-block" }}
              repeat={Infinity}
            />
          </div>

          <div className="myprofile">
            <a
              href="https://www.linkedin.com/in/sarthak-panigrahi-b8642a2a9"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon-wrapper">
                <img src={linkedinLogo} alt="LinkedIn" />
              </div>
            </a>

            <a
              href="https://github.com/sarthakpanigrahi"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon-wrapper">
                <img src={githubLogo} alt="GitHub" />
              </div>
            </a>

            <a
              href="https://leetcode.com/u/sarthakpanigrahi/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="icon-wrapper">
                <img src={leetcodeLogo} alt="LeetCode" />
              </div>
            </a>
          </div>
          {/* <button onClick={()=>window.open("/Sarthakresume.pdf", "_blank")} id="resumebtn"><>Resume</></button> */}
          <a
            href={ResumePDF}
            target="_blank"
            rel="noreferrer"
            className="resumebtn"
            id="resumebtn"
          >
            Get Resume
          </a>
        </div>
      </div>

      <div className="righthome">
        <div className="code-window">
          <div className="window-buttons">
            <span className="red"></span>
            <span className="yellow"></span>
            <span className="green"></span>
          </div>

         <pre className="code">
  <span className="keyword">const</span> coder = {"{"}
  {"\n"}  name: <span className="string">'Sarthak Panigrahi'</span>,
  {"\n"}  skills: [
  {"\n"}    <span className="string">'React'</span>,{" "}
            <span className="string">'Redux'</span>,{" "}
            <span className="string">'TypeScript'</span>,{" "}
            <span className="string">'TailwindCSS'</span>,{" "}
            <span className="string">'NodeJS'</span>,{" "}
            <span className="string">'Java'</span>,{" "}
            <span className="string">'MongoDB'</span>,{" "}
            <span className="string">'PostgreSQL'</span>,{" "}
            <span className="string">'Docker'</span>
  {"\n"}  ],
  {"\n"}  hardWorker: <span className="boolean">true</span>,
  {"\n"}  quickLearner: <span className="boolean">true</span>,
  {"\n"}  problemSolver: <span className="boolean">true</span>,
  {"\n"}  <span className="method">hireable</span>:{" "}
  <span className="keyword">function</span>() {"{"}
  {"\n"}    <span className="keyword">return</span> (
  {"\n"}      <span className="this">this</span>.hardWorker{" "}
              <span className="operator">&&</span>
  {"\n"}      <span className="this">this</span>.problemSolver{" "}
              <span className="operator">&&</span>
  {"\n"}      <span className="this">this</span>.skills.length{" "}
              <span className="operator">&gt;=</span>{" "}
              <span className="number">5</span>
  {"\n"}    );
  {"\n"}  {"}"}
  {"\n"}{"}"};
</pre>

        </div>
      </div>
    </div>
  );
}

export default Home;

// for typing effect
{
  /*
                <ReactTypingEffect
                 text={[
                        "React typing effect is cool 😎",
                        "It supports multiple sentences!",
                        "You can customize speed and delay.", 
                      ]}
                 speed={80}
                 eraseDelay={500}
                 className="typing"
                 cursorClassName="typing-cursor"
               /> */
}
