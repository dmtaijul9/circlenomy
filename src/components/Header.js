import React from "react";
import Container from "./Container";
import circlenomyLogo from "../img/Group3677.png";

import "./Header.css";

const Header = () => {
  return (
    <header className="header-manu">
      <Container>
        <a href="">
          <img
            src={circlenomyLogo}
            alt="Circlenomy"
            className="circlenomy-logo"
          />
        </a>
      </Container>
    </header>
  );
};

export default Header;
