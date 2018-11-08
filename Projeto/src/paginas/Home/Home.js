import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import carregandoImg from './carregando.svg'
import './Home.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { carregandoImg: true }
    }

    render() {
        if (!this.props.usuario) {
            return <Redirect to="/login" />
        }

        return (
            <main className="home"> 
            {this.state.carregandoImg ? (
                <img className = "home__loading" src={carregandoImg} alt="Carregando"/>
            ) : (
                <div>
                    Aqui listar postit
                </div>
            )}
            </main>
        )
    }
}

export default connect((state) => ({ usuario: state.usuario }))(Home)