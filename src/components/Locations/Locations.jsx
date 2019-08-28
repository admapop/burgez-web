import React, { Component } from 'react'
import { Breakpoint } from 'react-socks';
import 'tachyons';
import './Locations.scss'
import Headroom from 'react-headroom'
import Logo from '../Logo/Logo'

const mobile = {
    marginTop: "1rem",
    // height: "70vh",
    // overflowY: "scroll"
}

const tablet = {
    height: "70vh",
    overflowY: "scroll"
}

export default class Locations extends Component {
    render() {
        return (
            <div className="container">
                <img id="milano" src={require("../../assets/burgez-07.png")} alt="" />
                <Breakpoint xlmobile down>
                <Headroom>
                    <Logo />
                </Headroom>
                    <div className="list" style={mobile}>
                        <ul>
                            <li id="title">VIA SAVONA 15</li>
                            <li>Zona Tortona. Metro Verde Sant'Agostino o Porta Genova.</li>
                            <li>DALLA DOMENICA AL GIOVEDì</li>
                            <li>12:00-15:00 - 18:00-23:00</li>
                            <li>VENERDì E SABATO</li>
                            <li>12:00-15:00 - 18:00-24:00</li>
                            {/* <iframe class="modal" id="iframe1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5597.443532271934!2d9.16351593766252!3d45.45526261640794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c3e35e7d5469%3A0xbb25e98344082d99!2sBurgez!5e0!3m2!1sen!2sit!4v1563702648264!5m2!1sen!2sit" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> */}
                            <a href="#iframe1" rel="modal:open">VIEW ON MAPS</a>
                        </ul>
                        <ul>
                            <li id="title">VIA BARTOLEMEO EUSTACHI 8</li>
                            <li>Zona Porta Venezia. Tra Corso Buenos Aires e Viale Abruzzi.</li>
                            <li>Metro Rossa Porta Venezia o Lima.</li>
                            <li>DALLA DOMENICA AL GIOVEDì</li>
                            <li>12:00-15:00 - 18:00-23:00</li>
                            <li>VENERDì E SABATO</li>
                            <li>12:00-15:00 - 18:00-24:00</li>
                            {/* <iframe class="modal" id="iframe2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11191.13432721876!2d9.206235983879411!3d45.47416334913269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c694bbcfa2a3%3A0x7f95ff423a57c50c!2sBurgez!5e0!3m2!1sen!2sit!4v1563703779314!5m2!1sen!2sit" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> */}

                            <a href="#iframe2" rel="modal:open">VIEW ON MAPS</a>
                        </ul>
                        <ul>
                            <li id="title">VIA MARGHERA 18 - BURGEZ GO</li>
                            <li>Zona MARAV (incrocio MARghera-RAVizza). Metro Rossa</li>
                            <li>Wagner o De Angeli.</li>
                            <li>DAL LUNEDì AL GIOVEDì</li>
                            <li>12:00-15:00 - 18:00-23:00</li>
                            <li>VENERDì</li>
                            <li>12:00-15:00 - 18:00-24:00</li>
                            <li>SABATO</li>
                            <li>12:00-24:00</li>
                            <li>DOMENICA</li>
                            <li>12:00-23:00</li>
                            {/* <iframe class="modal" id="iframe3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d699.5306310373804!2d9.152601529268264!3d45.46733569869379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1645a4b8eb1%3A0xcca7f70c3e346dfa!2sBurgez+Go!5e0!3m2!1sit!2sit!4v1564393184034!5m2!1sit!2sit" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> */}
                            <a href="#iframe3" rel="modal:open">VIEW ON MAPS</a>
                        </ul>
                        <ul>
                            <li id="title">VIA CARMAGNOLA 8</li>
                            <li>Zona Isola. Metro Verde Garibaldi, Metro Lilla Isola.</li>
                            <li>DALLA DOMENICA AL GIOVEDì</li>
                            <li>12:00-15:00 - 18:00-23:00</li>
                            <li>VENERDì E SABATO</li>
                            <li>12:00-15:00 - 18:00-24:00</li>
                            {/* <iframe class="modal" id="iframe4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.175046005767!2d9.184776015961452!3d45.48641967910126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c707c5e50b99%3A0x82badff37ce83d84!2sBurgez!5e0!3m2!1sit!2sit!4v1564393267260!5m2!1sit!2sit" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> */}
                            <a href="#iframe4" rel="modal:open">VIEW ON MAPS</a>
                        </ul>
                        <ul>
                            <li id="title">CORSO DI PORTA TICINESE 14</li>
                            <li>Zona Colonne di San Lorenzo. Tram 3, Tram 2.</li>
                            <li>7/7</li>
                            <li>12:00-01:00</li>
                            {/* <iframe class="modal" id="iframe5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.53042045391!2d9.17881661596075!3d45.459117979100824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1e2c3422ad1%3A0x892ba5c2b2785022!2sBurgez!5e0!3m2!1sit!2sit!4v1564393341323!5m2!1sit!2sit" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> */}
                            <a href="#iframe5" rel="modal:open">VIEW ON MAPS</a>
                        </ul>
                        <ul>
                            <li id="title">CORSO COMO 2</li>
                            <li>Apriamo a Settembre</li>
                            {/* <iframe class="modal" id="iframe6" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.4340398893505!2d9.185143815961318!3d45.48120367910125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c13490d3f921%3A0xa4890ac82b365745!2sCorso+Como%2C+2%2C+20154+Milano+MI!5e0!3m2!1sit!2sit!4v1564393459600!5m2!1sit!2sit" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> */}
                            <a href="#iframe6" rel="modal:open">VIEW ON MAPS</a>
                        </ul>
                        <ul>
                            <li id="title">VIALE BLIGNY 2</li>
                            <li>Apriamo a Ottobre</li>
                            {/* <iframe class="modal" id="iframe7" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.9056936603256!2d9.18478781596055!3d45.45155647910086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c405b9bd60f1%3A0x8ed2cad8bb177c48!2sViale+Bligny%2C+2%2C+20136+Milano+MI!5e0!3m2!1sit!2sit!4v1564393533601!5m2!1sit!2sit" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> */}
                            <a href="#iframe7" rel="modal:open">VIEW ON MAPS</a>
                        </ul>
                        <ul>
                            <li id="title">VIA VIGEVANO</li>
                            <li>SOON</li>
                        </ul>
                    </div>
                    {/* <div className="botbar"></div> */}
                </Breakpoint>
                <Breakpoint tablet only>
                <Headroom>
                    <Logo />
                </Headroom>

                    <div id="mobile-scroll">
                        <div className="list fl w-50">
                            <ul>
                                <li id="title">VIA SAVONA 15</li>
                                <li>Zona Tortona. Metro Verde Sant'Agostino o Porta Genova.</li>
                                <li>DALLA DOMENICA AL GIOVEDì</li>
                                <li>12:00-15:00 - 18:00-23:00</li>
                                <li>VENERDì E SABATO</li>
                                <li>12:00-15:00 - 18:00-24:00</li>
                                {/* <iframe class="modal" id="iframe1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5597.443532271934!2d9.16351593766252!3d45.45526261640794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c3e35e7d5469%3A0xbb25e98344082d99!2sBurgez!5e0!3m2!1sen!2sit!4v1563702648264!5m2!1sen!2sit" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> */}
                                <a href="#iframe1" rel="modal:open">VIEW ON MAPS</a>
                            </ul>
                            <ul>
                                <li id="title">VIA BARTOLEMEO EUSTACHI 8</li>
                                <li>Zona Porta Venezia. Tra Corso Buenos Aires e Viale Abruzzi.</li>
                                <li>Metro Rossa Porta Venezia o Lima.</li>
                                <li>DALLA DOMENICA AL GIOVEDì</li>
                                <li>12:00-15:00 - 18:00-23:00</li>
                                <li>VENERDì E SABATO</li>
                                <li>12:00-15:00 - 18:00-24:00</li>
                                {/* <iframe class="modal" id="iframe2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11191.13432721876!2d9.206235983879411!3d45.47416334913269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c694bbcfa2a3%3A0x7f95ff423a57c50c!2sBurgez!5e0!3m2!1sen!2sit!4v1563703779314!5m2!1sen!2sit" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> */}

                                <a href="#iframe2" rel="modal:open">VIEW ON MAPS</a>
                            </ul>
                            <ul>
                                <li id="title">VIA MARGHERA 18 - BURGEZ GO</li>
                                <li>Zona MARAV (incrocio MARghera-RAVizza). Metro Rossa</li>
                                <li>Wagner o De Angeli.</li>
                                <li>DAL LUNEDì AL GIOVEDì</li>
                                <li>12:00-15:00 - 18:00-23:00</li>
                                <li>VENERDì</li>
                                <li>12:00-15:00 - 18:00-24:00</li>
                                <li>SABATO</li>
                                <li>12:00-24:00</li>
                                <li>DOMENICA</li>
                                <li>12:00-23:00</li>
                                {/* <iframe class="modal" id="iframe3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d699.5306310373804!2d9.152601529268264!3d45.46733569869379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1645a4b8eb1%3A0xcca7f70c3e346dfa!2sBurgez+Go!5e0!3m2!1sit!2sit!4v1564393184034!5m2!1sit!2sit" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> */}
                                <a href="#iframe3" rel="modal:open">VIEW ON MAPS</a>
                            </ul>
                        </div>
                        <div className="list fl w-50">
                            <ul>
                                <li id="title">VIA CARMAGNOLA 8</li>
                                <li>Zona Isola. Metro Verde Garibaldi, Metro Lilla Isola.</li>
                                <li>DALLA DOMENICA AL GIOVEDì</li>
                                <li>12:00-15:00 - 18:00-23:00</li>
                                <li>VENERDì E SABATO</li>
                                <li>12:00-15:00 - 18:00-24:00</li>
                                {/* <iframe class="modal" id="iframe4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.175046005767!2d9.184776015961452!3d45.48641967910126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c707c5e50b99%3A0x82badff37ce83d84!2sBurgez!5e0!3m2!1sit!2sit!4v1564393267260!5m2!1sit!2sit" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> */}
                                <a href="#iframe4" rel="modal:open">VIEW ON MAPS</a>
                            </ul>
                            <ul>
                                <li id="title">CORSO DI PORTA TICINESE 14</li>
                                <li>Zona Colonne di San Lorenzo. Tram 3, Tram 2.</li>
                                <li>7/7</li>
                                <li>12:00-01:00</li>
                                {/* <iframe class="modal" id="iframe5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.53042045391!2d9.17881661596075!3d45.459117979100824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1e2c3422ad1%3A0x892ba5c2b2785022!2sBurgez!5e0!3m2!1sit!2sit!4v1564393341323!5m2!1sit!2sit" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> */}
                                <a href="#iframe5" rel="modal:open">VIEW ON MAPS</a>
                            </ul>
                            <ul>
                                <li id="title">CORSO COMO 2</li>
                                <li>Apriamo a Settembre</li>
                                {/* <iframe class="modal" id="iframe6" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.4340398893505!2d9.185143815961318!3d45.48120367910125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c13490d3f921%3A0xa4890ac82b365745!2sCorso+Como%2C+2%2C+20154+Milano+MI!5e0!3m2!1sit!2sit!4v1564393459600!5m2!1sit!2sit" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> */}
                                <a href="#iframe6" rel="modal:open">VIEW ON MAPS</a>
                            </ul>
                            <ul>
                                <li id="title">VIALE BLIGNY 2</li>
                                <li>Apriamo a Ottobre</li>
                                {/* <iframe class="modal" id="iframe7" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.9056936603256!2d9.18478781596055!3d45.45155647910086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c405b9bd60f1%3A0x8ed2cad8bb177c48!2sViale+Bligny%2C+2%2C+20136+Milano+MI!5e0!3m2!1sit!2sit!4v1564393533601!5m2!1sit!2sit" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> */}
                                <a href="#iframe7" rel="modal:open">VIEW ON MAPS</a>
                            </ul>
                            <ul>
                                <li id="title">VIA VIGEVANO</li>
                                <li>SOON</li>
                            </ul>
                        </div>
                    </div>

                </Breakpoint>
                <Breakpoint desktop>
                    <div className="header fl w-10"><h1>MILANO</h1></div>
                    <div className="list fl w-40">
                        <ul>
                            <li id="title">VIA SAVONA 15</li>
                            <li>Zona Tortona. Metro Verde Sant'Agostino o Porta Genova.</li>
                            <li>DALLA DOMENICA AL GIOVEDì</li>
                            <li>12:00-15:00 - 18:00-23:00</li>
                            <li>VENERDì E SABATO</li>
                            <li>12:00-15:00 - 18:00-24:00</li>
                            {/* <iframe class="modal" id="iframe1" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5597.443532271934!2d9.16351593766252!3d45.45526261640794!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c3e35e7d5469%3A0xbb25e98344082d99!2sBurgez!5e0!3m2!1sen!2sit!4v1563702648264!5m2!1sen!2sit" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> */}
                            <a href="#iframe1" rel="modal:open">VIEW ON MAPS</a>
                        </ul>
                        <ul>
                            <li id="title">VIA BARTOLEMEO EUSTACHI 8</li>
                            <li>Zona Porta Venezia. Tra Corso Buenos Aires e Viale Abruzzi.</li>
                            <li>Metro Rossa Porta Venezia o Lima.</li>
                            <li>DALLA DOMENICA AL GIOVEDì</li>
                            <li>12:00-15:00 - 18:00-23:00</li>
                            <li>VENERDì E SABATO</li>
                            <li>12:00-15:00 - 18:00-24:00</li>
                            {/* <iframe class="modal" id="iframe2" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11191.13432721876!2d9.206235983879411!3d45.47416334913269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c694bbcfa2a3%3A0x7f95ff423a57c50c!2sBurgez!5e0!3m2!1sen!2sit!4v1563703779314!5m2!1sen!2sit" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> */}

                            <a href="#iframe2" rel="modal:open">VIEW ON MAPS</a>
                        </ul>
                        <ul>
                            <li id="title">VIA MARGHERA 18 - BURGEZ GO</li>
                            <li>Zona MARAV (incrocio MARghera-RAVizza). Metro Rossa</li>
                            <li>Wagner o De Angeli.</li>
                            <li>DAL LUNEDì AL GIOVEDì</li>
                            <li>12:00-15:00 - 18:00-23:00</li>
                            <li>VENERDì</li>
                            <li>12:00-15:00 - 18:00-24:00</li>
                            <li>SABATO</li>
                            <li>12:00-24:00</li>
                            <li>DOMENICA</li>
                            <li>12:00-23:00</li>
                            {/* <iframe class="modal" id="iframe3" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d699.5306310373804!2d9.152601529268264!3d45.46733569869379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1645a4b8eb1%3A0xcca7f70c3e346dfa!2sBurgez+Go!5e0!3m2!1sit!2sit!4v1564393184034!5m2!1sit!2sit" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> */}
                            <a href="#iframe3" rel="modal:open">VIEW ON MAPS</a>
                        </ul>
                    </div>
                    <div className="list fl w-40">
                        <ul>
                            <li id="title">VIA CARMAGNOLA 8</li>
                            <li>Zona Isola. Metro Verde Garibaldi, Metro Lilla Isola.</li>
                            <li>DALLA DOMENICA AL GIOVEDì</li>
                            <li>12:00-15:00 - 18:00-23:00</li>
                            <li>VENERDì E SABATO</li>
                            <li>12:00-15:00 - 18:00-24:00</li>
                            {/* <iframe class="modal" id="iframe4" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.175046005767!2d9.184776015961452!3d45.48641967910126!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c707c5e50b99%3A0x82badff37ce83d84!2sBurgez!5e0!3m2!1sit!2sit!4v1564393267260!5m2!1sit!2sit" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> */}
                            <a href="#iframe4" rel="modal:open">VIEW ON MAPS</a>
                        </ul>
                        <ul>
                            <li id="title">CORSO DI PORTA TICINESE 14</li>
                            <li>Zona Colonne di San Lorenzo. Tram 3, Tram 2.</li>
                            <li>7/7</li>
                            <li>12:00-01:00</li>
                            {/* <iframe class="modal" id="iframe5" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.53042045391!2d9.17881661596075!3d45.459117979100824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c1e2c3422ad1%3A0x892ba5c2b2785022!2sBurgez!5e0!3m2!1sit!2sit!4v1564393341323!5m2!1sit!2sit" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> */}
                            <a href="#iframe5" rel="modal:open">VIEW ON MAPS</a>
                        </ul>
                        <ul>
                            <li id="title">CORSO COMO 2</li>
                            <li>Apriamo a Ottobre</li>
                            {/* <iframe class="modal" id="iframe6" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2797.4340398893505!2d9.185143815961318!3d45.48120367910125!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c13490d3f921%3A0xa4890ac82b365745!2sCorso+Como%2C+2%2C+20154+Milano+MI!5e0!3m2!1sit!2sit!4v1564393459600!5m2!1sit!2sit" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> */}
                            <a href="#iframe6" rel="modal:open">VIEW ON MAPS</a>
                        </ul>
                        <ul>
                            <li id="title">VIALE BLIGNY 2</li>
                            <li>Apriamo a Ottobre</li>
                            {/* <iframe class="modal" id="iframe7" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.9056936603256!2d9.18478781596055!3d45.45155647910086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4786c405b9bd60f1%3A0x8ed2cad8bb177c48!2sViale+Bligny%2C+2%2C+20136+Milano+MI!5e0!3m2!1sit!2sit!4v1564393533601!5m2!1sit!2sit" width="600" height="450" frameborder="0" style="border:0" allowfullscreen></iframe> */}
                            <a href="#iframe7" rel="modal:open">VIEW ON MAPS</a>
                        </ul>
                        <ul>
                            <li id="title">VIA VIGEVANO</li>
                            <li>SOON</li>
                        </ul>
                    </div>
                </Breakpoint>
            </div>
        )
    }
}
