import React, { Component } from 'react'
import Link from '../../componentes/Link/Link'
import Botao from '../../componentes/Botao/Botao'
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import './Login.css'



class Login extends Component {
  constructor(props) {
    super(props)
    this.emailRef = React.createRef()
    this.senhaRef = React.createRef()
    this.state = { desabilitado: true }
  }

  handChange = (evento) => {

    const campoEmail = this.emailRef.current
    const campoSenha = this.senhaRef.current
    if (campoEmail.temErro() || campoSenha.temErro()) {
      this.setState({ desabilitado: true })
    } else (
      this.setState({ desabilitado: false })
    )
  }
  render() {
    return (
      <main className="login">
        <h1> Login</h1>
        <p>Entre com seu login</p>
        <Legenda htmlFor="email"> Email </Legenda>
        <Campo id="email"
          ref={this.emailRef}
          type="email"
          name="email"
          placeholder="email"
          required
          onChange={this.handChange} />
        <Legenda htmlFor="senha"> Senha </Legenda>
        <Campo id="senha"
          type="password"
          ref={this.senhaRef}
          name="senha"
          placeholder="senha"
          required
          minLength={6}
          onChange={this.handChange} />
        <Botao desabilitado={this.state.desabilitado}>Enviar</Botao>
        <Link url="/conta"> Criar uma conta</Link>

      </main>
    )
  }
}
export default Login