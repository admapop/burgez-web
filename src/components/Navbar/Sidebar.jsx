import React, { Component } from 'react'
import { slide as Menu } from 'react-burger-menu';
import { NavLink } from 'react-router-dom'
import './reactmenu.css'
import { Breakpoint } from 'react-socks';

export default class Sidebar extends Component {
    render() {
        return (
            <Breakpoint tablet down>
            <Menu {...this.props} right>
                <NavLink exact to="/menu" className="menu-item">MENÙ</NavLink>
                <NavLink exact to="/story" className="menu-item">STORY</NavLink>
                <NavLink exact to="locations" className="menu-item">LOCATIONS</NavLink>
                <NavLink exact to="creativity" className="menu-item">CREATIVITY</NavLink>
                <NavLink exact to="contact" className="menu-item">CONTACT</NavLink>
                <NavLink exact to="proponici" className="menu-item">PROPONICI IL TUO IMMOBILE</NavLink>
                <NavLink exact to="lavora" className="menu-item">LAVORA CON NOI</NavLink>
            </Menu>
            </Breakpoint>
        )
    }
}
