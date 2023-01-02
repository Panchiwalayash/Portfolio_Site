import React from "react";
import { useRef } from "react";
import "./contact.css";
import Swal from 'sweetalert2'
import emailjs from "@emailjs/browser";

export const Contact = () => {
  const messageRef = useRef();
  const emailRef = useRef();
  const lastRef = useRef();
  const phoneRef = useRef();
  const firstRef = useRef();
 const form=useRef()

 // using emailjs templet for sending mail

  const clickHandler = async (e) => {
    e.preventDefault();
    emailjs
      .sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
      .then(
        (response) => {
          firstRef.current.value = "";
          lastRef.current.value = "";
          emailRef.current.value = "";
          messageRef.current.value = "";
          phoneRef.current.value = "";
          Swal.fire({
            title: "Good job",
            text: "Your detail has been send.",
            icon: "success",
            background: "black",
            color: "white",
          });
          console.log("SUCCESS!", response.status, response.text);
        },
        (err) => {
          Swal.fire({
            title: "Error!",
            text: "There occured some error. please try later.",
            icon: "error",
            background: "black",
            color: "white",
          });
          console.log("FAILED...", err);
        }
      );
    
  };
  return (
    <div className="contact" id="contact">
      <div className="contactTop">
        <div className="contact-head">Contact Me</div>
        <div className="contact-box1">
          <div className="email-box">
            <h2>Email</h2>
            <h4>Yash.dce20@sot.pdpu.ac.in</h4>
          </div>
          <div className="phone-box">
            <h2>Phone</h2>
            <h4>(+91) 8780841384</h4>
          </div>
        </div>
      </div>
      <div className="fillForm">or you can fill this form....</div>
      <div className="contactSection">
        <form ref={form}>
          <div className="contactSectionTop">
            <div className="firstName">
              <input
                type="text"
                placeholder="First Name"
                name="first_name"
                required
                ref={firstRef}
              />
            </div>
            <div className="lastname">
              <input
                type="text"
                placeholder="Last Name"
                name="last_name"
                required
                ref={lastRef}
              />
            </div>
          </div>
          <div className="contactSectionBottom">
            <div className="senderEmail">
              <input type="email" required placeholder="Email" name="user_email" ref={emailRef} />
            </div>
            <div className="senderPhone">
              <input type="text" placeholder="Phone" name="user_phone" ref={phoneRef} required />
            </div>
          </div>
          <div className="contactSectionMid">
            <textarea
              cols="10"
              name="message"
              placeholder="Enter your message"
              ref={messageRef}
            ></textarea>
          </div>
          <div className="contactSectionBtn">
            <button type="submit" className="submitBtn" onClick={clickHandler}>
              Submit Form
            </button>
          </div>
        </form>
      </div>
      <div className="contactBottom">
        <a href="https://twitter.com/YashPanchiwala">
          <img src="/images/twitter.png" alt="" />
        </a>
        <a href="https://www.linkedin.com/in/yash-panchiwala">
          <img src="/images/linkedin.png" alt="" />
        </a>
        <a href="https://github.com/Panchiwalayash">
          <img src="/images/github.png" alt="" />
        </a>
      </div>
    </div>
  );
};
