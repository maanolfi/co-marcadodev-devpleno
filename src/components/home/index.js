import React, { Component } from 'react'
import base from '../../FireBaseConfig'

import Header from '../header'
import CategoriaLink from '../categorialink'
import AnuncioHome from '../anuncio'


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            categorias: [],
            anuncios: []
          }
          
          base.bindToState('anuncios', {
            context: this,
            state: 'anuncios'
          })
    }

    render() {
        let index = 0
        return (
        <div>
            <Header />
            <div className="container">
                <h3>Ultimos Anuncios</h3>
                <div className="row">

                    {Object.keys(this.state.anuncios).map( key => {
                        const anuncio = this.state.anuncios[key]
                        return <AnuncioHome key={key} id={key} anuncios={anuncio} />
                    })}

                </div>
                <h3>Categorias</h3>
                <div className="row">
                    {this.props.categorias.map((cat, indice) => {
                        return [
                            <CategoriaLink key={indice} categoria={cat} />,
                            ++index % 4 === 0 && <div key={'c' + indice} className="w-100"></div>
                        ]
                    })}

                </div>
            </div>
        </div>    
        )
    }
}

export default Home