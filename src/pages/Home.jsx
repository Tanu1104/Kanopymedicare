import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <main className="home-hero">
      <header className="site-header">
        <div className="logo">Kanopy <span>MediCare</span></div>
        <nav className="nav">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
        </nav>
      </header>

      <section className="hero-content">
        <div className="hero-left">
          {/* 3-line animated heading */}
         <h2 className="hero-title">
  <span className="line line-1">
    <span className="white">Your Journey from</span>
    &nbsp;
    <span className="blue">MBBS Student</span>
  </span>

  <span className="line line-2">
    <span className="white">to</span>
    &nbsp;
    <span className="blue">World-Class Doctor</span>
    &nbsp;
    <span className="white">Begins Here</span>
  </span>
</h2>
          <p className="hero-lead">
            Personalized mentorship, practical clinical coaching and global placement support — built for your medical career.
          </p>

          <Link to="/contact" className="btn btn-primary" aria-label="Contact our publishing expert">
            CONTACT WITH OUR EXPERT
          </Link>
        </div>

        <aside className="hero-right" aria-hidden="false">
          <div className="stat-card card-top">
            <div className="stat-num">24/7</div>
            <div className="stat-label">Support Available</div>
          </div>

          <div className="stat-card card-bottom">
            <div className="stat-num">99%</div>
            <div className="stat-label">Satisfaction Rate</div>
          </div>
        </aside>
      </section>
    </main>
  );
}
