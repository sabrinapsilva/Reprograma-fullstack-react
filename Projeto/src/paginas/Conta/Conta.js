import React, { Component } from 'react'
import Link from '../../componentes/Link/Link'
import Botao from '../../componentes/Botao/Botao'
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import './Conta.css'

class Conta extends Component {
  constructor(props) {
    super(props)
    this.nomeRef = React.createRef()
    this.telefoneRef = React.createRef()
    this.emailRef = React.createRef()
    this.senhaRef = React.createRef()
    this.state = { desabilitado: true }
  }

  handChange = () => {
    const campoNome = this.nomeRef.current
    const campoTelefone = this.nomeRef.current
    const campoEmail = this.nomeRef.current
    const campoSenha = this.nomeRef.current

    if (campoNome.temErro() || campoTelefone.temErro() || campoEmail.temErro() || campoSenha.temErro() ) {
      this.setState({ desabilitado: true })
    } else (
      this.setState({ desabilitado: false })
    )
  }

  render() {
    return (
      <main className="conta">
        <h1> Conta</h1>
        <p>Envie o formulario para criar uma conta!</p>
        <Legenda htmlFor="nome"> Nome </Legenda>
        <Campo id="nome"
          ref={this.nomeRef}
          type="text"
          name="nome"
          placeholder="Nome"
          required
          minLength={10}
          onChange={this.handChange} />

        <Legenda htmlFor="telefone"> Telfone: </Legenda>
        <Campo id="telefone"
          ref={this.telefoneRef}
          type="tel"
          name="telefone"
          placeholder="Telefone"
          required
          onChange={this.handChange} />

        <Legenda htmlFor="email"> Email </Legenda>
        <Campo id="email"
          ref={this.emailRef}
          type="email"
          name="email"
          placeholder="E-mail"
          required
          onChange={this.handChange} />

        <Legenda htmlFor="senha"> Senha </Legenda>
        <Campo id="senha"
          ref={this.senhaRef}
          type="password"
          name="senha"
          placeholder="Senha"
          required
          minLength={6}
          onChange={this.handChange} />

        <Botao desabilitado={this.state.desabilitado}>Enviar</Botao>
        <Link url="/login">Fazer Login</Link>

      </main>
    )
  }
}
export default Conta