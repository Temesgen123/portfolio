import React from 'react';
import './Contact.css';
import MailIcon from '../../assets/mail.png';
import Telephone from '../../assets/telephone.png';
import Location from '../../assets/location.png';

const Contact = () => {
  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    formData.append('access_key', '5e10a750-75f9-4341-adc5-c7b7483b5d64');

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const res = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: json,
    }).then((res) => res.json());

    if (res.success) {
      alert(res.message);
    }
  };
  return (
    <div id="contact" className="contact">
      <div className="contact-title">
        <h1>Contact</h1>
      </div>
      <div className="contact-section">
        <div className="contact-left">
          <h1>Let's Connect</h1>
          <p>
            I am currently open to exciting projects or collaborations. Feel
            free to contact me.
          </p>
          <div className="contact-details">
            <div className="contact-detail">
              <img src={MailIcon} alt="" /> <p>birechis@gmail.com</p>
            </div>
            <div className="contact-detail">
              <img src={Telephone} alt="" /> <p>251-943946168</p>
            </div>
            <div className="contact-detail">
              <img src={Location} alt="" /> <p>Addis Ababa, Ethiopia</p>
            </div>
            <div className="contact-detail">
              <img src={Location} alt="" /> <p>Addis Ababa, Ethiopia</p>
            </div>
            <div className="contact-detail">
              <img src={Location} alt="" /> <p>Addis Ababa, Ethiopia</p>
            </div>
          </div>
        </div>
        <form onSubmit={onSubmit} className="contact-right">
          <label>Your Name:</label>
          <input type="text" placeholder="Enter your name." name="name" />
          <label>Your Email:</label>
          <input type="email" placeholder="Enter your email." name="email" />
          <label>Write your message here.</label>
          <textarea
            name="message"
            rows="8"
            placeholder="Enter your message."
          ></textarea>
          <button type="submit" className="contact-submit">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
