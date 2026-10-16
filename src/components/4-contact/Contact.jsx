import React, { useState } from "react";
import Lottie from "lottie-react";
import groovyWalkAnimation from "../../assets/animation/successfully (1).json"
import envolp from "../../assets/animation/TTA Contact Us.json"

import "./contact.css";
import { useForm, ValidationError } from "@formspree/react";
export default function Contact() {
  const [state, handleSubmit] = useForm("myeggowa");
  //   if (state.succeeded) {
  //     return <p>Thanks for joining!</p>;
  // }

console.log(Lottie);
console.log(groovyWalkAnimation);

  return (
    <section className="contact">
      <div className="top">
        <h1>
          <span className="icon-envelope"></span>
          <span>Contact us</span>
        </h1>
        <p>
          Contact us for more information and Get notified when i publish
          something new
        </p>
      </div>

      <div className="two">
        <div className="left">
          <form onSubmit={handleSubmit} action="">
            <h2>
              <label htmlFor="email">Email Address:</label>
              <input
                autoComplete="off"
                required
                type="email"
                id="email"
                name="email"
              />
              <div style={{ fontSize: "15px", color: "red" }}>
                {" "}
                <ValidationError
                  prefix="Email"
                  field="email"
                  errors={state.errors}
                />
              </div>
            </h2>

            <h2>
              <label htmlFor="message">Your message:</label>
              <textarea required name="message" id="message"></textarea>
            </h2>
            <div style={{ fontSize: "15px", color: "red" }}>
              {" "}
              <ValidationError
                style={{ fontSize: "10px", color: "red" }}
                prefix="Message"
                field="message"
                errors={state.errors}
              />
            </div>

            <button type="submit" disabled={state.submitting}>
              {state.submitting ? "submitting.." : "submit"}
            </button>

            {state.succeeded && (
              <div style={{marginTop:"10px",display:"flex",gap:"2px",alignItems:"center"}}>
                <Lottie.default animationData={groovyWalkAnimation} style={{width:"30px",height:"30px"}} loop="false"/>
            <p style={{color:"green",fontSize:"15px"}}>Your message sent successfully.</p>
              </div>
          )}
          </form>
        </div>

        <div className="right">
                        <Lottie.default className="contact-animation" animationData={envolp} style={{height:"355px"}}/>
        </div>
      </div>
    </section>
  );
}
