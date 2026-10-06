import React from "react";

const quickLinks = [
  "Track account opening",
  "Track segment activation",
  "Intraday margins",
  "Kite user manual",
];

function Hero() {
  return (
    <section className="support-hero">
      <div className="support-header">
        <h1>Support Portal</h1>
        <a href="#tickets">Track Tickets</a>
      </div>
      <div className="support-hero-grid">
        <div className="support-search">
          <h2>Search for an answer or browse help topics to create a ticket</h2>
          <input
            aria-label="Search support"
            placeholder="Eg. how do I activate F&O"
            type="search"
          />
          <div className="support-quick-links">
            {quickLinks.map((link) => (
              <a href="#tickets" key={link}>{link}</a>
            ))}
          </div>
        </div>
        <div className="support-featured">
          <h2>Featured</h2>
          <ol>
            <li><a href="#tickets">Current Takeovers and Delisting - January 2024</a></li>
            <li><a href="#tickets">Latest Intraday leverages - MIS &amp; CO</a></li>
          </ol>
        </div>
      </div>
    </section>
  );
}

export default Hero;
