import React from 'react'
import Encabezado from './components/Encabezado'
import AcercaDe from './components/AcercaDe'
import Fondo from './components/Fondo'
import Galeria from './components/Galeria'
import './App.css'
import Logo from './components/Logo'
import Footer from './components/Footer'




function App() {

  const photos = [
    
    '../src/assets/fotos/foto1.jpg',
    '../src/assets/fotos/foto2.jpg',
    '../src/assets/fotos/foto3.jpg',
    '../src/assets/fotos/foto4.jpg',
    '../src/assets/fotos/foto5.jpg',
    '../src/assets/fotos/foto6.jpg',
    '../src/assets/fotos/foto7.jpg',
    '../src/assets/fotos/foto8.jpg',
    '../src/assets/fotos/foto9.jpg',
    '../src/assets/fotos/foto10.jpg',
    '../src/assets/fotos/foto11.jpg',
    '../src/assets/fotos/foto12.jpg',
   
  ];

  return (
    <>
      <div className="app">
       
        <Encabezado />
        <AcercaDe />
        <Fondo/>
        <Galeria photos={photos} />
        <Logo />
        <Footer />

      
      </div>
    </>
  )
}

export default App
