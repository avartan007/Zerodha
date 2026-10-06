import React from "react";

const topics = [
  ["Account Opening", "Online Account Opening", "Offline Account Opening", "NRI Account Opening", "Getting Started"],
  ["Your Zerodha Account", "Profile and password", "Console and reports", "Charges at Zerodha", "Account closure"],
  ["Trading and Platforms", "Kite user manual", "Orders and trades", "Intraday margins", "Market data"],
  ["Funds", "Add funds", "Withdraw funds", "Funds statement", "Payment issues"],
  ["Securities and Holdings", "Holdings", "Corporate actions", "Demat account", "Pledge holdings"],
  ["Console", "Reports", "Taxation", "Downloads", "Back office"],
];

function CreateTicket() {
  return (
    <section className="ticket-topics" id="tickets">
      <h2>To create a ticket, select a relevant topic</h2>
      <div className="ticket-grid">
        {topics.map(([title, ...links]) => (
          <article className="ticket-card" key={title}>
            <h3><span aria-hidden="true">+</span>{title}</h3>
            {links.map((link) => (
              <a href="#tickets" key={link}>{link}</a>
            ))}
          </article>
        ))}
      </div>
    </section>
  );
}

export default CreateTicket;
