import React, {useState , useEffect} from "react";
import Texto from "./Texto";

export default function Encabezado() {

const [scrolled, setScrolled] = useState(false);

const handleScroll = () =>{
  if (window.scrollY > 0){
    setScrolled(true);
    
  } else {
    setScrolled(false);
  }
}

useEffect(() => {
  // Agrega el listener cuando el componente se monta
  window.addEventListener('scroll', handleScroll);

  // Limpia el listener cuando el componente se desmonta
  return () => {
    window.removeEventListener('scroll', handleScroll);
  };
}, []);

  return (
    <div className="header">
      <div className="portada">
        <nav className={scrolled ? "navBar2" : "navBar"} >
          <div className="logo">
          <img src="../src/assets/logo.png" width="50" alt="eluney eventos" />
            <h1><a href="#">  Eluney</a></h1>
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
