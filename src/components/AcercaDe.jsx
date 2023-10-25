import React from "react";
import bartender from'../assets/bartender.png';

export default function AcercaDe() {
  return (
    <div className="sobremi" id="sobremi">
        <h1 className="titulo2">Nosotros</h1>
        <div className="acercaDe">

<div className="texto">
  
  <p>
  Organizamos <strong>una amplia gama de eventos!</strong> Fiestas, bodas, cumpleaños, reuniones especiales, etc. Nuestros servicios incluyen animación, barman y personal de apoyo, y si lo deseas, podemos proporcionar DJ's, pantallas gigantes y otros servicios adicionales! Contamos con una barra completa para adultos y una barra especial para los más pequeños, asegurando que todos puedan disfrutar. La animación es esencial en nuestras celebraciones, con karaoke, bingo musical, y emocionantes juegos de baile. Todo se lleva a cabo en zona sur para que tu evento sea inolvidable. <span className="enfasis">¡Contáctanos y hagamos que tu ocasión sea llena de diversión!</span> <br /> <br />

  </p>
</div>

<div className="foto1">
  <img src={bartender} alt="bartender" className="fotoBartender" />
</div>

</div>
    </div>
   
  );
}
