import React, { Component } from 'react'
import { cadastraPostit, alteraPostit, removePostit } from '../../redux/actions'
import { connect } from 'react-redux'
import {MdDelete} from 'react-icons/md'
import './Postit.css'

class Postit extends Component {
    constructor(props) {
        super(props)
    this.state = {editando: false}
    }

    cadastraOuAlteraPostit = (evento) => {
        evento.preventDefault()
        const cadastrando = !this.props.id
        const form = evento.target

        if(cadastrando) {
            const dados = {
                titulo: form.titulo.value,
                texto: form.texto.value
            }
            this.props.cadastraPostit(dados)
            form.reset()

        } else {
            const dados = {
                id: this.props.id,
                titulo: form.titulo.value,
                texto: form.texto.value
            }
            this.props.alteraPostit(dados)

            this.setState({ editando:false })
        }
    }

    habilitaEdicao = () => {
        this.setState({ editando:true })
        
    }

    removePostit = (evento ) => {
        evento.stopPropagation()
        this.props.removePostit(this.props.id)
    }

    render() {
        const cadastrando = !this.props.id

        return (
            <form className="postit" onClick={this.habilitaEdicao}  onSubmit={this.cadastraOuAlteraPostit}>
            {!cadastrando && this.state.editando && (
                <button className= "postit__botao-remover" type="button" onClick={this.removePostit} > <MdDelete/> </button>
            )}
                <input className="postit__titulo"
                    type="texto"
                    name="titulo"
                    placeholder="Titulo"
                    autoComplete="off"
                    defaultValue={this.props.titulo}
                >
                </input>
                <textarea className="postit__texto"
                    name="texto"
                    placeholder="Digite um texto..."
                    rows={5}
                    autoComplete="off"
                    defaultValue={this.props.texto}
                >
                </textarea>
                {(cadastrando || this.state.editando) && (
                <button className="postit__botao-concluir">
                    Concluido
                </button>
                
                )}

            </form>
        )
    }
}
export default connect(
    null,
    { cadastraPostit, alteraPostit, removePostit }
)(Postit)
