import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import { Breakpoint } from 'react-socks';
import 'tachyons';
import './Menu.scss'
import MenuContent from './MenuContent/MenuContent'
import MenuContent2 from './MenuContent/MenuContent2';

export default class Menu extends Component {
    constructor(props) {
        super(props);
        this.carousel = React.createRef();
        this.state = {
            reloaded: false
        }
    }

      componentDidMount() {
        if(!this.state.reloaded) {
            this.setState({reloaded: true});
            this.carousel.current.setState({
                itemSize: this.carousel.current.itemsRef[0].clientHeight,
                wrapperSize: this.carousel.current.itemsRef[0].clientHeight
            })
            console.log(this.carousel.current.state.itemSize)        
        }
        return;
      }
    
    render() {
        return (
            <div>
                <Breakpoint xlmobile down>
                <Carousel ref={this.carousel} emulateTouch selectedItem={0} showArrows={false} showThumbs={false} infiniteLoop={true} showStatus={false} interval={5000} axis={"vertical"} showIndicators={false} transitionTime={400}>
                    <MenuContent />
                    <MenuContent2/>
                    <div>
                        <img src={require("../assets/Menu/Mobile/Hamburger.png")} alt="" />
                    </div>
                    <div>
                        <img src={require("../assets/Menu/Mobile/Cheeseburger_.png")} alt="" />
                    </div>
                    <div>
                        <img src={require("../assets/Menu/Mobile/Smoke_Burger.png")} alt="" />
                    </div>
                    <div>
                        <img src={require("../assets/Menu/Mobile/Double_Big_Burger.png")} alt="" />
                    </div>
                    <div>
                        <img src={require("../assets/Menu/Mobile/Triple_Big_Burger.png")} alt="" />
                    </div>
                    <div>
                        <img src={require("../assets/Menu/Mobile/Chicken_Burger.png")} alt="" />
                    </div>
                    <div>
                        <img src={require("../assets/Menu/Mobile/Double_Cheeseburger.png")} alt="" />
                    </div>
                </Carousel>
                </Breakpoint>
                <Breakpoint tablet up>
                <Carousel ref={this.carousel} emulateTouch showThumbs={false} showStatus={false} interval={5000} dynamicHeight={false} showIndicators={false} transitionTime={400} >
                    <div className="container">
                        <Breakpoint tablet only>
                            <div id="mobile-container" style={{height: "80vh"}}>
                                <div className="ingredients fl w-100">
                                    <div className="fl w-third"><strong>SINGLE:</strong> <p>100gr. di carne</p></div>
                                    <div className="fl w-third"><strong>DOUBLE:</strong> <p>200gr. di carne</p></div>
                                    <div className="fl w-third"><strong>TRIPLE:</strong> <p>300gr. di carne</p></div>
                                </div>
                                <div className="hamburgez fl w-100"><strong>HAMBURGEZ</strong></div>
                                <div className="burgers fl w-25">
                                    <span id="top">BUR</span>
                                    <span>GERS</span>
                                </div>
                                <div className="price1 fl w-25">
                                    <ul>
                                        <li><span>SINGLE</span> <p id="price">5.60</p></li>
                                        <li><span id="double">DOUBLE</span> <p id="price">7.60</p></li>
                                        <li><span>TRIPLE</span> <p id="price">9.60</p></li>
                                    </ul>
                                </div>
                                <div className="menu fl w-25">
                                    <span id="top2">ME</span>
                                    <span id="nu">NÙ</span>
                                </div>
                                <div className="price1m fl w-25">
                                    <ul>
                                        <li><span>SINGLE</span> <p id="price">11.50</p></li>
                                        <li><span id="double">DOUBLE</span> <p id="price">13.50</p></li>
                                        <li><span>TRIPLE</span> <p id="price">15.50</p></li>
                                    </ul>
                                </div>
                                <div className="cheeseburgez fl w-100"><strong>CHEESEBURGEZ</strong></div>
                                <div className="burgers fl w-25">
                                    <span id="top">BUR</span>
                                    <span>GERS</span>
                                </div>
                                <div className="price2 fl w-25" >
                                    <ul>
                                        <li><span>SINGLE</span> <p id="price">6.10</p></li>
                                        <li><span id="double">DOUBLE</span> <p id="price">8.10</p></li>
                                        <li><span>TRIPLE</span> <p id="price">10.10</p></li>
                                    </ul>
                                </div>
                                <div className="menu fl w-25">
                                    <span id="top2">ME</span>
                                    <span id="nu">NÙ</span>
                                </div>
                                <div className="price2m fl w-25">
                                    <ul>
                                        <li><span>SINGLE</span> <p id="price">12.00</p></li>
                                        <li><span id="double">DOUBLE</span> <p id="price">14.00</p></li>
                                        <li><span>TRIPLE</span> <p id="price">16.00</p></li>
                                    </ul>
                                </div>
                                <div className="smokeburgez fl w-100"><strong>SMOKEBURGEZ</strong></div>
                                <div className="burgers fl w-25">
                                    <span id="top">BUR</span>
                                    <span>GERS</span>
                                </div>
                                <div className="price3 fl w-25" >
                                    <ul>
                                        <li><span>SINGLE</span> <p id="price">6.30</p></li>
                                        <li><span id="double">DOUBLE</span> <p id="price">8.30</p></li>
                                        <li><span>TRIPLE</span> <p id="price">10.30</p></li>
                                    </ul>
                                </div>
                                <div className="menu fl w-25">
                                    <span id="top2">ME</span>
                                    <span id="nu">NÙ</span>
                                </div>
                                <div className="price3m fl w-25">
                                    <ul>
                                        <li><span>SINGLE</span> <p id="price">12.20</p></li>
                                        <li><span id="double">DOUBLE</span> <p id="price">14.20</p></li>
                                        <li><span>TRIPLE</span> <p id="price">16.20</p></li>
                                    </ul>
                                </div>
                                <div className="bigburgez fl w-100"><strong>BIGBURGEZ</strong></div>
                                <div className="burgers fl w-25">
                                    <span id="top">BUR</span>
                                    <span>GERS</span>
                                </div>
                                <div className="price4 fl w-25" >
                                    <ul>
                                        <li><span>SINGLE</span> <p id="price">6.90</p></li>
                                        <li><span id="double">DOUBLE</span> <p id="price">8.80</p></li>
                                        <li><span>TRIPLE</span> <p id="price">10.60</p></li>
                                    </ul>
                                </div>
                                <div className="menu fl w-25">
                                    <span id="top2">ME</span>
                                    <span id="nu">NÙ</span>
                                </div>
                                <div className="price4m fl w-25">
                                    <ul>
                                        <li><span>SINGLE</span> <p id="price">12.80</p></li>
                                        <li><span id="double">DOUBLE</span> <p id="price">14.70</p></li>
                                        <li><span>TRIPLE</span> <p id="price">16.50</p></li>
                                    </ul>
                                </div>
                                <div className="chickenburgez fl w-100"><strong>CHICKENBURGEZ</strong></div>
                                <div className="burgers fl w-25">
                                    <span id="top">BUR</span>
                                    <span>GERS</span>
                                </div>
                                <div className="price5 fl w-25" >
                                    <ul>
                                        <li><p id="pricechick">6.80</p></li>
                                    </ul>
                                </div>
                                <div className="menu fl w-25">
                                    <span id="top2">ME</span>
                                    <span id="nu">NÙ</span>
                                </div>
                                <div className="price5m fl w-25">
                                    <ul>
                                        <li><p id="pricechick">12.70</p></li>
                                    </ul>
                                </div>
                                <div className="hotdog fl w-100"><strong id="hotdog">HOZ DOG</strong></div>
                                <div className="hotdog-list fl w-40">
                                    <ul>
                                        <li>GOOD BOY</li>
                                        <li>BLONDE GIRL</li>
                                        <li>GOLDEN GOLD</li>
                                        <li>TRY HOT</li>
                                    </ul>
                                </div>
                                <div className="descrip fl w-40">
                                    <ul>
                                        <li>ketchup, senape</li>
                                        <li>crauti, ketchup, senape</li>
                                        <li>all with cheddar cream</li>
                                        <li>cheddar cream, bacon, jalapeño</li>
                                    </ul>
                                </div>
                                <div className="fl w-10">
                                    <p id="hotprice">4.00</p>
                                </div>
                                <div className="fries fl w-100"><strong>FRIES</strong></div>
                                <div className="fries-list fl w-70">
                                    <ul>
                                        <li>FRIES</li>
                                        <li>CHEESEFRIES</li>
                                    </ul>
                                </div>
                                <div className="fl w-30">
                                    <ul>
                                        <li id="price">3.00</li>
                                        <li id="price">4.00</li>
                                    </ul>
                                </div>
                                <div className="drinks fl w-100"><strong>DRINKS</strong></div>
                                <div className="drinks-list fl w-70">
                                    <ul>
                                        <li>COKE-ZERO-FANTA-SPRITE</li>
                                        <li>BIRRA</li>
                                        <li>ACQUA</li>
                                    </ul>
                                </div>
                                <div className="fl w-30">
                                    <ul>
                                        <li id="price">3.00</li>
                                        <li id="price">3.50</li>
                                        <li id="price">1.50</li>
                                    </ul>
                                </div>
                                <div className="milkshake fl w-100"><strong>MILKSHAKE</strong></div>
                                <div className="milkshake-list fl w-80">
                                    <p>FRAGOLA-VANIGLIA-CIOCCOLATO-BANANA-AMARENA-CARAMELLO SALATO-OREO</p>
                                </div>
                                {/* <div className="fl w-5"><p>s</p></div> */}
                                <div className="fl w-15" id="milkprice"><p>5.00</p></div>
                            </div>
                        </Breakpoint>
                        <Breakpoint desktop only>
                            <div className="fl w-40">
                                <div id="desktop-container">
                                    <div className="hamburgez fl w-100"><strong>HAMBURGEZ</strong></div>
                                    <div className="burgers fl w-25">
                                        <span id="top">BUR</span>
                                        <span>GERS</span>
                                    </div>
                                    <div className="price1 fl w-25">
                                        <ul>
                                            <li><span>SINGLE</span> <p id="price">5.60</p></li>
                                            <li><span id="double">DOUBLE</span> <p id="price">7.60</p></li>
                                            <li><span>TRIPLE</span> <p id="price">9.60</p></li>
                                        </ul>
                                    </div>
                                    <div className="menu fl w-25">
                                        <span id="top2">ME</span>
                                        <span id="nu">NÙ</span>
                                    </div>
                                    <div className="price1m fl w-25">
                                        <ul>
                                            <li><span>SINGLE</span> <p id="price">11.50</p></li>
                                            <li><span id="double">DOUBLE</span> <p id="price">13.50</p></li>
                                            <li><span>TRIPLE</span> <p id="price">15.50</p></li>
                                        </ul>
                                    </div>
                                    <div className="cheeseburgez fl w-100"><strong>CHEESEBURGEZ</strong></div>
                                    <div className="burgers fl w-25">
                                        <span id="top">BUR</span>
                                        <span>GERS</span>
                                    </div>
                                    <div className="price2 fl w-25" >
                                        <ul>
                                            <li><span>SINGLE</span> <p id="price">6.10</p></li>
                                            <li><span id="double">DOUBLE</span> <p id="price">8.10</p></li>
                                            <li><span>TRIPLE</span> <p id="price">10.10</p></li>
                                        </ul>
                                    </div>
                                    <div className="menu fl w-25">
                                        <span id="top2">ME</span>
                                        <span id="nu">NÙ</span>
                                    </div>
                                    <div className="price2m fl w-25">
                                        <ul>
                                            <li><span>SINGLE</span> <p id="price">12.00</p></li>
                                            <li><span id="double">DOUBLE</span> <p id="price">14.00</p></li>
                                            <li><span>TRIPLE</span> <p id="price">16.00</p></li>
                                        </ul>
                                    </div>
                                    <div className="smokeburgez fl w-100"><strong>SMOKEBURGEZ</strong></div>
                                    <div className="burgers fl w-25">
                                        <span id="top">BUR</span>
                                        <span>GERS</span>
                                    </div>
                                    <div className="price3 fl w-25" >
                                        <ul>
                                            <li><span>SINGLE</span> <p id="price">6.30</p></li>
                                            <li><span id="double">DOUBLE</span> <p id="price">8.30</p></li>
                                            <li><span>TRIPLE</span> <p id="price">10.30</p></li>
                                        </ul>
                                    </div>
                                    <div className="menu fl w-25">
                                        <span id="top2">ME</span>
                                        <span id="nu">NÙ</span>
                                    </div>
                                    <div className="price3m fl w-25">
                                        <ul>
                                            <li><span>SINGLE</span> <p id="price">12.20</p></li>
                                            <li><span id="double">DOUBLE</span> <p id="price">14.20</p></li>
                                            <li><span>TRIPLE</span> <p id="price">16.20</p></li>
                                        </ul>
                                    </div>
                                    <div className="bigburgez fl w-100"><strong>BIGBURGEZ</strong></div>
                                    <div className="burgers fl w-25">
                                        <span id="top">BUR</span>
                                        <span>GERS</span>
                                    </div>
                                    <div className="price4 fl w-25" >
                                        <ul>
                                            <li><span>SINGLE</span> <p id="price">6.90</p></li>
                                            <li><span id="double">DOUBLE</span> <p id="price">8.80</p></li>
                                            <li><span>TRIPLE</span> <p id="price">10.60</p></li>
                                        </ul>
                                    </div>
                                    <div className="menu fl w-25">
                                        <span id="top2">ME</span>
                                        <span id="nu">NÙ</span>
                                    </div>
                                    <div className="price4m fl w-25">
                                        <ul>
                                            <li><span>SINGLE</span> <p id="price">12.80</p></li>
                                            <li><span id="double">DOUBLE</span> <p id="price">14.70</p></li>
                                            <li><span>TRIPLE</span> <p id="price">16.50</p></li>
                                        </ul>
                                    </div>
                                    <div className="chickenburgez fl w-100"><strong>CHICKENBURGEZ</strong></div>
                                    <div className="burgers fl w-25">
                                        <span id="top">BUR</span>
                                        <span>GERS</span>
                                    </div>
                                    <div className="price5 fl w-25" >
                                        <ul>
                                            <li><p id="pricechick">6.80</p></li>
                                        </ul>
                                    </div>
                                    <div className="menu fl w-25">
                                        <span id="top2">ME</span>
                                        <span id="nu">NÙ</span>
                                    </div>
                                    <div className="price5m fl w-25">
                                        <ul>
                                            <li><p id="pricechick">12.70</p></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="fl w-20">
                                <div className="middle" id="desktop-container">
                                    <div className="fl w-70" id="menubox">
                                        <h1>MENÙ</h1>
                                        <ul>
                                            <li>burger</li>
                                            <li>fries</li>
                                            <li>drink</li>
                                        </ul>
                                    </div>
                                    <div className="ingredients fl w-70">
                                        <div className="fl w-100" id="ingr"><strong>SINGLE:</strong> <p>100gr. di carne</p></div>
                                        <div className="fl w-100" id="ingr"><strong>DOUBLE:</strong> <p>200gr. di carne</p></div>
                                        <div className="fl w-100" id="ingr"><strong>TRIPLE:</strong> <p>300gr. di carne</p></div>
                                    </div>
                                    <div className="fl w-70" id="menubox">
                                        <p>Se scegli il single non ti lamentare se poi è piccolo. Le misure contano. "Sigmund Freud"</p>
                                    </div>
                                </div>
                            </div>
                            <div className="fl w-40">
                                <div id="desktop-container">
                                    <div className="hotdog fl w-100"><strong id="hotdog">HOZ DOG</strong></div>
                                    <div className="hotdog-list fl w-40">
                                        <ul>
                                            <li>GOOD BOY</li>
                                            <li>BLONDE GIRL</li>
                                            <li>GOLDEN GOLD</li>
                                            <li>TRY HOT</li>
                                        </ul>
                                    </div>
                                    <div className="descrip fl w-40">
                                        <ul>
                                            <li>ketchup, senape</li>
                                            <li>crauti, ketchup, senape</li>
                                            <li>all with cheddar cream</li>
                                            <li>cheddar cream, bacon, jalapeño</li>
                                        </ul>
                                    </div>
                                    <div className="fl w-10">
                                        <p id="hotprice">4.00</p>
                                    </div>
                                    <div className="fries fl w-100"><strong>FRIES</strong></div>
                                    <div className="fries-list fl w-70">
                                        <ul>
                                            <li>FRIES</li>
                                            <li>CHEESEFRIES</li>
                                        </ul>
                                    </div>
                                    <div className="fl w-30" id="desk-price">
                                        <ul>
                                            <li id="price">3.00</li>
                                            <li id="price">4.00</li>
                                        </ul>
                                    </div>
                                    <div className="drinks fl w-100"><strong>DRINKS</strong></div>
                                    <div className="drinks-list fl w-70">
                                        <ul>
                                            <li>COKE-ZERO-FANTA-SPRITE</li>
                                            <li>BIRRA</li>
                                            <li>ACQUA</li>
                                        </ul>
                                    </div>
                                    <div className="fl w-30" id="desk-price">
                                        <ul>
                                            <li id="price">3.00</li>
                                            <li id="price">3.50</li>
                                            <li id="price">1.50</li>
                                        </ul>
                                    </div>
                                    <div className="milkshake fl w-100"><strong>MILKSHAKE</strong></div>
                                    <div className="milkshake-list fl w-80">
                                        <p>FRAGOLA-VANIGLIA-CIOCCOLATO-BANANA-AMARENA-CARAMELLO SALATO-OREO</p>
                                    </div>
                                    <div className="fl w-15" id="milkprice"><p>5.00</p></div>
                                </div>
                            </div>
                        </Breakpoint>
                    </div>
                    <div>
                        <Breakpoint tablet only>
                        <img src={require("../assets/Menu/Tablet/Hamburger.png")} alt="" />
                        </Breakpoint>
                        <Breakpoint desktop only>
                            <img src={require("../assets/Menu/burgez-10_2.png")} alt="" />
                        </Breakpoint>
                    </div>
                    <div>
                        <Breakpoint tablet only>
                        <img src={require("../assets/Menu/Tablet/Cheeseburger_Tablet.png")} alt="" />
                        </Breakpoint>
                        <Breakpoint desktop only>
                        <img src={require("../assets/Menu/burgez-11.png")} alt="" />
                        </Breakpoint>
                    </div>
                    <div>
                        <Breakpoint tablet only>
                        <img src={require("../assets/Menu/Tablet/Smoke_Burger_Tablet.png")} alt="" />
                        </Breakpoint>
                        <Breakpoint desktop only>
                        <img src={require("../assets/Menu/burgez-12.png")} alt="" />                            
                        </Breakpoint>
                    </div>
                    <div>
                        <Breakpoint tablet only>
                        <img src={require("../assets/Menu/Tablet/Big_Burger_Tablet.png")} alt="" />
                        </Breakpoint>
                        <Breakpoint desktop only>
                        <img src={require("../assets/Menu/burgez-13.png")} alt="" />
                        </Breakpoint>
                    </div>
                    <div>
                        <Breakpoint tablet only>
                        <img src={require("../assets/Menu/Tablet/Triple_Big_Burger_Tablet.png")} alt="" />
                        </Breakpoint>
                        <Breakpoint desktop only>
                        <img src={require("../assets/Menu/burgez-14.png")} alt="" />
                        </Breakpoint>
                    </div>
                    <div>
                        <Breakpoint tablet only>
                        <img src={require("../assets/Menu/Tablet/Chicken_Burger_Tablet.png")} alt="" />
                        </Breakpoint>
                        <Breakpoint desktop only>
                        <img src={require("../assets/Menu/burgez-15.png")} alt="" />
                        </Breakpoint>
                    </div>
                    <div>
                        <Breakpoint tablet only>
                        <img src={require("../assets/Menu/Tablet/Double_Cheeseburger_Tablet.png")} alt="" />
                        </Breakpoint>
                        <Breakpoint desktop only>
                        <img src={require("../assets/Menu/burgez-16.png")} alt="" />
                        </Breakpoint>
                    </div>
                </Carousel>
                </Breakpoint>

            </div>
        )
    }
}
