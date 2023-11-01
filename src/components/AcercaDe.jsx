import React from "react";


export default function AcercaDe({titulo, texto, imagen}) {
  return (
    
        <div className="acercaDe mi-seccion4">
          <div className="texto ">
          <h2 className="titulo3">{titulo}</h2>
  <p>{texto}</p>
</div>

<div className="foto1 ">
  <img src={imagen} alt={titulo} className="fotoBartender" />
</div>

</div>
);
}
