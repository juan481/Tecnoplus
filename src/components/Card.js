import React from 'react'

const Card = () => {
  return (
      <div className="card w-96 bg-base-100 shadow-xl">
    <figure><img src="https://placeimg.com/400/225/arch" alt="Shoes" /></figure>
    <div className="card-body">
      <h2 className="card-title">Articulo</h2>
      <p>Esta es la descripción de un articulo</p>
      <div className="card-actions justify-end">
        <button className="btn btn-primary">Comprar</button>
      </div>
    </div>
  </div>
  )
}

export default Card