import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import './hamburgermenu.css'

export default class Navbar extends Component {
    render() {
        return (
            <nav>
                <div className="hamburger-container">
                    <ul className="hamburger">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div>

                <ul className="navbar" id="menuu">
                    <li><NavLink exact to="/menu">MENÙ</NavLink></li>
                    <li className="separator"><span className="circle"></span></li>
                    <li><a href="story.html">STORY</a></li>
                    <li className="separator"><span className="circle"></span></li>
                    <li><a href="locations.html">LOCATIONS</a></li>
                    <li className="separator"><span className="circle"></span></li>
                    <li><a href="creativity.html">CREATIVITY</a></li>
                    <li className="separator"><span className="circle"></span></li>
                    <li><a href="contact.html">CONTACT</a></li>
                    <li className="separator"><span className="circle"></span></li>
                    <li><a href="proponici.html">PROPONICI IL TUO IMMOBILE</a></li>
                    <li className="separator"><span className="circle"></span></li>
                    <li><a href="lavora.html">LAVORA CON NOI</a></li>
                </ul>
            </nav>
        )
    }
}
