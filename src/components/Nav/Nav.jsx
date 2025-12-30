import React, { useRef } from "react";
import "./Nav.css";
import { Link } from "react-scroll";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

// Register GSAP plugin
gsap.registerPlugin(useGSAP);

function Nav() {
  const menu = useRef();
  const mobile = useRef();

  // GSAP Nav Animation
  useGSAP(() => {
    const t1 = gsap.timeline();

    t1.from("nav h1", {
      y: -100,
      duration: 1,
      opacity: 0,
    });

    t1.from("nav ul li", {
      y: -100,
      duration: 1,
      opacity: 0,
      stagger: 0.5, // line-by-line animation
    });
  });

  return (
    <nav>
      <h1>PORTFOLIO</h1>

      {/* Desktop Menu */}
      <ul className="desktopmenu">
        <li><Link spy smooth duration={700} to="home">Home</Link></li>
        <li><Link spy smooth duration={700} to="about">About</Link></li>
        <li><Link spy smooth duration={700} to="project">Projects</Link></li>
        <li><Link spy smooth duration={700} to="contact">Contact</Link></li>
      </ul>

      {/* Hamburger Menu */}
      <div
        className="hamburger"
        ref={menu}
        onClick={() => mobile.current.classList.toggle("activemobile")}
      >
        <div className="ham"></div>
        <div className="ham"></div>
        <div className="ham"></div>
      </div>

      {/* Mobile Menu */}
      <ul className="mobilemenu" ref={mobile}>
        <li><Link spy smooth duration={700} to="home">Home</Link></li>
        <li><Link spy smooth duration={700} to="about">About</Link></li>
        <li><Link spy smooth duration={700} to="project">Projects</Link></li>
        <li><Link spy smooth duration={700} to="contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Nav;

// import React, { useRef } from "react";
// import "./Nav.css";
// import { Link } from "react-scroll";
// import { useGSAP } from "@gsap/react";
// import gsap from "gsap";

// // Register GSAP plugin
// gsap.registerPlugin(useGSAP);

// function Nav() {
//   const menu = useRef();
//   const mobile = useRef();

//   // GSAP Nav Animation
//   useGSAP(() => {
//     const t1 = gsap.timeline();

//     t1.from("nav h1", {
//       y: -100,
//       duration: 1,
//       opacity: 0,
//     });

//     t1.from("nav ul li", {
//       y: -100,
//       duration: 1,
//       opacity: 0,
//       stagger: 0.3,
//     });
//   });

//   return (
//     <nav>
//       <h1>PORTFOLIO</h1>

//       <ul className="desktopmenu">
//         <li><Link spy smooth duration={700} to="home">Home</Link></li>
//         <li><Link spy smooth duration={700} to="about">About</Link></li>
//         <li><Link spy smooth duration={700} to="project">Projects</Link></li>
//         <li><Link spy smooth duration={700} to="contact">Contact</Link></li>
//       </ul>

//       <div
//         className="hamburger"
//         ref={menu}
//         onClick={() => mobile.current.classList.toggle("activemobile")}
//       >
//         <div className="ham"></div>
//         <div className="ham"></div>
//         <div className="ham"></div>
//       </div>

//       <ul className="mobilemenu" ref={mobile}>
//         <li><Link spy smooth duration={700} to="home">Home</Link></li>
//         <li><Link spy smooth duration={700} to="about">About</Link></li>
//         <li><Link spy smooth duration={700} to="project">Projects</Link></li>
//         <li><Link spy smooth duration={700} to="contact">Contact</Link></li>
//       </ul>
//     </nav>
//   );
// }

// export default Nav;
