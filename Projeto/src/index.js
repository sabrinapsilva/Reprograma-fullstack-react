//<a class = "link"  href="/conta"></a>
import React from 'react'
import ReactDOM from 'react-dom'
import { withRouter, BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import store from './redux/store'
import Navbar from './componentes/Navbar/Navbar'
import QuemSomos from './paginas/QuemSomos/QuemSomos'
import Contato from './paginas/Contato/Contato'
import Login from './paginas/Login/Login'
import Conta from './paginas/Conta/Conta'
import NaoEncontrada from './paginas/NaoEncontrada/NaoEncontrada'
import Home from './paginas/Home/Home'
import './index.css'


function App(props) {
    const usuario = props.usuario
    const logaUsuario = props.logaUsuario
    const deslogaUsuario = props.deslogaUsuario


    return (
        <div className="app">
            <Navbar usuario={usuario} deslogaUsuario={deslogaUsuario} />

            <Switch>
                <Route path="/" exact render={() => {
                    return usuario ? <Home /> : <Redirect to="/login" />
                }} />
                <Route path="/login" render={(props) => {
                    return <Login historico={props.history} onEnviar={logaUsuario} />
                }} />
                <Route path="/conta" component={Conta} />
                <Route path="/QuemSomos" component={QuemSomos} />
                <Route path="/Contato" component={Contato} />
                <Route component={NaoEncontrada} />

            </Switch>
        </div>
    )
}

function passaDadosDoEstadoParaMeuComponente(state) {
    const props = {
        usuario: state.usuario

    }
    return props
}

function passaFuncoesQueDisparamAcoesViaProps(dispatch) {
    const props = {
        logaUsuario: (dados) => {
            const acao = {
                type: 'LOGA_USUARIO',
                dados: dados
            }
            dispatch(acao)
        },
        deslogaUsuario: () => {
            const acao = {
                type: 'DESLOGA_USUARIO'
            }
            dispatch(acao)
        }

    }
    return props
}

const conectaNaStore = connect(passaDadosDoEstadoParaMeuComponente, passaFuncoesQueDisparamAcoesViaProps)

const AppConectada = withRouter(conectaNaStore(App))

conectaNaStore(App)

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <AppConectada />
        </BrowserRouter>
    </Provider>,
    document.getElementById('projeto'))
