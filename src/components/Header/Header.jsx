import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header
      className="header"
      // style={{ display: "flex" }}
    >
      <div className="header-content">
        <div style={{ display: "flex", justifyContent: "space-evenly" }}>
          <img src="" alt="logo" />
        </div>

        <nav>
          <ul style={{ display: "flex", justifyContent: "space-evenly" }}>
            <li>1</li>
            <li>2</li>
            <li>3</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
