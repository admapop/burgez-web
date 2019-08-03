import React, { Component } from 'react'
import './Contact.scss'
import 'tachyons'
import { Breakpoint } from 'react-socks';

export default class Contact extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: ''
        }
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {

    }

    render() {
        return (
            <div>
                <Breakpoint desktop only>
                    <div className="wrapper">
                        <h1 className="f1 i" id="desktop">CONTACT</h1>
                        <form className="landscape-tablet" onSubmit={this.handleSubmit}>
                            <div className="desktop">
                                <label htmlFor="name" className="fl w-90 f2 fw4 b db mb2 ">NOME E COGNOME</label>
                                <input className="w-100 bn pv2" type="text" name="name" id="name" value={this.state.value} onChange={this.handleChange} />
                            </div>
                            <div className="desktop">
                                <label htmlFor="email" className="fl w-90 f2 fw4 b db mb2 ">EMAIL</label>
                                <input className="w-100 bn pv2" type="email" name="email" id="email" value={this.state.value} onChange={this.handleChange} />
                            </div>
                            <div className="desktop">
                                <label htmlFor="subject" className="fl w-90 f2 fw4 b db mb2 ">OGGETTO</label>
                                <input className="w-100 bn pv2" type="text" name="subject" id="subject" value={this.state.value} onChange={this.handleChange} />
                            </div>
                            <div className="desktop">
                                <label htmlFor="message" className="fl w-90 f2 fw4 b db mb2 ">MESSAGGIO</label>
                                <textarea className="w-100 bn pv2" type="text" name="message" id="message" value={this.state.value} onChange={this.handleChange} />
                            </div>
                            <div><input className="fr" type="submit" value="INVIA" id="submit" /></div>


                        </form>
                    </div>
                </Breakpoint>
                <Breakpoint tablet down>
                    <div className="wrapper">
                        <h1 className="f1 i ml4">CONTACT</h1>
                        <form className="" onSubmit={this.handleSubmit}>
                            <div className="tablet">
                                <label htmlFor="name" className="fl w-90 f2 fw4 b db mb2">NOME E COGNOME</label>
                                <input className="w-90 bn pv2" type="text" name="name" id="name" value={this.state.value} onChange={this.handleChange} />
                            </div>
                            <div className="tablet">
                                <label htmlFor="email" className="fl w-90 f2 fw4 b db mb2">EMAIL</label>
                                <input className="w-100 bn pv2" type="email" name="email" id="email" value={this.state.value} onChange={this.handleChange} />
                            </div>
                            <div className="tablet">
                                <label htmlFor="subject" className="fl w-90 f2 fw4 b db mb2">OGGETTO</label>
                                <input className="w-100 bn pv2" type="text" name="subject" id="subject" value={this.state.value} onChange={this.handleChange} />
                            </div>
                            <div className="tablet">
                                <label htmlFor="message" className="fl w-90 f2 fw4 b db mb2">MESSAGGIO</label>
                                <textarea className="w-100 bn pv2" type="text" name="message" id="message" value={this.state.value} onChange={this.handleChange} />
                            </div>
                            <div><input className="fr" type="submit" value="INVIA" id="submit" /></div>


                        </form>
                    </div>

                </Breakpoint>
            </div>
        )
    }
}
