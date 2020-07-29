import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/logoseba.png";
import "./menu.css";
// import ButtonLink from "./components/ButtonLink";
import Button from "../Button";

function Menu() {
  return (
    <div>
      <nav className="Menu">
        <Link to="/">
          <img className="Logo" src={Logo} alt="Sebáflix logo" />
        </Link>

        <Button as={Link} className="ButtonLink" to="cadastro/video">
          Novo vídeo
        </Button>
      </nav>
    </div>
  );
}

export default Menu;
