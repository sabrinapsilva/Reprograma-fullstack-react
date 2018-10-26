//<a class = "link"  href="/conta"></a>
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Login from './paginas/Login/Login'
import Conta from  './paginas/Conta/Conta'

//const pagina = <Login/>
const pagina2 = <Conta/>
const divisaoProjeto = document.getElementById('projeto')
 
ReactDOM.render(pagina2, divisaoProjeto)
