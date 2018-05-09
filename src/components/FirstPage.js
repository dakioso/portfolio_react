import React, {Component} from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import WorkMain from "./WorkMain";
import SocialIcons from "./SocialIcons";

class FirstPage extends Component {
    render() {

        const { weather } = this.props


        return (
          <div className="home-main-container">
            <div className="first-page-intro-wrapper">
                <h2>Welcome</h2>
                <h3>A future of <span className="web-item">web</span> is ahead of us!</h3>
                    <div class="spinner">
                        <div class="rect1"></div>
                        <div class="rect2"></div>
                        <div class="rect3"></div>
                        <div class="rect4"></div>
                        <div class="rect5"></div>
                    </div>
                <SocialIcons />
                <p className="show-temp">{(weather.temp-273.15).toFixed(1)}<span className="show-temp-item">℃</span></p>
            </div>
        </div>
      );
    }
}

export default FirstPage;
