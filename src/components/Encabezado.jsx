import React from "react";
import Texto from "./Texto";

export default function Encabezado() {
  return (
    <div className="header">
      <div className="portada">
        <nav className="navBar">
          <div className="logo">
            <h1><a href="#">Eluney</a></h1>
          </div>
          <div className="links">
            <a href="#">Home</a>
            <a href="#sobremi">Nosotros</a>
            <a href="#Galeria">Galería</a>
            <a href="#contacto">Contacto</a>
          </div>
        </nav>
        <Texto />
      </div>
      
    </div>
  );
}
