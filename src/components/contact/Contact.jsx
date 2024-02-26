import React, { useRef } from "react";
import emailjs from 'emailjs-com';
import "./Contact.css";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_0ceveaj', 'template_e2xefpj', form.current,  '_oLW9QsZCnpjYCM_H')
      .then(
        () => {
          alert('Email sent successfully!');
        },
        (error) => {
          alert('Email sending failed. Error: ' + error.text);
        }
      );
  }

  return (
    <section className="contact section" id="contact">
      <h2 className="section__title">Get in touch</h2>
      <span className="section__subtitle">Contact Me</span>

      <div className="contact__container container grid">
        <div className="contact__content">
          <h3 className="content__title">Talk to me</h3>

          <div className="contact__info">
            <div className="contact__cart">
              <i className="bx bx-mail-send contact__card-icon"></i>
              <h3 className="contact__card-title">Email</h3>
              <span className="contact__card-data">
                laibabintatahir@gmail.com<br/>
              </span>
              <a
                href="mailto:laibabintatahir@gmail.com"
                className="contact__button"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>

            <div className="contact__cart">
              <i className="bx bxl-whatsapp contact__card-icon"></i>
              <h3 className="contact__card-title">Whatsapp</h3>
              <span className="contact__card-data">0336-5613777</span>
              <a
                href="https://api.whatsapp.com/send?phone=923365613777&text=Hello,%20I%20would%20like%20more%20information!"
                className="contact__button"
              >
                Write me
                <i className="bx bx-right-arrow-alt contact__button-icon"></i>
              </a>
            </div>
          </div>
        </div>
        {/* form */}
        <div className="contact__content">
          <h3 className="contact__title">Write me your project</h3>
          <form ref={form} onSubmit={sendEmail} className="contact__form">
            <div className="contact__form-div">
              <label className="contact__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__form-input"
                placeholder="Insert your name"
              />
            </div>

            <div className="contact__form-div">
              <label className="contact__form-tag">Mail</label>
              <input
                type="email"
                name="email"
                className="contact__form-input"
                placeholder="Insert your mail"
              />
            </div>
            <div className="contact__form-div contact__form-area">
              <label className="contact__form-tag">Project</label>
              <textarea
                name="project"
                cols="30"
                rows="10"
                className="contact__form-input"
                placeholder="Write your project"
              ></textarea>
            </div>
            <button className="button button--flex">
              Send Message
              <i className="uil uil-location-arrow"></i>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
