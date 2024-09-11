import React, { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ContactBar.css';

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {
  const date = new Date(); // Current date
  const year = date.getFullYear(); // Extracts the year
  const textRef = useRef(null);
  const trackRef = useRef(null);
  const shapeRef = useRef(null);
  const socialaRef = useRef(null);

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    message: ''
  });

  const [isAlertVisible, setIsAlertVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false); // Add loading state

  const scriptURL = 'https://script.google.com/macros/s/AKfycbxbtaLiEwPfimHJqahp5n5qh9Dbtv7brWPVtoPfZCn9Jns6paBfMD3J8lF-KI8CFIA/exec';

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validateForm = () => {
    // Simple email validation regex
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

    setIsLoading(true); // Show loader when form submission starts

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
        setIsLoading(false); // Hide loader when submission is complete
      })
      .catch((error) => {
        console.error('Error!', error.message);
        alert('An error occurred. Please try again.');
        setIsLoading(false); // Hide loader if there's an error
      });
  };

  const closeAlert = () => {
    setIsAlertVisible(false);
  };

  useEffect(() => {
    // GSAP Timeline with ScrollTrigger
    const tl1 = gsap.timeline({
      scrollTrigger: {
        trigger: trackRef.current,
        start: "top 50%",
        end: "bottom 50%",
        scrub: 1,
      }
    });

    tl1.to(".no-matter .coloreffect h1", {
      width: "100%",
      duration: 1,
    });

    // Separate paused timeline for manual control
    const tl = gsap.timeline({ 
      paused: true,
      markers: true
    });

    tl
      .to(socialaRef.current, {
        duration: 1,
        zIndex: '0',
      })
      .to(shapeRef.current, {
        duration: 1,
        scale: 1,
        ease: "expo.in",
      })
      .to(textRef.current, {
        delay: 0,
        opacity: '0.1',
      })
      .to(textRef.current, {
        duration: 1,
        opacity: '1',
        ease: "power2.in",
      }, 0); // Starts from the beginning

    // Scroll event listener to control the timeline progress
    const handleScroll = () => {
      const progress = window.pageYOffset / (document.body.offsetHeight - window.innerHeight);
      tl.progress(progress);
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container bg-green">
        <div className='bgtrack' ref={trackRef}>
          <div className='overlay'>
            <div className='contactform'>
              <div className='text-inner' ref={textRef}>
              <div className="contactwrapper">
          <h1 className="h1">Contact Us</h1>
          <div className="contactimg" style={{ display: 'none' }}>
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
                    disabled={isLoading} // Disable the button while loading
                  />
                </div>
              </div>
            </form>
          </div>
        </div>

        {isAlertVisible && (
        <div className="alert-popup">
          <img className='successfully' src="src/assets/successfully.gif" alt="Success" />
          <div className="alert-content">
            <p>Thank you! Your form has been submitted successfully.</p>
            <button onClick={closeAlert} className="close-alert">Ok</button>
          </div>
        </div>
      )}

      {isLoading && (
        <div className="loader">
          <div className="loader-ani"></div>
          {/* <img style={{width:'80px'}} src="src/assets/logo.gif" alt="Loading" /> */}
        </div>
      )}

              </div>
            </div>
            <div className="text-group">
              <h1 className="peace"><span className="peace-text">PEACE OF MIND,</span></h1>
              <div className="no-matter">
                <div className="scro-matter"><h1>NO MATTER THE PLATFORM PEAC</h1></div>
                <div className="scro-matter coloreffect"><h1>NO MATTER THE PLATFORM PEAC</h1></div>
              </div>
            </div>
            <div className="social-ation" ref={socialaRef}>
              <div className="socialmedia">
                <div className="socialround">
                  <img src="https://www.shutterstock.com/image-photo/passport-photo-portrait-woman-on-260nw-2438031869.jpg" alt="Profile" />
                </div>
                <ul className="socialmedia-icon">
                  <li><i className="fa-brands fa-facebook-f"></i></li>
                  <li><i className="fa-brands fa-youtube"></i></li>
                  <li><i className="fa-brands fa-behance"></i></li>
                  <li><i className="fa-solid fa-indian-rupee-sign"></i></li>
                  <li><i className="fa-brands fa-instagram"></i></li>
                  <li><i className="fa-solid fa-gem"></i></li>
                  <li><i className="fa-brands fa-google-drive"></i></li>
                  <li><i className="fa-solid fa-house-chimney-window"></i></li>
                </ul>
              </div>
            </div>
            <div className='roundshape'>
              <div className='bgscale'>
                <div className='bgrotate' ref={shapeRef}>
                  <div className='img'>
                    <svg className="circle" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 162 162">
                      <circle className="circle-path" cx="81" cy="81" r="70"></circle>
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      {/* <footer className="copyright-warpper">
        <div className="maxWidth">
          <div className="formblog">
            <div className="copyright">
              Copyright © Your Website <span id="yeartext">{year}</span>
            </div>
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
      </footer> */}

    </div>
  );
};

export default ContactForm;
