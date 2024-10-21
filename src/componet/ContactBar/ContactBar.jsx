import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ContactBar.css';

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  //const contactbottomtextRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    message: ''
  });

  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const scriptURL =
    'https://script.google.com/macros/s/AKfycbxbtaLiEwPfimHJqahp5n5qh9Dbtv7brWPVtoPfZCn9Jns6paBfMD3J8lF-KI8CFIA/exec';

  // useEffect(() => {
  //   var tl1 = gsap.timeline({
  //     scrollTrigger: {
  //       trigger: ".bgscale",
  //       scrub: true,
  //       start: '10% 10%',
  //       end: 'bottom 50%',
  //       //markers:true
  //     },
  //   });
  //   //tl1.to(contactbottomtextRef.current, {bottom: '-310px', ease: "power2" });
    
  // }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return (
      formData.firstName.trim() !== '' &&
      formData.lastName.trim() !== '' &&
      formData.mobileNumber.trim() !== '' &&
      emailPattern.test(formData.email) &&
      formData.message.trim() !== ''
    );
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      alert('Please fill in all fields with a valid email before submitting.');
      return;
    }

    setIsLoading(true);

    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(e.target)
    })
      .then((response) => {
        if (response.ok) {
          setIsAlertVisible(true);
          setFormData({
            firstName: '',
            lastName: '',
            mobileNumber: '',
            email: '',
            message: ''
          });
        } else {
          alert('Failed to submit the form. Please try again.');
        }
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error!', error.message);
        alert('An error occurred. Please try again.');
        setIsLoading(false);
      });
  };

  const closeAlert = () => {
    setIsAlertVisible(false);
  };

  return (
    <div className="container">
      <div className="contactform">
        <div className="contactwrapper">
          <h1 className="h1">Contact Us</h1>
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
                  disabled={isLoading}
                />
              </div>
            </div>
          </form>
        </div>

        {isAlertVisible && (
          <div className="alert-popup">
            <img className="successfully" src="public/img/successfully.gif" alt="Success" />
            <div className="alert-content">
              <p>Thank you! Your form has been submitted successfully.</p>
              <button onClick={closeAlert} className="close-alert">
                Ok
              </button>
            </div>
          </div>
        )}

        {isLoading && (
          <div className="loader">
            <div className="loader-ani"></div>
          </div>
        )}


      </div>        
      <div className="contactbottomtext">
          <h2 className="h2-bottomtext">
            <a href="/" target="_self" className="an-rich-text">HOME&nbsp;</a> |&nbsp;&nbsp;
            <a href="/about" target="_self" className="an-rich-text">ABOUT</a>&nbsp; |&nbsp; 
            <a href="/projects" target="_self" className="an-rich-text">Projects</a>&nbsp; |&nbsp; 
            <a href="/contact" target="_self" className="an-rich-text">CONTACT</a>
          </h2>
          <a href="" target="_self" className="created-rich-text">
            <span className='createdme'>created</span> by Jayprakash Gupta
          </a>
        </div>
    </div>
  );
};

export default ContactForm;
