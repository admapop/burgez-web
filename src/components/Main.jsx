import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import '../../node_modules/react-responsive-carousel/lib/styles/carousel.css';
import './Main.scss'
import { Breakpoint } from 'react-socks';
import Arrow from './Animation/Arrow';

export default class Main extends Component {
    componentDidMount() {
        window.scrollTo(0, 50);
    }
    render() {
        return (
            <div>
                <Breakpoint xlmobile down>
                    <Carousel emulateTouch showArrows={false} showThumbs={false} showStatus={false} autoPlay={true} interval={5000} infiniteLoop={true} axis={"vertical"} dynamicHeight={true} showIndicators={false} >
                        <div>
                            <img src={require("../assets/Landing_Page_new.png")} alt="" />
                        </div>
                        <div>
                            <img src={require("../assets/Text.png")} alt=""/>
                            <Arrow />
                        </div>
                        <div>
                            <img src={require("../assets/Locali.png")} alt="" />
                        </div>
                        <div>
                            <img src={require("../assets/image_background4v2.png")} alt="" />
                        </div>
                    </Carousel>
                </Breakpoint>
                <Breakpoint tablet up>
                    <Carousel emulateTouch showThumbs={false} showStatus={false} autoPlay={true} interval={5000} infiniteLoop={true} showIndicators={false} stopOnHover={false}>
                        <div>
                            <img src={require("../assets/Landing_Page_new.png")} alt="" />
                        </div>
                        <div>
                            <img src={require("../assets/image_background.png")} alt="" />
                        </div>
                        <div>
                            <img src={require("../assets/image_background2.png")} alt="" />
                        </div>
                        <div>
                            <img src={require("../assets/image_background3.png")} alt="" />
                        </div>
                        <div>
                            <img src={require("../assets/image_background4v2.png")} alt="" />
                        </div>
                    </Carousel>
                </Breakpoint>
            </div>
        )
    }
}
