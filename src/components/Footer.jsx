import React from "react";

export default function Footer() {
  return (
    <div className="footer">
      <div className="logo">
        <h1>Eluney</h1>
      </div>

      <div className="links-footer">
        <a href="#">Home</a>
        <a href="#sobremi">Nosotros</a>
        <a href="#Galeria">Galería</a>
        <a href="#contacto">Contacto</a>
      </div>
      <div className="redes">
        <a href="https://wa.me/1560428780" className="red">
          <img
            src="./src/assets/redes/whatsapp2.png"
            alt="whatsapp"
            width="20"
            height="20"
          />
        </a>
        <a href="www.facebook.com" className="red">
          <img
            src="./src/assets/redes/facebook2.png"
            alt="facebook"
            width="20"
            height="20"
          />
        </a>
        <a href="www.instagram.com" className="red">
          <img
            src="./src/assets/redes/instagram.png"
            alt="instagram"
            width="20"
            height="20"
          />
        </a>
        <a href="gmail@gmail.com" className="red">
          <img
            src="./src/assets/redes/gmail.png"
            alt="gmail"
            width="20"
            height="20"
          />
        </a>
      </div>
      <div className="links-footer">
        <p className="red">
          <img
            src="./src/assets/redes/tel.png"
            alt="whatsapp"
            width="20"
            height="20"
          />
          115496-9823
        </p>
        <p className="red">
          <img
            src="./src/assets/redes/map.png"
            alt="whatsapp"
            width="20"
            height="20"
          />
        Lanús, Buenos Aires
        </p>
      </div>
    </div>
  );
}
