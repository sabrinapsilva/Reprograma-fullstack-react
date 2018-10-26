import React from 'react'
import Link from '../../componentes/Link/Link'
import Botao from '../../componentes/Botao/Botao'
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import './Login.css' 
function Login() {
   return(
   <main className="login">
    <h1> Login</h1>
    <p>Entre com seu login</p>
    <Legenda htmlFor="email"> Email </Legenda> 
    <Campo id="email" type="email" name="email" placeholder="email"/>
    <Legenda htmlFor="senha"> Senha </Legenda> 
    <Campo id="senha" type="password" name="senha" placeholder="senha"/>
    <Botao>Enviar</Botao>
    <Link url="/conta"> Criar uma conta</Link>

    {/* <Botao className="botao-danger">Enviar</Botao> */}
    </main>
  )
}
  export default Login