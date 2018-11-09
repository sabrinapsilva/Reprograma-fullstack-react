import React, { Component } from 'react'
import { cadastraPostit } from '../../redux/actions'
import { connect } from 'react-redux'
import './Postit.css'

class Postit extends Component {
    constructor(props) {
        super(props)

    }

    cadastraOuAlteraPostit = (evento) => {
        evento.preventDefault()
        const form = evento.target

        const dados = {
            id: `ae0ba5f0-dbcc-4684-9f30-ff6fce0e389${Math.round(100)}`,
            titulo: form.titulo.value,
            texto: form.texto.value
        }
        this.props.cadastraPostit(dados)
        form.reset()
    }

    render() {
        const cadastrando = !this.props.id

        return (
            <form className="postit" onSubmit={this.cadastraOuAlteraPostit}>
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

                <button className="postit__botao-concluir">
                    Concluido
                </button>
            </form>
        )
    }
}
export default connect(
    null,
    { cadastraPostit }
)(Postit)
