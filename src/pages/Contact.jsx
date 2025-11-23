
import React from "react";
import "../contact.css";

function Contact() {
  return (
    <div className="contact-container">
      {/* Animated Background */}
      <div className="bg-neon neon-1" />
      <div className="bg-neon neon-2" />

      <div className="particles">
        {Array.from({ length: 12 }).map((_, i) => (
          <span key={i} />
        ))}
      </div>

      {/* Main Contact Panel */}
      <div className="contact-box">
        <div className="contact-left">
          <h3>Contact Information</h3>
          <p>
            Reach out directly via email or visit our office.
            We'll reply within 24–48 hours.
          </p>

          <div className="info-card">
            <p className="info-title">Email</p>
            <p className="info-value">contact@kanopymedicare.com</p>
          </div>

          <div className="info-card">
            <p className="info-title">Location</p>
            <p className="info-value">123 Business Ave, Suite 100</p>
          </div>

          <div className="info-card">
            <p className="info-title">Phone</p>
            <p className="info-value">+1 (555) 123-4567</p>
          </div>
        </div>

        <form className="contact-right">
          <div className="row">
            <div className="field">
              <label>Full Name</label>
              <input type="text" placeholder="John Doe" />
            </div>

            <div className="field">
              <label>Email Address</label>
              <input type="email" placeholder="john@example.com" />
            </div>
          </div>

          <div className="field">
            <label>Phone (Optional)</label>
            <input type="text" placeholder="+1 (555) 000-0000" />
          </div>

          <div className="field">
            <label>Subject</label>
            <input type="text" placeholder="How can we help?" />
          </div>

          <div className="field">
            <label>Message</label>
            <textarea rows="4" placeholder="Tell us more about your inquiry..."></textarea>
          </div>

          <button type="submit" className="send-btn">Send Message ✈️</button>
          <p className="privacy">We respect your privacy. No spam.</p>
        </form>
      </div>

      {/* 🆕 FOOTER SECTION ADDED HERE */}
      <footer className="contact-footer">
        <p>Powered by <strong>Word Lane Tech</strong></p>
        <p>©kanopymedicare 2025 All Rights Reserved</p>
      </footer>

    </div>
  );
}

export default Contact;
