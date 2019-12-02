import React from 'react'
import { Link, Route } from 'react-router-dom'

import HeaderInterno from '../headerInterno'
import CategoriaDet from '../categoriadet'
import AnuncioDetails from '../anunciodetails'

const Categorias = (props) => {   
    
    return (
        <div>
            <HeaderInterno />
            <div className='container' style={{ paddingTop: '120px' }}>
                <h1>Categorias</h1>
                
                <div className='row'>
                    <div className="col-lg-4">
                    <ul>
                    
                        {props.categorias.map(cat => {
                            return (
                                <li key={cat.url}><Link to={`/categorias/${cat.url}`}>{cat.categoria}</Link></li>
                            )
                        })}
                        </ul>
                    </div>
                        <div className='col-lg-8'> 
                        <h1>Conteudo</h1>                           
                          <Route path='/categorias/:urlCategoria' exact component={CategoriaDet} />
                          <Route path='/categorias/:urlCategoria/:idAnuncio' render={(props) => <AnuncioDetails {...props} />} />
                        </div>
                </div>
            </div>
        </div>

    )
}

export default Categorias