import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './Logo.css'

export default class Logo extends Component {
    render() {
        return (
            <div className="logo">
                <NavLink exact to="/"><img src={require("../../assets/trynot_grey.png")} alt=""/></NavLink>
            </div>
        )
    }
}
