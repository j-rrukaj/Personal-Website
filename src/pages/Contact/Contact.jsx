import React from 'react';
import "./Contact.css"
import * as Ai from "react-icons/ai"

function Contact() {
  return (
    <div className="contact-page">
      <section className="contact-hero">
        <p className="contact-kicker">Let's Connect</p>
        <h1>Contact</h1>
        <p>
          DevOps Engineer | AWS, Azure, Kubernetes and Terraform
        </p>
      </section>

      <section className="contact-shell">
        <div className="contact-profile">
          <img src="/images/me-cartoon-v2.png" alt="John Rrukaj" />
        </div>

        <div className="contact-card">
          <div className="contact-item">
            <Ai.AiTwotoneMail className="icons" />
            <span>johnrrukaj@gmail.com</span>
          </div>
          <div className="contact-item">
            <Ai.AiFillMobile className="icons" />
            <span>07432481567</span>
          </div>
          <div className="contact-item">
            <Ai.AiFillLinkedin className="icons" />
            <a className="contact-links" rel="noopener noreferrer" href="https://www.linkedin.com/in/john-rrukaj/" target="_blank">linkedin.com/in/john-rrukaj</a>
          </div>
          <div className="contact-item">
            <Ai.AiFillGithub className="icons" />
            <a className="contact-links" rel="noopener noreferrer" href="https://github.com/j-rrukaj" target="_blank">github.com/j-rrukaj</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact



 
