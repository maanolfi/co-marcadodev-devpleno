import React from 'react'
import { Link } from 'react-router-dom'

import "./style.css"
import Logo from './logo.png'


const Header = (props) =>
    <div className="jumbotron">
        <div className="container">
            <h1 className="display-3 text-center"><img src={Logo} className="App-logo" alt="logo" width="200" /></h1>
            <p className="text-center"><Link className="btn btn-anuncie btn-lg" to="/novo-anuncio" role="button">Anuncie Gratis</Link></p>

        </div>
    </div>

export default Header
