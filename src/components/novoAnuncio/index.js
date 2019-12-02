import React, { Component } from 'react'
import HeaderInterno from '../headerInterno'
import base, { storage } from '../../FireBaseConfig'
import { Redirect } from 'react-router-dom'

class NovoAnuncio extends Component {
    constructor(props) {
        super(props)
        this.state = {
            sucesss: false
        }
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){        
        const file = this.foto.files[0]
        const { name, size } = file
        const ref = storage.ref(name)
        ref.put(file)
        .then(img => {            
             img.ref.getDownloadURL().then(result => {
                const novoAnuncio = {
                    nome: this.nome.value,
                    descricao: this.descricao.value,
                    preco: this.preco.value,
                    telefone: this.telefone.value,
                    vendedor: this.vendedor.value,
                    foto: result,
                    categoria: this.categoria.value
                }
                base.push('anuncios', {
                    data: novoAnuncio
                }).then(() => {
                    console.log(this.state.sucesss)
                    this.setState({ sucesss: true })
                })
            })      
        })
        
        event.preventDefault()        
    }

    render() {
        return (
            <div>
                { this.state.sucesss && <Redirect to='/' /> }
                <HeaderInterno />
                <div className='container' style={{ paddingTop: '120px' }}>
                    <h1>Novo Anuncio</h1>
                    <form onSubmit={this.handleSubmit}>
                    <div className='form'>
                            <label htmlFor='nome'>Foto</label>
                            <input type='file' className='form-control' id='foto' placeholder='foto' ref={(ref) => this.foto = ref } />
                        </div>
                        <div className='form'>
                            <label htmlFor='nome'>Nome</label>
                            <input type='text' className='form-control' id='nome' placeholder='nome' ref={(ref) => this.nome = ref } />
                        </div>
                        <div className='form'>
                            <br />
                            <label htmlFor='nome'>Categoria</label>
                            <select ref={(ref) => this.categoria = ref }>
                                {this.props.categorias.map( cat => <option value={cat.url}>{cat.categoria}</option>)}
                            </select>
                            <br />
                        </div>
                        <div className='form'>
                            <label htmlFor='descricao'>Descricao do Produto</label>
                            <input type='text' className='form-control' id='descricao' placeholder='descricao' ref={(ref) => this.descricao = ref }/>
                        </div>
                        <div className='form'>
                            <label htmlFor='preco'>Preco</label>
                            <input type='text' className='form-control' id='preco' placeholder='preco' ref={(ref) => this.preco = ref }/>
                        </div>
                        <div className='form'>
                            <label htmlFor='telefone'>Telefone</label>
                            <input type='text' className='form-control' id='telefone' placeholder='telefone' ref={(ref) => this.telefone = ref }/>
                        </div>
                        <div className='form'>
                            <label htmlFor='vendedor'>Vendedor</label>
                            <input type='text' className='form-control' id='vendedor' placeholder='vendedor' ref={(ref) => this.vendedor = ref }/>
                        </div>
                        <div className='form'>
                        <br />
                        <button type='submit' className='btn btn-primary'> Salvar Anuncio </button>
                        </div>
                        
                    </form>

                </div>

            </div>
        )
    }
}

export default NovoAnuncio;