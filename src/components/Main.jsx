import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import '../../node_modules/react-responsive-carousel/lib/styles/carousel.css';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Carousel emulateTouch showThumbs={false} showStatus={false} autoPlay={true} interval={5000} infiniteLoop={true}>
                    <div>
                        <img src={require("../assets/landing_page.png")} alt="" />
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
            </div>
        )
    }
}
