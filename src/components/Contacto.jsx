import { useState } from "react";
import React from "react";


export default function Contacto() {

const [nombre , setNombre] = useState("");

const manejarCambio = (e) => {
  setNombre(e.target.value);
}

  return (
    <div className="contacto" id="contacto">
      <h2 className="titulo2">Contacto</h2>
      <form action="https://formsubmit.co/bd5430092fe3bed1b8798a5b1478cfde" method="POST" className="form">
        <label htmlFor="nombre" aria-required>Ingresa tu nombre</label>
        <input type="text" name="Nombre" id="nombre"  onChange={manejarCambio} placeholder="Su nombre aquí" />
        <label htmlFor="telefono">Ingresa tu teléfono</label>
        <input type="text" name="Telefono" id="telefono" placeholder="Su número aquí" />
        <input type="hidden" name="_subject" value={nombre + " te ha enviado un Mensaje!"}/>
        <label htmlFor="mensaje">Ingresa tu mensaje</label>
        <textarea id="mensaje" name="Mensaje" cols="30" rows="10"></textarea>
        <button type="submit" value="Enviar" className="btn">Enviar</button>
      </form>
    </div>
  );
}
