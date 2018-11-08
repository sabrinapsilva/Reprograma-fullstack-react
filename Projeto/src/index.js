//<a class = "link"  href="/conta"></a>
import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from './redux/store'
import Navbar from './componentes/Navbar/Navbar'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import Contato from './paginas/Contato/Contato'
import Login from './paginas/Login/Login'
import Conta from './paginas/Conta/Conta'
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada'
import Home from './paginas/Home/Home'
import './index.css'


function App() {
    return (
        <div className="app">
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/conta" component={Conta} />
                <Route path="/QuemSomos" component={QuemSomos} />
                <Route path="/Contato" component={Contato} />
                <Route component={NaoEncontrada} />

            </Switch>
        </div>
    )
}



ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById('projeto'))

