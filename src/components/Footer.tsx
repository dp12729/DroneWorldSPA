import React from "react";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear(); // Dynamically set the current year

  return (
    <footer>
      <div className="footer-content">
        <p>© {currentYear} Drone World. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
