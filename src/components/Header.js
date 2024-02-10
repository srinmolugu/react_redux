import React from "react";

function Header(props) {
  return (
    <div className="header-class">
      <div>
        <h3>The Latte</h3>
      </div>
      <div>
        <ul>
          <li>Home</li>
          <li>About Latte</li>
          <li>Services</li>
          <li>Contact Us</li>
        </ul>
      </div>
    </div>
  );
}

export default Header;
