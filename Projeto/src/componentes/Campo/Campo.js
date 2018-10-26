import React from 'react'
import './Campo.css'

class Campo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            erro: 'Campo obrigatório'
        }
    }

    valida = (evento) => {
        const alvo = evento.target

        if (this.props.obrigatorio && alvo.value.trim() === '') {
            const state = {
                erro:'Campo obrigatório'
            }
            this.setState(state)
        }
    }


    render(){
    return (
    <div>
        <input className = "caixa-texto" 
        id={this.props.id}
        type={this.props.type} 
        name={this.props.name} 
        placeholder={this.props.placeholder}
        onChange = {this.valida}
        />
        
        <p className= "grupo__erro" >{this.state.erro}</p>
    </div>
    )
    }
}

export default Campo 