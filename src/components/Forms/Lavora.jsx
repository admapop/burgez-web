import React, { Component } from 'react'
import { Breakpoint } from 'react-socks';
import Headroom from 'react-headroom'
import Logo from '../Logo/Logo';

import './Lavora.scss'

const encode = (data) => {
    return Object.keys(data)
        .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
        .join("&");
}

export default class Lavora extends Component {
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            subject: '',
            message: ''
        }
    }

    handleChange = (event) => {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = (event) => {
        fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: encode({ "form-name": "lavora", ...this.state })
        })
            .then(() => alert("Success!"))
            .then(() => this.setState({ name: '', email: '', subject: '', message: '' }))
            .catch(error => alert(error));
        event.preventDefault();
    }

    render() {
        const { name, email, subject, message } = this.state;
        return (
            <div className="container-lavora">
                <Breakpoint desktop only>
                    <div className="w-100 mobile-landscape">
                        <div className="main fl w-50 ml5 mr3">
                            <p>Vuoi essere una o uno dello staff di <strong>BURGEZ</strong>?
                            Ti piacerebbe avere uno stipendio e divertirti mentre lavori?
                            Sì? Bene, allora devi sapere che il cliente che vorrai servire...</p>
                            <div className="shift">
                                <h2>La prima volta entra da BURGEZ per</h2>
                                <span>la comunicazione o il passaparola.</span>
                                <h2>La seconda volta torna per</h2>
                                <span>la qualità del burger.</span>
                                <h2>La terza volta torna per</h2>
                                <span>l'educazione del personale.</span>
                            </div>
                            <p>Sì proprio grazie alla tua simpatia e alla tua educazione.
                            Il 33,3% periodico della riuscita di <strong>BURGEZ</strong> è rappresentata dalla
                                    customer experience e, comunque, al di là dei numeri,
                                    il capitale umano spesso rappresenta il 100% della riuscita di un
                                    progetto di retail sales. Non c'è nulla di più bello di essere coccolati
                                    e trattati come esseri umani.
                            </p>
                            <p><strong>BURGEZ</strong> non cerca ragazzi con esperienza ma ragazzi simpatici,
                            educati, gentili e sempre con il sorriso. L'esperienza si construisce,
                            la gentilezza e la simpatia no. A <strong>BURGEZ</strong> interessano i ragazzi
                                    più simpatici e gentili del mondo e se pensi di essere una o
                                    uno di loro non esitare a scriverci e a farti conoscere.
                            </p>
                        </div>
                        <div className="fl w-40" style={{ overflow: "hidden" }} id="contactform">
                            <div className="wrapper">
                                <h1 className="f1 i" id="desktop">CONTACT</h1>
                                <form name="lavora" onSubmit={this.handleSubmit}>
                                    <div className="desktop">
                                        <label htmlFor="name" className="fl w-90 f2 fw4 b db mb2 ">NOME E COGNOME</label>
                                        <input className="w-100 bn pv2" type="text" name="name" id="name" value={name} onChange={this.handleChange} />
                                    </div>
                                    <div className="desktop">
                                        <label htmlFor="email" className="fl w-90 f2 fw4 b db mb2 ">EMAIL</label>
                                        <input className="w-100 bn pv2" type="email" name="email" id="email" value={email} onChange={this.handleChange} />
                                    </div>
                                    <div className="desktop">
                                        <label htmlFor="subject" className="fl w-90 f2 fw4 b db mb2 ">OGGETTO</label>
                                        <input className="w-100 bn pv2" type="text" name="subject" id="subject" value={subject} onChange={this.handleChange} />
                                    </div>
                                    <div className="desktop">
                                        <label htmlFor="message" className="fl w-90 f2 fw4 b db mb2 ">MESSAGGIO</label>
                                        <textarea className="w-100 bn pv2" type="text" name="message" id="message" value={message} onChange={this.handleChange} />
                                    </div>
                                    <div><input className="fr" type="submit" value="INVIA" id="submit" /></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </Breakpoint>
                <Breakpoint tablet down>
                <Headroom style={{
                        paddingTop: "30px"
                    }}>
                    <Logo />
                </Headroom>
                    <div className="main" id="text_portrait">
                        <p>Vuoi essere una o uno dello staff di <strong>BURGEZ</strong>?
                        Ti piacerebbe avere uno stipendio e divertirti mentre lavori?
                        Sì? Bene, allora devi sapere che il cliente che vorrai servire...
                        </p>
                        <div className="shift">
                            <h2>La prima volta entra da BURGEZ per</h2>
                            <span>la comunicazione o il passaparola.</span>
                            <h2>La seconda volta torna per</h2>
                            <span>la qualità del burger.</span>
                            <h2>La terza volta torna per</h2>
                            <span>l'educazione del personale.</span>
                        </div>
                        <p>Sì proprio grazie alla tua simpatia e alla tua educazione.
                            Il 33,3% periodico della riuscita di <strong>BURGEZ</strong> è rappresentata dalla
                            customer experience e, comunque, al di là dei numeri,
                            il capitale umano spesso rappresenta il 100% della riuscita di un
                            progetto di retail sales. Non c'è nulla di più bello di essere coccolati
                            e trattati come esseri umani.
                            </p>
                        <p><strong>BURGEZ</strong> non cerca ragazzi con esperienza ma ragazzi simpatici,
                        educati, gentili e sempre con il sorriso. L'esperienza si construisce,
                            la gentilezza e la simpatia no. A <strong>BURGEZ</strong> interessano i ragazzi
                            più simpatici e gentili del mondo e se pensi di essere una o
                            uno di loro non esitare a scriverci e a farti conoscere.
                            </p>
                    </div>
                    <div className="wrapper" id="tablet-down">
                        <h1 className="f1 i ml4">CONTACT</h1>
                        <form className="" onSubmit={this.handleSubmit}>
                            <div className="tablet">
                                <label htmlFor="name" className="fl w-90 f2 fw4 b db mb2">NOME E COGNOME</label>
                                <input className="w-90 bn pv2" type="text" name="name" id="name" value={name} onChange={this.handleChange} />
                            </div>
                            <div className="tablet">
                                <label htmlFor="email" className="fl w-90 f2 fw4 b db mb2">EMAIL</label>
                                <input className="w-100 bn pv2" type="email" name="email" id="email" value={email} onChange={this.handleChange} />
                            </div>
                            <div className="tablet">
                                <label htmlFor="subject" className="fl w-90 f2 fw4 b db mb2">OGGETTO</label>
                                <input className="w-100 bn pv2" type="text" name="subject" id="subject" value={subject} onChange={this.handleChange} />
                            </div>
                            <div className="tablet">
                                <label htmlFor="message" className="fl w-90 f2 fw4 b db mb2">MESSAGGIO</label>
                                <textarea className="w-100 bn pv2" type="text" name="message" id="message" value={message} onChange={this.handleChange} />
                            </div>
                            <div><input className="fr" type="submit" value="INVIA" id="submit" /></div>
                        </form>
                    </div>
                </Breakpoint>

            </div>
        )
    }
}
