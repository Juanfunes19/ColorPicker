import React from 'react'
import "./Section.css"
import colores from "./colores.png"

const Section = () => {
  return (
    <div className='row my-5 mx-5 d-flex justify-content-center'>
      <div className='col12 col-xl-4  text-start ps-xl-5 info'>
        <h3 className='pretitulo'>Experimenta combinaciones </h3>
        <h2 className='titulo'>Generador de paletas de colores para imágenes gratuito.</h2>
        <p className='parrafo'>El creador de paletas de colores personalizadas de Tuki Colore 
        Express es una herramienta fácil de usar que genera automáticamente paletas
        con combinaciones de colores confiables que se adaptan a cualquier necesidad.</p>
        <button class="btn btn-primary" id='btn2' type="submit">Crea ahora</button>
      </div>
      <div className='col-12 col-xl-5  d-flex imagen'>
        <img src={colores} className="colores imagen"/>
      </div>
    </div>
  )
}

export default Section