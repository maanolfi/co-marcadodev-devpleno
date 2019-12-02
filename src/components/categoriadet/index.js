import React, { Component, Fragment } from "react";
import axios from "axios";

import AnuncioHome from "../anuncio";

class CategoriaDet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      anuncios: {},
      isLoad: false
    };
    this.loadAnuncios = this.loadAnuncios.bind(this);
    this.loadAnuncios();
  }

  loadAnuncios(urlCategoria) {
    this.setState({ isLoad: true, anuncio: {}})

    const url = `https://loja-bd2a2.firebaseio.com/anuncios.json?orderBy=%22categoria%22&equalTo=%22${urlCategoria}%22`;
    axios.get(url).then(data => {
      this.setState({ anuncios: data.data, isLoad: false });
      this.categoria = urlCategoria;
    });
  }
  componentWillReceiveProps(newProps) {
    if (newProps.match.params.urlCategoria) {
      if (this.categoria !== newProps.match.params.urlCategoria) {
        this.loadAnuncios(newProps.match.params.urlCategoria);
      }
    }
  }

  render() {
    return (
      <Fragment>
      {
        this.state.isLoad && <i className="fas fa-spinner fa-spin"></i>
      }
      {
        !this.state.isLoad && Object.keys(this.state.anuncios).length === 0 && <p>Nenhum registro encontrado!</p>
      }
        <div className="row">
          {Object.keys(this.state.anuncios).map(key => {
            const anuncio = this.state.anuncios[key];
            return <AnuncioHome key={key} id={key} anuncios={anuncio} />;
          })}
        </div>
      </Fragment>
    );
  }
}

export default CategoriaDet;
