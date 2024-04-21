import "./contact.css";

import Lottie from "lottie-react";
import contact from "../../../public/animation/contact.json";
const Contact = () => {
  return (
    <section className="contact-us" id="contact">
      <h1 className="title">
        <span className="icon-envelope"> </span>
        Contact us
      </h1>
      <p className="sub-title">
        Contact us for more information about our services .
      </p>

      <div className="flex">
        <form className="">
          <div className="flex">
            <label htmlFor="email">Email Address:</label>
            <input required type="email" name="" id="email" />
          </div>

          <div className="flex" style={{ marginTop: "24px" }}>
            <label htmlFor="message">Your message:</label>
            <textarea required name="" id="message"></textarea>
          </div>

          <button className="submit">Submit</button>
        </form>
        <div className=" animation ">
          <Lottie animationData={contact} loop className = "contact-animation "/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
