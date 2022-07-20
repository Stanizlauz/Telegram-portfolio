import React from "react";
import emailjs from '@emailjs/browser';


export default function Contact() {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_6u1ppsf', 'template_kh9sg39', e.target, 'user_3Qmrr6MR0vYHh7GiRvOW9')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

  return (
    <>
      <section className="bg-light" id="contacts">
        <main className="contact-page-wrapper">
          <div className="container">
            <div className="row">
              <div className="col-md-6 col-lg-4 offset-lg-2 contact-page-content-wrapper wow fadeInLeft">
                <div className="contact-page-content">
                  <h4 className="contact-page-title">Lets Talk</h4>
                  {/* <p className="contact-page-street-address">
                  9010 Varna, Bulgaria, <br /> Breeze Borough, <br /> Saint
                  Nicholas, 26
                </p> */}
                  <p className="mb-3">Reach out via Telegram.</p>
                  <ul className="nav contact-social-links">
                    <li className="nav-item">
                      <a href="https://t.me/Experthelen" className="nav-link">
                        <img
                          src="assets/images/telegramicon.png"
                          alt="telegram"
                        />
                      </a>
                    </li>
                    {/* <li className="nav-item">
                    <a href="#!" className="nav-link">
                      <img src="assets/images/twitter%401x.svg" alt="twitter" />
                    </a>
                  </li> */}
                    {/* <li className="nav-item">
                    <a href="#!" className="nav-link">
                      <img
                        src="assets/images/linkedin%401x.svg"
                        alt="linkedin"
                      />
                    </a>
                  </li> */}
                    {/* <li className="nav-item">
                    <a href="#!" className="nav-link">
                      <img
                        src="assets/images/facebook%401x.svg"
                        alt="facebook"
                      />
                    </a>
                  </li> */}
                    {/* <li className="nav-item">
                    <a href="#!" className="nav-link">
                      <img src="assets/images/behance%401x.svg" alt="behance" />
                    </a>
                  </li> */}
                    {/* <li className="nav-item">
                    <a href="#!" className="nav-link">
                      <img src="assets/images/medium%401x.svg" alt="medium" />
                    </a>
                  </li> */}
                  </ul>
                </div>
              </div>
              <div className="col-md-6 col-lg-4 contact-page-form-wrapper wow fadeInRight">
                <form
                 onSubmit={sendEmail}
                >
                  <div className="form-group">
                    <label htmlFor="name" className="sr-only">
                      Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="name"
                      name="name"
                      placeholder="Name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email" className="sr-only">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="email"
                      name="user_email"
                      placeholder="Email"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message" className="sr-only">
                      Message
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="message"
                      name="message"
                      placeholder="Message"
                    />
                  </div>
                  <div>
                    <button className="btn" type="Submit">
                      Send
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </main>
      </section>
    </>
  );
}
