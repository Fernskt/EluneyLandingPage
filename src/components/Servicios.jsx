import React from 'react'
import AcercaDe from './AcercaDe'
import imgDj from '../assets/ilustraciones/dj.jpg'
import imgAnim from '../assets/ilustraciones/karaoke.jpg'
import imgTrago from '../assets/ilustraciones/trago.png'
import imgMozo from '../assets/ilustraciones/mozo.png'

export default function Servicios() {

    const textoBartender = <p> Nuestros tragos van desde los clásicos hasta creaciones personalizadas que se adaptan perfectamente a la temática de tu evento. Además, ofrecemos una barra especial para los más pequeños, con opciones sin alcohol y bebidas refrescantes. Eleva el nivel de tu celebración con nuestro servicio de barman y brinda a tus invitados una experiencia única. </p>

    const textoDj = <p>Nuestros DJ's son los encargados de mantener a todos en la pista de baile. Con un repertorio musical diverso y personalizable, nos adaptamos a tus gustos y preferencias musicales. Desde éxitos actuales hasta clásicos que todos aman, tu fiesta estará llena de energía. Además, ofrecemos pantallas gigantes y efectos visuales que transformarán tu evento en un espectáculo audiovisual. Deja que nuestra música haga que tu celebración cobre vida. </p>

    const textoAnimador = <p> En cada evento que organizamos, nuestros servicio de animación se encargan de brindar entretenimiento sin límites. Desde juegos interactivos, divertidas dinámicas, Karaoke y actividades para todas las edades, hasta espectáculos sorprendentes que harán reír a niños y adultos por igual. Convertimos tu celebración en un momento inolvidable!</p>
    const textoMozo = <p> Nuestros mozos profesionales están aquí para asegurarse de que tu evento sea un éxito. Desde servir bebidas y comida hasta mantener todo limpio y ordenado, nuestros mozos se encargan de todo.</p>

  return (
    <>
      <h1 className='titulo2'>Nuestros Servicios</h1>
      <AcercaDe titulo="Barman" texto={textoBartender} imagen={imgTrago}/>
      <AcercaDe titulo="DJ" texto={textoDj} imagen={imgDj}/>
      <AcercaDe titulo="Mozo" texto={textoMozo} imagen={imgMozo}/>
      <AcercaDe titulo="Animación" texto={textoAnimador} imagen={imgAnim}/>
      <div className="ondas">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#1757b6" fill-opacity="1" d="M0,160L60,138.7C120,117,240,75,360,96C480,117,600,203,720,234.7C840,267,960,245,1080,202.7C1200,160,1320,96,1380,64L1440,32L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path></svg>
</div>

    </>
  )
}
