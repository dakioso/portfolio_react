import React, {Component} from "react";
import {Route, NavLink, HashRouter} from "react-router-dom";
import FirstPage from "./FirstPage";
import WorkMain from "./WorkMain";
import Guestbook from "./GuestbookForm";
const API = 'https://api.openweathermap.org/data/2.5/weather?q=stockholm,se&APPID=f2e27459e946a855105b344abddb5ba3'

class Main extends Component {
        constructor(props) {
            super(props);
    
            this.state = {
              weather: {
                temp: 273.15,
                pressure: 1014,
                humidity: 93,
                temp_min: 270.15,
                temp_max: 275.15},
            }
          }
    
          componentDidMount() {
            fetch(API)
              .then(response => response.json())
              .then(data => this.setState({ weather: data.main }));


          }



    render() {
        return (<HashRouter>
            <div>
                <ul className="header">
                    <li>
                        <NavLink exact to="/"><i className="fas fa-home"></i> Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/work">Work</NavLink>
                    </li>
                    <li>
                        <NavLink to="/guestbook">Guestbook</NavLink>
                    </li>
                </ul>

                <div>
                <Route exact path="/" render={(props) => (<FirstPage {...props} weather={this.state.weather} />)} />
                    {/* <Route exact path="/" component={FirstPage}/> */}
                </div>
                <div>
                    <Route path="/work" component={WorkMain}/>
                </div>
                <div>
                    <Route path="/guestbook" component={Guestbook} />
                </div>

            </div>
        </HashRouter>
        );
    }
}

export default Main;
