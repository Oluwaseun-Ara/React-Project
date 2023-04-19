import React from "react";
import "./contact.css";
import { MdOutlineEmail } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { BsWhatsapp } from "react-icons/bs";
const Contact = () => {
  return (
    <section id="contact">
      <h5>Get in Touch</h5>
      <h2>Contact Me</h2>
      <div className="container contact_container">
        <div className="contact_options">
          <article className="contact_option">
            <MdOutlineEmail className="contact_option-icon" />
            <h4>Email</h4>
            <h5>dummy.hfid.com</h5>
            <a
              href="mailto:dummfe.gmail.com"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <RiMessengerLine className="contact_option-icon" />
            <h4>Messenger</h4>
            <h5>oluwaseunara</h5>
            <a
              href="https://me/oluwaseun.ara"
              target="_blank"
            >
              Send a message
            </a>
          </article>
          <article className="contact_option">
            <BsWhatsapp className="contact_option-icon" />
            <h4>Whatsapp</h4>
            <h5>dummy.hfid.com</h5>
            <a
              href="https://api.whatsapp.com/send?phone+2348131502558"
              target="_blank"
            >
              Send a message
            </a>
          </article>
        </div>
        {/* end of contact */}
        <form action="">
          <input
            type="text"
            name="name"
            placeholder="fULL NAME"
            required
          />
          <input
            type="email"
            name="email"
            id=""
            placeholder="Your mail"
            required
          />
          <textarea
            name="message"
            rows="7"
            placeholder="your message"
            required
          ></textarea>
          <button
            type="submit"
            className="btn btn-primary"
          >
            send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
