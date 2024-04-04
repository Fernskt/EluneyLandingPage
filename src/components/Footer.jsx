import React, { useState } from "react";
import imgWhatsapp from "../assets/redes/whatsapp2.png"
import imgFace from "../assets/redes/facebook2.png"
import imgGmail from "../assets/redes/gmail.png"
import imgInstagram from "../assets/redes/instagram.png"
import imgMap from "../assets/redes/map.png"
import imgTel from "../assets/redes/tel.png"

export default function Footer() {

 

  return (
    <>
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
        <a href="https://api.whatsapp.com/send?phone=+541154969823&text=%C2%A1Hola,%20Facu!%20Quisiera%20hacerte%20una%20consulta." className="red">
          <img
            src={imgWhatsapp}
            alt="whatsapp"
            width="20"
            height="20"
          />
        </a>
        <a href="https://www.facebook.com/facundo.garcia.71697" className="red">
          <img
            src={imgFace}
            alt="facebook"
            width="20"
            height="20"
          />
        </a>
        <a href="https://www.instagram.com/facu.garciass/" target="blank" className="red">
          <img
            src={imgInstagram}
            alt="instagram"
            width="20"
            height="20"
          />
        </a>
        <a href="gmail@gmail.com" className="red">
          <img
            src={imgGmail}
            alt="gmail"
            width="20"
            height="20"
          />
        </a>
      </div>
      <div className="links-footer">
        <p className="red">
          <img
            src={imgTel}
            alt="whatsapp"
            width="20"
            height="20"
          />
          115496-9823
        </p>
        <p className="red">
          <img
            src={imgMap}
            alt="whatsapp"
            width="20"
            height="20"
          />
        Lanús, Buenos Aires
        </p>
      </div>
    </div>
   
    <div className="copyright">
      <p className="mi-seccion4">Copyright © 2023 Eluney.</p>
    </div>
    </>
  );
}
