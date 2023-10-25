import React from 'react'
import { Typewriter, Cursor } from 'react-simple-typewriter'


export default function Texto() {
    return (
      <div className='descripcion'>
        <h1 className='titulo'>
          Todo lo que necesitás <br /> para tu <span className="typewriter">
          <Typewriter
            words={['Fiesta', 'Casamiento', 'Cumpleaños']}
            loop={true}
            typeSpeed={120}
            deleteSpeed={80}

          />
          <Cursor />
          </span>
          
        </h1>
        <br />
        <p>Servicios de barra y bebidas personalizadas</p>
      </div>
    );
  }
  