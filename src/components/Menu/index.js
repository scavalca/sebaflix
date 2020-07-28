import React from "react";
import Logo from "../../assets/images/logoseba.png";
import "./menu.css";
// import ButtonLink from "./components/ButtonLink";
import Button from "../Button";

function Menu() {
  return (
    <div>
      <nav className="Menu">
        <a href="/">
          <img className="Logo" src={Logo} alt="Sebá logo" />
        </a>

        <Button as="a" className="ButtonLink" href="/">
          Novo vídeo
        </Button>
      </nav>
    </div>
  );
}

export default Menu;
