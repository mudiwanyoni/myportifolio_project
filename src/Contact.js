import React from 'react';
import './Contact.css';
import contactImg from "./img/download.png";

function Contact() {
    return (
        <div className="contact component__space" id="Contact">
            <div className="row">
                <div className="col__2">
                    <div className="contact__box">
                        <div className="contact__meta">
                            <h1 className="hire__text">Hire Me.</h1>
                            <p className="hire__text white">I am available for full time office position or remote work. Connect with me via phone call:</p>
                            <p className="hire__text white">
                                <strong>
                                    <a href="tel: +263 717 259 326"> <strong>Click to call me !</strong></a>
                                </strong><br/>
                                      or email
                                      <br/>
                                <strong>
                                <a href="mailto: irvenehawks@gmail.com"> <strong>Click to email me !</strong></a>
                                </strong>
                            </p>
                            <p className="hire__text white">Send me a message below, will reply you soon :</p>
                        </div>
                        <form action="https://formspree.io/f/mzbodwwz" Target="_blank" method="POST" className="input__box">
                           <input type="text" className="contact name" name="name" placeholder="Your name *" required />
                           <input type="email" className="contact email" name="_replyto" placeholder="Your Email *" required />
                           <input type="text" className="contact subject" name="subject" placeholder="Type a Subject here *" required />
                           <textarea name="message" id="message" placeholder="Type Your message..." required></textarea>
                           <button className="btn contact pointer" type="submit">Submit</button>
                        </form>
                    </div>
                </div>
                <div className="col__2">
                    <img src={contactImg} alt="" className="contact__img" />
                </div>
            </div>

            <div className='profile-container'>
                <div className='colz'>
                    <p className="icons-para">Let's connect on social media and professional platforms</p>
                    <div className='colz-icon'>
                        <a href='https://www.facebook.com/profile.php?id=100075046086113' Target="_blank">
                            <i className='fa fa-facebook-square'></i>
                        </a>

                        <a href='https://www.linkedin.com/in/irvene-kwambana-a429021a0/' Target="_blank">
                            <i className='fa fa-linkedin-square'></i>
                        </a>

                        <a href='https://github.com/irvinehawks' Target="_blank">
                            <i className='fa fa-github'></i>
                        </a>

                        <a href='https://www.youtube.com/channel/UCNWoeqGK8h4K_UJWbVujYcQ' Target="_blank">
                            <i className='fa fa-youtube-square'></i>
                        </a>

                        <a href='https://twitter.com/WadzanaiIrvines' Target="_blank">
                            <i className='fa fa-twitter'></i>
                        </a>

                        <a href='https://wa.me/263737543231' Target='_blank'>
                            <i className='fa fa-whatsapp'></i>
                        </a>
                    </div>
                </div>
            </div>
        </div>     
    )
}

export default Contact
