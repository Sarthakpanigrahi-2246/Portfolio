import React from "react";
import "./Contact.css";
import contact from "../../assets/contact.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Contact() {

  useGSAP(() => {
    gsap.from(".leftcontact img", {
      x: -120,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".leftcontact img",
        scrub: 2,
        start: "top 70%",
        end: "top 20%",
      },
    });

    gsap.from(".rightcontact", {
      x: 120,
      opacity: 0,
      duration: 1,
      scrollTrigger: {
        trigger: ".rightcontact",
        scrub: 2,
        start: "top 70%",
        end: "top 20%",
      },
    });
  });

  return (
    <div className="contact">
      
      <div className="leftcontact">
        <img src={contact} alt="Get In Touch" />
      </div>

      <div className="rightcontact">
        <form
          action="https://formspree.io/f/mnnegzyo"
          method="POST"
          className="form"
        >
          <h1>Let's Work Together</h1>

          <input
            name="Username"
            type="text"
            placeholder="Name"
            className="otherdetail"
          />

          <input
            name="Email"
            type="email"
            placeholder="Email"
            className="otherdetail"
          />

          {/** TEXTAREA — matches your CSS id="messege" */}
          <textarea
            name="messege"
            placeholder="Message me"
            className="otherdetail"
            id="messege"
          />

          <button id="subbtn">SEND MESSAGE</button>
        </form>
      </div>

    </div>
  );
}

export default Contact;
