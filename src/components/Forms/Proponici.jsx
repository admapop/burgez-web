import React, { Component } from 'react'
import { Breakpoint } from 'react-socks';
import Headroom from 'react-headroom'
import Logo from '../Logo/Logo';

import 'tachyons'
import './Proponici.scss'


const style = {
    width: "100vw",
    marginTop: "8rem",
    overflowY: "hidden",
    overflowX: "hidden"
}

const container = {
    display: "flex"
}

const tablet = {
    width: "100vw",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center"
}
export default class Proponici extends Component {
    constructor(props) {
        super(props)

        this.state = {
            value: '',
            isToggle: false
        }
        this.handleClick = this.handleClick.bind(this);
    }
    handleClick(e) {
        this.setState({ isToggle: !this.state.isToggle });
    }

    handleChange = (event) => {
        this.setState({ value: event.target.value });
    }

    handleSubmit = (event) => {

    }
    render() {
        return (
            <div className="container-proponici">
                <Breakpoint desktop only>
                    <div className="" style={style}>
                        <div style={container}>
                            <h1 className="f1 w-80 i ml5" id="desktop">{`CERCHIAMO IMMOBILI ${!this.state.isToggle ? 1 : 2}/2`}</h1>
                            <a className="title fr w-20 mr5" id="next" onClick={this.handleClick}>{!this.state.isToggle ? <span>&#8250;</span> : <span>&#8249;</span>}</a>
                        </div>
                        <form className="" onSubmit={this.handleSubmit}>
                            <div className="fl w-50" style={{ display: this.state.isToggle ? 'none' : 'block' }}>
                                <div className="">
                                    <label htmlFor="name" className="fl w-100 f2 fw4 b db mb2 mh5">NOME E COGNOME</label>
                                    <input className="w-100 bn pv2 mh5" type="text" name="name" id="name" value={this.state.value} onChange={this.handleChange} />
                                </div>
                                <div className="">
                                    <label htmlFor="tel" className="fl w-100 f2 fw4 b db mb2 mh5">TELEFONO O CELLULARE</label>
                                    <input className="w-100 bn pv2 mh5" type="tel" name="tel" id="tel" />
                                </div>
                                <div className="">
                                    <label htmlFor="email" className="fl w-100 f2 fw4 b db mb2 mh5">EMAIL</label>
                                    <input className="w-100 bn pv2 mh5" type="email" name="email" id="email" value={this.state.value} onChange={this.handleChange} />
                                </div>
                                <div className="">
                                    <label htmlFor="type" className="fl w-100 f2 fw4 b db mb2 mh5">TIPO OFFERENTE</label>
                                    <select className="w-100 bn pv2 mh5" name="type" id="type">
                                        <option value="">Si prega de scegliere una opzione</option>
                                        <option value="privato">Privato</option>
                                        <option value="azienda">Azienda</option>
                                        <option value="agenzia">Agenzia immobiliare</option>
                                    </select>
                                </div>
                            </div>
                            <div className="fl w-50" style={{ display: this.state.isToggle ? 'none' : 'block' }}>
                                <div className="">
                                    <label htmlFor="address" className="fl w-100 f2 fw4 b db mb2 mh4">INDIRIZZO</label>
                                    <input className="w-100 bn pv2 mh4" type="text" name="address" id="address" value={this.state.value} onChange={this.handleChange} />
                                </div>
                                <div className="">
                                    <label htmlFor="civico" className="fl w-100 f2 fw4 b db mb2 mh4">CIVICO</label>
                                    <input className="w-100 bn pv2 mh4" type="text" name="civico" id="civico" />
                                </div>
                                <div className="">
                                    <label htmlFor="cap" className="fl w-100 f2 fw4 b db mb2 mh4">CAP</label>
                                    <input className="w-100 bn pv2 mh4" type="text" name="cap" id="cap" />
                                </div>
                                <div className="">
                                    <label htmlFor="city" className="fl w-100 f2 fw4 b db mb2 mh4">CITTà</label>
                                    <input className="w-100 bn pv2 mh4" type="text" name="city" id="city" />
                                </div>
                                {/* <div className="">
                                    <input type="radio" name="agreement" id="sì" value="sì"/>
                                    <label htmlFor="" className=""></label>
                                </div> */}
                            </div>
                            <div className="fl w-50" style={{ display: this.state.isToggle ? 'block' : 'none' }}>
                                <div className="page2">
                                    <label htmlFor="r_proposta" className="fl w-100 f2 fw4 b db mb2 mh5">IL LOCALE VIENE PROPOSTO IN</label>
                                    <div className="fl w-20">
                                        <input className="w-25 bn pv2" type="radio" name="r_proposta" id="locazione" value={''} />
                                        <label htmlFor="r_proposta" className="w-25 radio-b">Locazione</label>
                                    </div>
                                    <div className="fl w-40">
                                        <input className="w-25 bn pv2" type="radio" name="r_proposta" id="affitto" value={''} />
                                        <label htmlFor="r_proposta" className="w-25 radio-b">Affitto ramo d'azienda</label>
                                    </div>
                                </div>
                                <div className="page2">
                                    <label htmlFor="cannafumaria" className="fl w-100 f2 fw4 b db mb2 mh5">CANNA FUMARIA</label>
                                    <div className="fl w-20">
                                        <input className="w-25 bn pv2" type="radio" name="cannafumaria" id="sì" value={''} />
                                        <label htmlFor="cannafumaria" className="w-25 radio-b">Sì</label>
                                    </div>
                                    <div className="fl w-40">
                                        <input className="w-25 bn pv2" type="radio" name="cannafumaria" id="no" value={''} />
                                        <label htmlFor="cannafumaria" className="w-25 radio-b">No</label>
                                    </div>
                                </div>
                                <div className="page2">
                                    <label htmlFor="cannainstall" className="fl w-100 f2 fw4 b db mb2 mh5">SE NO, E' POSSIBILE INSTALLARLA?</label>
                                    <div className="fl w-20">
                                        <input className="w-25 bn pv2" type="radio" name="cannainstall" id="sì" value={''} />
                                        <label htmlFor="cannainstall" className="w-25 radio-b">Sì</label>
                                    </div>
                                    <div className="fl w-40">
                                        <input className="w-25 bn pv2" type="radio" name="cannainstall" id="no" value={''} />
                                        <label htmlFor="sennofumario" className="w-25 radio-b">No</label>
                                    </div>
                                </div>
                                <div className="">
                                    <label htmlFor="file" className="fl w-100 f2 fw4 b db mb2 mh5">DESIDERA INVIARE PLANIMETRIE O PDF?</label>
                                    <input className="mh5" type="file" id="file" name="file" accept="image/png, image/jpeg, .pdf" />
                                </div>


                            </div>
                            <div className="fl w-50" style={{ display: this.state.isToggle ? 'block' : 'none' }}>
                                <div className="">
                                    <label htmlFor="tot_affitto" className="fl w-100 f2 fw4 b db mb2 mh4">AFFITTO MENSILE</label>
                                    <input className="w-100 bn pv2 mh4" type="text" name="tot_affitto" id="tot_affitto" />
                                </div>
                                <div className="">
                                    <label htmlFor="surface" className="fl w-100 f2 fw4 b db mb2 mh4">SUPERFICIE DISPONIBILE AL PIANO TERRA (MQ)</label>
                                    <input className="w-100 bn pv2 mh4" type="text" name="surface" id="surface" />
                                </div>
                                <div className="">
                                    <label htmlFor="vetrine" className="fl w-100 f2 fw4 b db mb2 mh4">NUMERO VETRINE</label>
                                    <input className="w-100 bn pv2 mh4" type="text" name="vetrine" id="vetrine" />
                                </div>
                                <div className="">
                                    <label htmlFor="message" className="fl w-100 f2 fw4 b db mb2 mh4">MESSAGGIO</label>
                                    <textarea className="w-100 bn pv2 mh4" type="text" name="message" id="message" value={this.state.value} onChange={this.handleChange} />
                                </div>
                                <div className="mh4 mt3">
                                    <input type="checkbox" name="terms" id="checkbox" />
                                    <label htmlFor="terms" className="ml2">I agree to the <a href="#">terms and conditions</a></label>
                                </div>
                                <div><input className="fr" type="submit" value="INVIA" id="submit" /></div>

                            </div>

                        </form>

                    </div>
                </Breakpoint>
                <Breakpoint tablet down>
                        <Headroom>
                            <Logo />
                        </Headroom>
                    <div style={container}>
                        <h1 className="f2 w-80 i ml3 mt6" id="desktop">{`CERCHIAMO IMMOBILI ${!this.state.isToggle ? 1 : 2}/2`}</h1>
                        <a className="title fr w-20 mr5" id="next" onClick={this.handleClick}>{!this.state.isToggle ? <span>&#8250;</span> : <span>&#8249;</span>}</a>
                    </div>
                    <form className="" onSubmit={this.handleSubmit}>
                        <div className="fl w-90" style={{ display: this.state.isToggle ? 'none' : 'block' }}>
                            <div className="" style={tablet}>
                                <label htmlFor="name" className="fl w-90 f2 fw4 b db mb2">NOME E COGNOME</label>
                                <input className="w-100 bn pv2" type="text" name="name" id="name" value={this.state.value} onChange={this.handleChange} />
                            </div>
                            <div className="" style={tablet}>
                                <label htmlFor="tel" className="fl w-90 f2 fw4 b db mb2">TELEFONO O CELLULARE</label>
                                <input className="w-100 bn pv2" type="tel" name="tel" id="tel" />
                            </div>
                            <div className="" style={tablet}>
                                <label htmlFor="email" className="fl w-90 f2 fw4 b db mb2">EMAIL</label>
                                <input className="w-100 bn pv2" type="email" name="email" id="email" value={this.state.value} onChange={this.handleChange} />
                            </div>
                            <div className="" style={tablet}>
                                <label htmlFor="type" className="fl w-90 f2 fw4 b db mb2">TIPO OFFERENTE</label>
                                <select className="w-100 bn pv2" name="type" id="type">
                                    <option value="">Si prega de scegliere una opzione</option>
                                    <option value="privato">Privato</option>
                                    <option value="azienda">Azienda</option>
                                    <option value="agenzia">Agenzia immobiliare</option>
                                </select>
                            </div>
                        </div>
                        <div className="fl w-90" style={{ display: this.state.isToggle ? 'none' : 'block' }}>
                            <div className="" style={tablet}>
                                <label htmlFor="address" className="fl w-90 f2 fw4 b db mb2 ">INDIRIZZO</label>
                                <input className="w-100 bn pv2 " type="text" name="address" id="address" value={this.state.value} onChange={this.handleChange} />
                            </div>
                            <div className="" style={tablet}>
                                <label htmlFor="civico" className="fl w-90 f2 fw4 b db mb2 ">CIVICO</label>
                                <input className="w-100 bn pv2 " type="text" name="civico" id="civico" />
                            </div>
                            <div className="" style={tablet}>
                                <label htmlFor="cap" className="fl w-90 f2 fw4 b db mb2 ">CAP</label>
                                <input className="w-100 bn pv2 " type="text" name="cap" id="cap" />
                            </div>
                            <div className="" style={tablet}>
                                <label htmlFor="city" className="fl w-90 f2 fw4 b db mb2 ">CITTÀ</label>
                                <input className="w-100 bn pv2 " type="text" name="city" id="city" />
                            </div>
                        </div>
                        <div className="fl w-90" style={{ display: this.state.isToggle ? 'block' : 'none' }}>
                            <div className="page2" style={tablet}>
                                <label htmlFor="r_proposta" className="fl w-90 f2 fw4 b db mb2 ">IL LOCALE VIENE PROPOSTO IN</label>
                                <div className="fl w-30">
                                    <input className="w-25 bn pv2" type="radio" name="r_proposta" id="locazione" value={''} />
                                    <label htmlFor="r_proposta" className="w-25 radio-b">Locazione</label>
                                </div>
                                <div className="fl w-60">
                                    <input className="w-25 bn pv2" type="radio" name="r_proposta" id="affitto" value={''} />
                                    <label htmlFor="r_proposta" className="w-25 radio-b">Affitto ramo d'azienda</label>
                                </div>
                            </div>
                            <div className="page2" style={tablet}>
                                <label htmlFor="cannafumaria" className="fl w-90 f2 fw4 b db mb2 ">CANNA FUMARIA</label>
                                <div className="fl w-30">
                                    <input className="w-25 bn pv2" type="radio" name="cannafumaria" id="sì" value={''} />
                                    <label htmlFor="cannafumaria" className="w-25 radio-b">Sì</label>
                                </div>
                                <div className="fl w-60">
                                    <input className="w-25 bn pv2" type="radio" name="cannafumaria" id="no" value={''} />
                                    <label htmlFor="cannafumaria" className="w-25 radio-b">No</label>
                                </div>
                            </div>
                            <div className="page2" style={tablet}>
                                <label htmlFor="cannainstall" className="fl w-90 f2 fw4 b db mb2 ">SE NO, E' POSSIBILE INSTALLARLA?</label>
                                <div className="fl w-30">
                                    <input className="w-25 bn pv2" type="radio" name="cannainstall" id="sì" value={''} />
                                    <label htmlFor="cannainstall" className="w-25 radio-b">Sì</label>
                                </div>
                                <div className="fl w-60">
                                    <input className="w-25 bn pv2" type="radio" name="cannainstall" id="no" value={''} />
                                    <label htmlFor="sennofumario" className="w-25 radio-b">No</label>
                                </div>
                            </div>
                            <div className="" style={tablet}>
                                <label htmlFor="file" className="fl w-90 f2 fw4 b db mb2 ">DESIDERA INVIARE PLANIMETRIE O PDF?</label>
                                <input className="file" type="file" id="file" name="file" accept="image/png, image/jpeg, .pdf" />
                            </div>


                        </div>
                        <div className="fl w-50" style={{ display: this.state.isToggle ? 'block' : 'none' }}>
                            <div className="" style={tablet}>
                                <label htmlFor="tot_affitto" className="fl w-90 f2 fw4 b db mb2 ">AFFITTO MENSILE</label>
                                <input className="w-100 bn pv2 " type="text" name="tot_affitto" id="tot_affitto" />
                            </div>
                            <div className="" style={tablet}>
                                <label htmlFor="surface" className="fl w-90 f2 fw4 b db mb2 ">SUPERFICIE DISPONIBILE AL PIANO TERRA (MQ)</label>
                                <input className="w-100 bn pv2 " type="text" name="surface" id="surface" />
                            </div>
                            <div className="" style={tablet}>
                                <label htmlFor="vetrine" className="fl w-90 f2 fw4 b db mb2 ">NUMERO VETRINE</label>
                                <input className="w-100 bn pv2 " type="text" name="vetrine" id="vetrine" />
                            </div>
                            <div className="" style={tablet}>
                                <label htmlFor="message" className="fl w-90 f2 fw4 b db mb2 ">MESSAGGIO</label>
                                <textarea className="w-100 bn pv2 " type="text" name="message" id="message" value={this.state.value} onChange={this.handleChange} />
                            </div>
                            <div className="mt3" id="terms">
                                <input type="checkbox" name="terms" id="checkbox" />
                                <label htmlFor="terms" className="ml2">I agree to the <a href="#">terms and conditions</a></label>
                            </div>
                        </div>
                        <div className="fl w-100" style={{ display: this.state.isToggle ? 'block' : 'none' }}><input className="fr" type="submit" value="INVIA" id="submit" /></div>

                    </form>

                </Breakpoint>
            </div>
        )
    }
}
