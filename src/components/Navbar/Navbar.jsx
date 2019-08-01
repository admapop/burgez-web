import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'
import { Breakpoint } from 'react-socks';
// import './hamburgermenu.css'


export default class Navbar extends Component {
    render() {
        return (
            <nav>
                {/* <div className="hamburger-container">
                    <ul className="hamburger">
                        <li></li>
                        <li></li>
                        <li></li>
                    </ul>
                </div> */}
                <Breakpoint desktop only>
                <ul className="navbar" id="menuu">
                    <li><NavLink exact to="/menu">MENÙ</NavLink></li>
                    <li className="separator"><span className="circle"></span></li>
                    <li><NavLink exact to="/story">STORY</NavLink></li>
                    <li className="separator"><span className="circle"></span></li>
                    <li><NavLink exact to="locations">LOCATIONS</NavLink></li>
                    <li className="separator"><span className="circle"></span></li>
                    <li><NavLink exact to="creativity">CREATIVITY</NavLink></li>
                    <li className="separator"><span className="circle"></span></li>
                    <li><NavLink exact to="contact">CONTACT</NavLink></li>
                    <li className="separator"><span className="circle"></span></li>
                    <li><NavLink exact to="proponici">PROPONICI IL TUO IMMOBILE</NavLink></li>
                    <li className="separator"><span className="circle"></span></li>
                    <li><NavLink exact to="lavora">LAVORA CON NOI</NavLink></li>
                </ul>
                </Breakpoint>
            </nav>
        )
    }
}
