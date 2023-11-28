import React from 'react'
import Encabezado from './components/Encabezado'
import AcercaDe from './components/AcercaDe'
import Fondo from './components/Fondo'
import Galeria from './components/Galeria'
import './App.css'
import './animaciones.css'
import Logo from './components/Logo'
import Footer from './components/Footer'
import Servicios from './components/Servicios'
import bartender from'./assets/bartender.png';




function App() {

  const texto = <p> Organizamos <strong>una amplia gama de eventos!</strong> Fiestas, bodas, cumpleaños, reuniones especiales, etc. Nuestros servicios incluyen animación, barman y personal de apoyo, y si lo deseas, podemos proporcionar DJ's, pantallas gigantes y otros servicios adicionales! Contamos con una barra completa para adultos y una barra especial para los más pequeños, asegurando que todos puedan disfrutar. La animación es esencial en nuestras celebraciones, con karaoke, bingo musical, y emocionantes juegos de baile. Realizamos nuestros servicios en zona sur para que tu evento sea memorable. <span className='enfasis'>¡Contáctanos y hagamos que tu ocasión sea llena de diversión!</span> <br /> <br /></p>;

  const photos = [
    
    './src/assets/fotos/foto1.jpg',
    './src/assets/fotos/foto2.jpg',
    './src/assets/fotos/foto3.jpg',
    './src/assets/fotos/foto4.jpg',
    './src/assets/fotos/foto5.jpg',
    './src/assets/fotos/foto6.jpg',
    './src/assets/fotos/foto7.jpg',
    './src/assets/fotos/foto8.jpg',
    './src/assets/fotos/foto9.jpg',
    './src/assets/fotos/foto10.jpg',
    './src/assets/fotos/foto11.jpg',
    './src/assets/fotos/foto12.jpg',
   
  ];

  return (
    <>
      <div className="app">
       
        <Encabezado />
        <div className="sobremi" id="sobremi">
        <h1 className="titulo2">Nosotros</h1>
        <AcercaDe texto={texto} imagen={bartender}/>
        </div>
        <Fondo/>
        <Galeria photos={photos} />
        <Logo />
        <Servicios />
        <Footer />

      
      </div>
    </>
  )
}

export default App
