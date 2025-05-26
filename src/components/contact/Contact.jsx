import React, { useEffect, useRef, useState } from "react";
import "./Contact.css";
import { FiUser, FiMail, FiMessageSquare, FiSend } from "react-icons/fi";

const Contact = () => {
  const titleRef = useRef();
  const formRef = useRef();
  const [isTitleVisible, setIsTitleVisible] = useState(false);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    const titleObserver = new IntersectionObserver(
      ([entry]) => setIsTitleVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (titleRef.current) titleObserver.observe(titleRef.current);
    return () => titleRef.current && titleObserver.unobserve(titleRef.current);
  }, []);

  useEffect(() => {
    const formObserver = new IntersectionObserver(
      ([entry]) => setIsFormVisible(entry.isIntersecting),
      { threshold: 0.5 }
    );
    if (formRef.current) formObserver.observe(formRef.current);
    return () => formRef.current && formObserver.unobserve(formRef.current);
  }, []);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch(
      "https://script.google.com/macros/s/AKfycbzBldzfhfSt0TOumD-K435RTb5kGtjMBOTKR6XffdrD_-QtlMO5mDBC6mfJTHKstAkSLA/exec",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      }
    );

    const result = await response.json();
    console.log("Submission result:", result);

    if (result.result === "Success") {
      setSubmitted(true);
      setFormData({ user_name: "", user_email: "", message: "" });
    }
  } catch (err) {
    console.error("Submission failed", err);
  }
};

  return (
    <section className="contact-section">
      <div
        ref={titleRef}
        className={`about-container ${
          isTitleVisible ? "pop-in about-section" : "pop-out about-section"
        }`}
      >
        <h1 className="about-title">Contact Me</h1>
        <p className="about-subtitle">
          Got a question or opportunity in mind? Drop me a message —
          <br />
          I’ll get back to you as soon as possible.
        </p>
      </div>

      <div
        ref={formRef}
        className={`contact-form-container ${
          isFormVisible ? "pop-in" : "pop-out"
        }`}
      >
        <form className="contact-form" onSubmit={handleSubmit}>
          <p className="form-heading">Get In Touch</p>
          <p className="form-sub-heading">
            Let's build something great together. Send me your thoughts.
          </p>

          <div className="form-group">
            <FiUser className="form-icon" />
            <input
              type="text"
              name="user_name"
              placeholder="Your Name"
              value={formData.user_name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <FiMail className="form-icon" />
            <input
              type="email"
              name="user_email"
              placeholder="Your Email"
              value={formData.user_email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <FiMessageSquare className="form-icon" />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className="contact-btn">
            <FiSend /> Send Message
          </button>
          {submitted && (
            <p className="success-msg">Thanks! I’ll be in touch soon ✅</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;
