import React from "react";
import Encabezado from "./components/Encabezado";
import AcercaDe from "./components/AcercaDe";
import Fondo from "./components/Fondo";
import Galeria from "./components/Galeria";
import "./App.css";
import "./animaciones.css";
import Logo from "./components/Logo";
import Footer from "./components/Footer";
import Servicios from "./components/Servicios";
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
import foto12 from "./assets/fotos/foto12.jpg";

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
    foto1,
    foto2,
    foto3,
    foto4,
    foto5,
    foto6,
    foto7,
    foto8,
    foto9,
    foto10,
    foto11,
    foto12,
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
        <WhatsappBoton />
        <Footer />
      </div>
    </>
  );
}

export default App;
