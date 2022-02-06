import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <div className="header-content">
        <div style={{ margin: "0 0 0 2rem" }}>
          <img src="" alt="logo" style={{ display: "flex" }} />
        </div>

        <nav>
          <ul
            style={{
              display: "flex",
              justifyContent: "space-evenly",
              padding: "0",
              margin: "0 2rem 0 0 ",
            }}
          >
            <li style={{ listStyleType: "none", margin: "0 1rem" }}>1</li>
            <li style={{ listStyleType: "none", margin: "0 1rem" }}>2</li>
            <li style={{ listStyleType: "none", margin: "0 1rem" }}>3</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
