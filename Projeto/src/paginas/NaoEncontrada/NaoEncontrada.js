import React from 'react'
import './NaoEncontrada.css'
import error from './error-404.jpg'

function NaoEncontrada() {
    return (
        <main className="nao-encontrada">
        <h1>Página não encontrada</h1>
        <p className="nao-encontrada_simbolo">:-(</p>
        <img src={error} alt="Erro: pagina não encontrado"/>
        </main>

    )
}

export default NaoEncontrada