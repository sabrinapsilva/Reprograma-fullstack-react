import React from 'react'
import Link from '../../componentes/Link/Link'
import Botao from '../../componentes/Botao/Botao'
import Legenda from '../../componentes/Legenda/Legenda'
import Campo from '../../componentes/Campo/Campo'
import './Conta.css' 
function Conta() {                                                                                                                                                                                                                                                                                                                                                          
   return(
   <main className="conta">
    <h1> Conta</h1>
    <p>Envie o formulario para criar uma conta!</p>
    <Legenda htmlFor="nome"> Nome </Legenda> 
    <Campo id="nome" type="text" name="nome" placeholder="Nome" obrigatorio/>
    
    <Legenda htmlFor="telefome"> Telfone: </Legenda> 
    <Campo id="telefone" type="tel" name="telefone" placeholder="Telefone"/>
    
    <Legenda htmlFor="email"> Email </Legenda> 
    <Campo id="email" type="email" name="email" placeholder="E-mail"/>

    <Legenda htmlFor="senha"> Senha </Legenda> 
    <Campo id="senha" type="password" name="senha" placeholder="Senha"/>

    <Botao>Enviar</Botao>
    <Link url="/conta">Fazer Login</Link>

    {/* <Botao className="botao-danger">Enviar</Botao> */}
    </main>
  )
}
  export default Conta