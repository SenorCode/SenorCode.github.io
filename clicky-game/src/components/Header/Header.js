import React from "react";
import "./Header.css";

const Header = props => (
  <header className="header">
    <h1>Clicky Game!</h1>
    <h3>[Pokemon Version] </h3>
    <h2>
      Click on an image to earn points.
    </h2>
    <h2>
      Only 1 image per click 
      </h2>
  </header>
);

export default Header;
