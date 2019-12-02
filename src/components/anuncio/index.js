import React from 'react'
import { Link } from 'react-router-dom'


const Home = ({id, anuncios}) => {
  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div className="card h-100">
        <Link to={`/categorias/${anuncios.categoria}/${id}`}><img className="card-img-top" src={anuncios.foto} alt="" /></Link>
        <div className="card-body">
          <h4 className="card-title">
            <a to={`/anuncios/ver/`}>{anuncios.nome}</a>
          </h4>
          <h5>{anuncios.preco}</h5>
          <p className="card-text">{anuncios.descricao}</p>
        </div>
      </div>
    </div>
  )

}


export default Home