import React from 'react'
import AcercaDe from './AcercaDe'
import imgDj from '../assets/ilustraciones/dj.jpg'
import imgAnim from '../assets/ilustraciones/karaoke.jpg'
import imgTrago from '../assets/ilustraciones/trago.jpg'

export default function Servicios() {

    const textoBartender = <p> Nuestros tragos van desde los clásicos hasta creaciones personalizadas que se adaptan perfectamente a la temática de tu evento. Además, ofrecemos una barra especial para los más pequeños, con opciones sin alcohol y bebidas refrescantes. Eleva el nivel de tu celebración con nuestro servicio de barman y brinda a tus invitados una experiencia única. </p>

    const textoDj = <p>Nuestros DJ's son los encargados de mantener a todos en la pista de baile. Con un repertorio musical diverso y personalizable, nos adaptamos a tus gustos y preferencias musicales. Desde éxitos actuales hasta clásicos que todos aman, tu fiesta estará llena de energía. Además, ofrecemos pantallas gigantes y efectos visuales que transformarán tu evento en un espectáculo audiovisual. Deja que nuestra música haga que tu celebración cobre vida. </p>

    const textoAnimador = <p> En cada evento que organizamos, nuestros servicio de animación se encargan de brindar entretenimiento sin límites. Desde juegos interactivos, divertidas dinámicas, Karaoke y actividades para todas las edades, hasta espectáculos sorprendentes que harán reír a niños y adultos por igual. Convertimos tu celebración en un momento inolvidable!</p>

  return (
    <>
      <h1 className='titulo2'>Nuestros Servicios</h1>
      <AcercaDe titulo="Barman" texto={textoBartender} imagen={imgTrago}/>
      <AcercaDe titulo="DJ" texto={textoDj} imagen={imgDj}/>
      <AcercaDe titulo="Animación" texto={textoAnimador} imagen={imgAnim}/>

    </>
  )
}
