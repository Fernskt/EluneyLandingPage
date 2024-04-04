
import Texto from "./Texto";
import imgLogo from '../assets/logo.png'

export default function Encabezado() {


  return (
    <div className="header">
      <div className="portada">

      <nav class="navbar navbar-dark navbar-expand-sm bg-black fixed-top px-1">
  <div class="container-fluid ">
  <div className="logo">
          <img src={imgLogo} alt="eluney eventos" />
            <h1><a href="#">  Eluney</a></h1>
          </div>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon "></span>
    </button>
    <div class="collapse navbar-collapse bg-black" id="navbarNav">
      <ul class="navbar-nav ms-auto">
        <li class="nav-item">
          <a class="nav-link ms-4" aria-current="page" href="#inicio">Inicio</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-4" href="#sobremi">Nosotros</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-4" href="#Galeria">Galeria</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-4" href="#servicios">Servicios</a>
        </li>
        <li class="nav-item">
          <a class="nav-link ms-4" href="#contacto">Contacto</a>
        </li>
       
      </ul>
    </div>
  </div>
</nav>

       {/*  <nav className={scrolled ? "navBar2" : "navBar"} >
          <div className="logo">
          <img src={imgLogo} width="50" alt="eluney eventos" />
            <h1><a href="#">  Eluney</a></h1>
            </div>
        </nav> */}


        <Texto />
      
      </div>
      
    </div>
  );
}
