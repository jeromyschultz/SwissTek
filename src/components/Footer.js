import React, {Component} from "react";
import logo from "../images/logo.png";

import "./FooterStyle.css";

class Footer extends Component{
    render() {
        return(
            <div id={"footerContainer"}>
                <div className="bg-danger text-white" id={"footerBreak"}>
                </div>
                <div id={"footerContentContainer"}>
                    <div id={"addressInfoContainer"}>
                        <p>
                            N27 W23310 Roundy Drive <br/>
                            Pewaukee, WI 53072 <br/>
                        </p>
                    </div>
                    <div id={'imageContainer'}>
                        <img id={"footerImage"} src={logo} alt={"logo"}/>
                    </div>
                    <div id={"phoneFaxInfoContainer"}>
                        <p>
                            Phone: 262.784.6100 <br/>
                            Fax: 262.784.6101 <br/>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer;