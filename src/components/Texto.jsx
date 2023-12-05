import React from 'react'
/* import { Typewriter, Cursor } from 'react-simple-typewriter' */
import imgBottom from '../assets/bottom.png'


export default function Texto() {
    return (
      <div className='descripcion'>
        <h1 className='titulo'>
          Todo lo que necesitás <br /> para tu <span className="typewriter">
          {/* <Typewriter
            words={['Fiesta', 'Casamiento', 'Cumpleaños']}
            loop={true}
            typeSpeed={120}
            deleteSpeed={80}

          />
          <Cursor /> */}
          Fiesta
          </span>
          
        </h1>
        <br />
        <p>Servicios de barra y bebidas personalizadas</p><br />
        <a href="#sobremi" ><img className="botoncito" src={imgBottom} alt="hacia abajo"  /></a>
      </div>
    );
  }
  