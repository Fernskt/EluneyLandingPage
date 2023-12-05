import React, {useState , useEffect} from 'react'
import whatsapp from '../assets/redes/whatsapp2.png'

export default function WhatsappBoton() {

    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () =>{
        const scrollPosition = window.scrollY;
        const point = 200;

        setIsScrolled(scrollPosition > point);
    }

    useEffect(() => {
       
        window.addEventListener('scroll', handleScroll);
    
        
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []); 

  return (
    <>
    {isScrolled ? <a href="https://api.whatsapp.com/send?phone=+541154969823&text=%C2%A1Hola,%20Facu!%20Quisiera%20hacerte%20una%20consulta." target='blank'> <div className='wsp-contenedor'>
        <img className='wsp-btn' src={whatsapp} alt="Whatsapp Eluney" /> 
    </div></a> : null}
   </>
  )
}
