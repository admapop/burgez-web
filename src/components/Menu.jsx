import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';

export default class Menu extends Component {
    render() {
        return (
            <div>
                <Carousel emulateTouch showThumbs={false} showStatus={false}>
                    <div>
                        <p>Content</p>
                    </div>
                    <div>
                        <img src={require("../assets/Menu/burgez-10.png")} alt="" />
                    </div>
                    <div>
                        <img src={require("../assets/Menu/burgez-11.png")} alt="" />
                    </div>
                    <div>
                        <img src={require("../assets/Menu/burgez-12.png")} alt="" />
                    </div>
                    <div>
                        <img src={require("../assets/Menu/burgez-13.png")} alt="" />
                    </div>
                    <div>
                        <img src={require("../assets/Menu/burgez-14.png")} alt="" />
                    </div>
                    <div>
                        <img src={require("../assets/Menu/burgez-15.png")} alt="" />
                    </div>
                    <div>
                        <img src={require("../assets/Menu/burgez-16.png")} alt="" />
                    </div>
                </Carousel>
            </div>
        )
    }
}
