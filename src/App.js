import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import "./style.css"
import base from './FireBaseConfig'


import Home from './components/home'
import Footer from './components/footer'
import NovoAnuncio from './components/novoAnuncio'
import Categorias from './components/categorias'

export class App extends Component {
 
  constructor(props){
   super(props)
  this.state = {
     categorias: []
   }
   base.bindToState('categorias', {
    context: this,
    state: 'categorias'
  })
 }

  render() {    
    return (
      <Router>
        <div className="App">
          <Route  path='/'  exact render={() => <Home categorias={this.state.categorias} />} />
          <Route path='/novo-anuncio' exact render={() => <NovoAnuncio categorias={this.state.categorias} />} />
          <Route path='/categorias' render={() => <Categorias categorias={this.state.categorias} />} />
          <Footer />
        </div>
      </Router>

    )
  }
}



export default App;
