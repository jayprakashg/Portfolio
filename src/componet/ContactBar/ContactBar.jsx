import React, { useState, useRef, useEffect } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import './ContactBar.css';

gsap.registerPlugin(ScrollTrigger);

const ContactForm = () => {

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
    <div className="container w-full h-auto text-center relative">
      <div className="contactform w-full">
        <div className="contactwrapper flex items-center justify-center flex-col">
          <h1 className="h1 pt-5 pb-6 md:pb-12 lg:pb-12 text-gray-900 dark:text-slate-400 text-3xl md:text-5xl lg:text-5xl">Contact Us</h1>
          <form onSubmit={handleSubmit} name="contact-form">
            <div className="formblog flex flex-wrap md:flex-nowrap lg:flex-nowrap items-center lg:items-start justify-center lg:justify-between gap-0.5 md:gap-6 lg:gap-6">
              <div className="formleft flex text-left w-full md:w-1/2 lg:w-1/2 flex-wrap self-start">
              <div className="formbox flex w-full pb-2 gap-2">
                <div className="formbox no-wrap flex flex-col w-1/2">
                  <label className="textlabel block text-xs text-gray-900 dark:text-slate-400 pb-1 text-left tracking-wide">First Name</label>
                  <input
                    type="text"
                    name="firstName"
                    placeholder="Enter your first name here.."
                    value={formData.firstName}
                    onChange={handleChange}
                    className="input w-full p-3 text-xs bg-gray-100 dark:bg-slate-800 shadow text-gray-800 dark:text-slate-400 rounded-lg"
                  />
                </div>
                <div className="formbox no-wrap flex flex-col w-1/2">
                  <label className="textlabel block text-xs text-gray-900 dark:text-slate-400 pb-1 text-left tracking-wide">Last Name</label>
                  <input
                    type="text"
                    name="lastName"
                    placeholder="Enter your last name here..."
                    value={formData.lastName}
                    onChange={handleChange}
                    className="input w-full p-3 text-xs bg-gray-100 dark:bg-slate-800 shadow text-gray-800 dark:text-slate-400 rounded-lg"
                  />
                </div>
                </div>
                <div className="formbox flex flex-col w-full pb-2">
                  <label className="textlabel block text-xs text-gray-900 dark:text-slate-400 pb-1 text-left tracking-wide">Mobile Number</label>
                  <input
                    type="text"
                    name="mobileNumber"
                    placeholder="Enter your mobile number here..."
                    value={formData.mobileNumber}
                    onChange={handleChange}
                    className="input w-full p-3 text-xs bg-gray-100 dark:bg-slate-800 shadow text-gray-800 dark:text-slate-400 rounded-lg"
                  />
                </div>
                <div className="formbox flex flex-col w-full pb-2">
                  <label className="textlabel block text-xs text-gray-900 dark:text-slate-400 pb-1 text-left tracking-wide">Email</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email here..."
                    value={formData.email}
                    onChange={handleChange}
                    className="input w-full p-3 text-xs bg-gray-100 dark:bg-slate-800 shadow text-gray-800 dark:text-slate-400 rounded-lg"
                  />
                </div>
              </div>
              <div className="formmessage text-right w-full md:w-1/2 lg:w-1/2">
                <div className="formbox">
                  <label className="textlabel block text-xs text-gray-900 dark:text-slate-400 pb-1 text-left tracking-wide">Your Message</label>
                  <textarea
                    name="message"
                    rows="7"
                    placeholder="Enter your message here..."
                    value={formData.message}
                    onChange={handleChange}
                    className="textarea w-full p-3 text-xs bg-gray-100 dark:bg-slate-800 shadow text-gray-800 dark:text-slate-400 rounded-lg"
                  ></textarea>
                </div>
                <input
                  type="submit"
                  value="Submit"
                  id="submit"
                  className="submit bg-cyan-600 hover:bg-cyan-500 tracking-widest py-2 px-4 cursor-pointer rounded-lg text-white"
                  disabled={isLoading}
                />
              </div>
            </div>
          </form>
        </div>

        {isAlertVisible && (
          <div className="alert-popup fixed top-0 left-0 right-0 bottom-0 backdrop-blur-xl bg-white/30 dark:bg-black/20 flex justify-center items-center z-[1000]">
            <img className="successfully" src="public/img/successfully.gif" alt="Success" />
            <div className="alert-content bg-white dark:bg-slate-700 p-5 rounded-lg text-center shadow">
              <p className='text-lg font-samibold text-gray-800 dark:text-slate-400'>Thank you! Your form has been submitted successfully.</p>
              <button onClick={closeAlert} className="close-alert py-2 px-4 bg-green-600 mt-4 rounded-lg pointer hover:bg-green-700 text-white">
                Ok
              </button>
            </div>
          </div>
        )}

        {isLoading && (
          <div className="loader fixed left-0 top-0 w-full h-full backdrop-blur-md bg-white/30 dark:bg-black/30 z-10 ">
            <div className="loader-ani"></div>
          </div>
        )}


      </div>        
      <div className="contactbottomtext absolute left-0 right-0 transition-all">
          <h2 className="h2-bottomtext text-xs flex items-center justify-center gap-1 uppercase text-gray-100 dark:text-slate-300">
            <a href="/" target="_self" className="an-rich-text text-gray-100 dark:text-slate-300">HOME&nbsp;</a> |&nbsp;&nbsp;
            <a href="/about" target="_self" className="an-rich-text text-gray-100 dark:text-slate-300">ABOUT</a>&nbsp; |&nbsp; 
            <a href="/projects" target="_self" className="an-rich-text text-gray-100 dark:text-slate-300">Projects</a>&nbsp; |&nbsp; 
            <a href="/contact" target="_self" className="an-rich-text text-gray-100 dark:text-slate-300">CONTACT</a>
          </h2>
          <a href="" target="_self" className="created-rich-text tracking-widest text-xs text-gray-700 dark:text-slate-300">
            <span className='text-color font-semibold text-blue-700'>Created</span> by Jayprakash Gupta
          </a>
        </div>
    </div>
  );
};

export default ContactForm;
