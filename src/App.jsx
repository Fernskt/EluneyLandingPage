import React from "react";
import Encabezado from "./components/Encabezado";
import AcercaDe from "./components/AcercaDe";
import Fondo from "./components/Fondo";
import Galeria from "./components/Galeria";
import "./normalize.css";
import "./App.css";
import "./animaciones.css";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import Servicios from "./components/Servicios";
import Contacto from "./components/Contacto";
import WhatsappBoton from "./components/WhatsappBoton";
import bartender from "./assets/bartender.png";
import foto1 from "./assets/fotos/foto1.jpg";
import foto2 from "./assets/fotos/foto2.jpg";
import foto3 from "./assets/fotos/foto3.jpg";
import foto4 from "./assets/fotos/foto4.jpg";
import foto5 from "./assets/fotos/foto5.jpg";
import foto6 from "./assets/fotos/foto6.jpg";
import foto7 from "./assets/fotos/foto7.jpg";
import foto8 from "./assets/fotos/foto8.jpg";
import foto9 from "./assets/fotos/foto9.jpg";
import foto10 from "./assets/fotos/foto10.jpg";
import foto11 from "./assets/fotos/foto11.jpg";
import foto12 from "./assets/fotos/foto18.jpg";
import foto13 from "./assets/fotos/foto12.jpg";
import foto14 from "./assets/fotos/foto13.jpg";
import foto15 from "./assets/fotos/foto14.jpg";
import foto16 from "./assets/fotos/foto15.jpg";
import foto17 from "./assets/fotos/foto16.jpg";
import foto18 from "./assets/fotos/foto17.jpg";
import foto19 from "./assets/fotos/foto19.jpg";
import foto20 from "./assets/fotos/foto20.jpg";

function App() {
  const texto = (
    <p>
      {" "}
      Organizamos <strong>una amplia gama de eventos!</strong> Fiestas, bodas,
      cumpleaños, reuniones especiales, etc. Nuestros servicios incluyen
      animación, barman y personal de apoyo, y si lo deseas, podemos
      proporcionar DJ's, pantallas gigantes y otros servicios adicionales!
      Contamos con una barra completa para adultos y una barra especial para los
      más pequeños, asegurando que todos puedan disfrutar. La animación es
      esencial en nuestras celebraciones, con karaoke, bingo musical, y
      emocionantes juegos de baile. Realizamos nuestros servicios en zona sur
      para que tu evento sea memorable.{" "}
      <span className="enfasis">
        ¡Contáctanos y hagamos que tu ocasión sea llena de diversión!
      </span>{" "}
      <br /> <br />
    </p>
  );

  const photos = [
    {
      original: foto1,
    },
    {
      original: foto2,
    },
    {
      original: foto3,
    },
    {
      original: foto4,
    },
    {
      original: foto5,
    },
    {
      original: foto6,
    },
    {
      original: foto7,
    },
    {
      original: foto8,
    },
    {
      original: foto9,
    },
    {
      original: foto10,
    },
    {
      original: foto11,
    },
    {
      original: foto12,
    },
    {
      original: foto13,
    },
    {
      original: foto14,
    },
    {
      original: foto15,
    },
    {
      original: foto16,
    },
    {
      original: foto17,
    },
    {
      original: foto18,
    },
    {
      original: foto19,
    },
    {
      original: foto20,
    },
  ];

  return (
    <>
      <div className="app">
        <Encabezado />
        <div className="sobremi">
          <h1 className="titulo2" id="sobremi">
            Nosotros
          </h1>
          <AcercaDe texto={texto} imagen={bartender} />
        </div>
        <Fondo />
        <Galeria photos={photos} />
        <Logo />
        <Servicios />
        <Contacto />
        <WhatsappBoton />
        <Footer />
      </div>
    </>
  );
}

export default App;
