import React from 'react'
import './Campo.css'

class Campo extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            erro: ''
        }
    }

    valida = (evento) => {
        const input = evento.target

        if (this.props.required && input.value.trim() === '') {
            this.setState({erro: 'Campo obrigatório'})

        } else if(this.props.minLength && input.value.length < this.props.minLength ){
            this.setState({erro: `Digite pelo menos ${this.props.minLength} caracteres`})
        } else if (this.props.pattern && !this.props.pattern.test(input.value)) {
            this.setState({erro:'valor invalido'})

        }else{
            this.setState({erro: ''})   
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