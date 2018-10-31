//<a class = "link"  href="/conta"></a>
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import './index.css'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import Contato from './paginas/Contato/Contato'
import Login from './paginas/Login/Login'
import Conta from './paginas/Conta/Conta'


function App() {
    return (
        <div className="app">
            {}

            <Switch>
                <Route path="/" exact component={Login} />
                <Route path="/conta" component={Conta} />
                <Route path="/login" component={Login} />
                <Route path="/QuemSomos" component={QuemSomos} />
                <Route path="/Contato" component={Contato} />
            </Switch>
        </div>
    )
}

ReactDOM.render(<BrowserRouter>
    <App />
</BrowserRouter>,
    document.getElementById('projeto'))
