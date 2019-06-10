import React, { Component } from 'react'

import './style.css'

class Navbar extends Component {
    render() {
        const props = this.props

        return (
            <div className="navbar">
                <img className="user-image" src={props.user.avatar_url} alt={props.user.name} />

                <h1 className="user-name">{props.user.name}</h1>
                
                <a className="user-github" href={props.user.html_url} target="_blank" rel="noopener noreferrer">
                    <i className="far fa-user-circle" /> {props.user.login}
                </a>

                <p className="user-location"><i className="fas fa-map-marker-alt" /> {props.user.location}</p>
            </div>
        )
    }
}

export default Navbar
