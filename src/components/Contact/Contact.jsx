import React, { Component } from 'react'
import './Contact.scss'
import 'tachyons'

export default class Contact extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             value: ''
        }
    }
    
    handleChange = (event) => {
        this.setState({value: event.target.value});
    }

    handleSubmit = (event) => {

    }
    
    render() {
        return (
            <div style={{width: "90vw"}} className="wrapper">
            <h1 className="f1 i ml5">CONTACT</h1>
            <form className="" onSubmit={this.handleSubmit}>
                <div className="">
                    <label htmlFor="name" className="fl w-100 f2 fw4 b db mb2 ml5">NOME E COGNOME</label>
                    <input className="w-100 bn mh5 pv2" type="text" name="name" id="name" value={this.state.value} onChange={this.handleChange} />
                </div>
                <div className="">
                    <label htmlFor="email" className="fl w-100 f2 fw4 b db mb2 ml5">EMAIL</label>
                    <input className="w-100 bn mh5 pv2" type="email" name="email" id="email" value={this.state.value} onChange={this.handleChange} />
                </div>
                <div className="">
                    <label htmlFor="subject" className="fl w-100 f2 fw4 b db mb2 ml5">OGGETTO</label>
                    <input className="w-100 bn mh5 pv2" type="text" name="subject" id="subject" value={this.state.value} onChange={this.handleChange} />
                </div>
                <div className="">
                    <label htmlFor="message" className="fl w-100 f2 fw4 b db mb2 ml5">MESSAGGIO</label>
                    <textarea className="w-100 bn mh5 pv2" type="text" name="message" id="message" value={this.state.value} onChange={this.handleChange} />
                </div>
                <div><input className="fr" type="submit" value="INVIA" id="submit" /></div>


            </form>
            </div>
        )
    }
}
