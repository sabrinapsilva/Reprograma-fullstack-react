import React, {Component} from 'react'
import { Redirect } from 'react-router-dom'
import { connect } from 'react-redux'
import Postit from '../../componentes/Postit/Postit'
import carregandoImg from './carregando.svg'
import './Home.css'

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = { carregandoImg: false }
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
                    <Postit />
                    
                    <div>
                        {this.props.postits.map(postit =>(
                            <Postit 
                            key={postit.id}
                            id={postit.id}
                            titulo = {postit.titulo}
                            texto = {postit.texto}
                            />
                        ))}
                    </div>
                </div>
            )}
            </main>
        )
    }
}

export default connect((state) => ({ 
    usuario: state.usuario,
    postits: state.postits 
})
)(Home)