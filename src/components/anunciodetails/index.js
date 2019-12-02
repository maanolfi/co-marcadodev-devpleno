import React, { Component, Fragment } from 'react'
import axios from 'axios'


class AnuncioDetails extends Component {
    constructor(props){
        super(props)

        this.state = {
            anuncio: {},
            isLoad: true
        }

        const id = this.props.match.params.idAnuncio
        const url = `https://loja-bd2a2.firebaseio.com/anuncios/${id}.json`
        axios.get(url)
         .then( data => {
             this.setState({
                 anuncio: data.data,
                 isLoad: false
             })
         })
    }
    render (){
        const anuncio = this.state.anuncio
        if(this.state.isLoad){
            return <i className="fas fa-spinner fa-spin"></i>
        }
        return (            
            <Fragment>
            <h1>Anuncio</h1>
            <h2>{anuncio.nome}</h2>
            </Fragment>
            
        )
    }
}

export default AnuncioDetails