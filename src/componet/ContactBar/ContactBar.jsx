import React, { useState } from 'react';
import './ContactBar.css'

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    message: ''
  });

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxbtaLiEwPfimHJqahp5n5qh9Dbtv7brWPVtoPfZCn9Jns6paBfMD3J8lF-KI8CFIA/exec';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    // Check if all fields are filled
    return (
      formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.mobileNumber.trim() !== '' &&
      formData.email.trim() !== '' &&
      formData.message.trim() !== ''
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert('Please fill in all fields before submitting.');
      return;
    }

    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(e.target)
    })
      .then((response) => {
        alert("Thank you! Your form has been submitted successfully.");
        setFormData({
          firstName: '',
          lastName: '',
          mobileNumber: '',
          email: '',
          message: ''
        });
      })
      .catch((error) => console.error('Error!', error.message));
  };

  return (

<div className="container bg-green">
  <div className="maxWidth">
    <div className="contactwrapper">    
      <h1 className="h1">Contact Us</h1>
      <div className="contactimg" style={{display:'none'}}>
        <img src="src/assets/contact.svg" alt="" />
        <h4>I love to help</h4>
        <p>Reach out and I'll get in touch.</p>
      </div>
      <div className="contactform">
        <form onSubmit={handleSubmit} name="contact-form">
          <div className="formblog">
            <div className="formleft">
              <div className="formbox no-wrap">
                <label className="textlabel">First Name</label>
                <input
                  type="text"
                  name="firstName"
                  placeholder="Enter your first name here.."
                  value={formData.firstName}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              <div className="formbox no-wrap removemargin">
                <label className="textlabel">Last Name</label>
                <input
                  type="text"
                  name="lastName"
                  placeholder="Enter your last name here..."
                  value={formData.lastName}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              <div className="formbox">
                <label className="textlabel">Mobile Number</label>
                <input
                  type="text"
                  name="mobileNumber"
                  placeholder="Enter your mobile number here..."
                  value={formData.mobileNumber}
                  onChange={handleChange}
                  className="input"
                />
              </div>
              <div className="formbox">
                <label className="textlabel">Email</label>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email here..."
                  value={formData.email}
                  onChange={handleChange}
                  className="input"
                />
              </div>
            </div>
            <div className="formmessage">
              <div className="formbox">
                <label className="textlabel">Your Message</label>
                <textarea
                  name="message"
                  rows="7"
                  placeholder="Enter your message here..."
                  value={formData.message}
                  onChange={handleChange}
                  className="textarea"
                ></textarea>
              </div>
              <input
                type="submit"
                value="Submit"
                id="submit"
                className="submit"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
  <footer className="copyright-warpper">
        <div className="maxWidth">
          <div className="formblog">
                <div className="copyright">Copyright © Your Website <span id="yeartext">2024</span></div>
                <div className="socialmidea">
                    <a href="#!"><i className="fa-brands fa-facebook-f"></i></a>
                    <a href="#!"><i className="fa-brands fa-linkedin-in"></i></a>
                    <a href="https://www.behance.net/jayprakashgupta/"><i className="fa-brands fa-behance"></i></a>
                    <a href="https://github.com/jayprakashg"><i className="fa-brands fa-github"></i></a>
                </div>
                <div className="privacy-terms">
                    <a className="privacy-policy" href="#!">Privacy Policy</a>
                    <a className="terms-of-use" href="#!">Terms of Use</a>
                </div>
            </div>
        </div>
    </footer>
</div>

  );
};

export default ContactForm;
