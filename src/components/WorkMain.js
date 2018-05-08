import React, {Component} from "react";
import nestr from "../assets/img/nestr.png";
import panda from "../assets/img/panda.png";
import itsdaniel from "../assets/img/itsdaniel.png";
import WorkTitle from "./WorkTitle";

class WorkMain extends Component {
    render() {
        return (
          <div className="work-page-content">
          <div className="work-page-wrapper">
                <WorkTitle />
              <a target="_blank"  rel="noopener noreferrer" href="https://nestr.surge.sh"> <img src= {nestr} id="nestr-pic"/> </a>
              <a target="_blank"  rel="noopener noreferrer" href="http://pandasoft-fg.surge.sh/"> <img src= {panda} id="panda-pic"/> </a>
              <a target="_blank"  rel="noopener noreferrer" href="https://itsdaniel.se"> <img src= {itsdaniel} id="itsdaniel-pic"/> </a>
              </div>
        </div>
      );
    }
}

export default WorkMain;
