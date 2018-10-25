//<a class = "link"  href="/conta"></a>
import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import Login from './paginas/Login/Login'

const pagina = <Login/>
const divisaoProjeto = document.getElementById('projeto')
 
ReactDOM.render(pagina, divisaoProjeto)

// const linkCriarUmaConta = <a class='link' href='/conta'>Criar uma conta</a>
// // React.createElement('a', {className:'link', 
// // href:'/conta', 
// // children:'Criar uma conta'
// // })


// const fazerLogin= <a class='link' href='/login'>fazer login</a>
// // React.createElement('a',{className:'link',
// // href:'/login',
// // children:'Fazer login'
// // })



// const formularioLogin = (
//   <form>
//     {[linkCriarUmaConta, fazerLogin]}
//   </form>
// )

// const divisaoProjeto =document.getElementById('projeto')






