import React, { Component } from 'react';
import logo from '../images/logo.png';
import "./HeaderStyle.css"


class Header extends Component {


    render() {


        window.addEventListener('scroll', function () {
            navSizer();
        });


         function navSizer() {

            let pages = document.getElementsByClassName("pageLinks");
            let headerContainer = document.getElementById("headerContainer");
            let isScrolled = document.body.scrollTop > 80 || document.documentElement.scrollTop > 80;
            let linkContainers = document.getElementsByClassName("linkContainer");


            if (isScrolled) {
                document.getElementById("headerLogo").style.height = "100px";
                headerContainer.style.height = "100px";
                for (let i = 0; i < pages.length; i++) {
                    let page = pages[i];
                    if (page.id === "coatingInfoLink") {
                        page.style.lineHeight = "30px";
                        page.style.paddingTop = "20px";
                    } else {
                        page.style.lineHeight = "100px";
                    }
                    linkContainers[i].style.height = "100px";
                }


            } else {
                document.getElementById("headerLogo").style.height = "130px";
                headerContainer.style.height = "130px";
                for (let i = 0; i < pages.length; i++) {
                    let page = pages[i];
                    if (page.id === "coatingInfoLink") {
                        page.style.lineHeight = "30px";
                        page.style.paddingTop = "35px";
                    } else {
                        page.style.lineHeight = "130px";
                    }
                    linkContainers[i].style.height = "130px";
                }
            }
        }

        return(
            <div id={"headerContainer"}>
                <div id={"imageContainer"}>
                   <a href={"/"}>
                        <img id={"headerLogo"} src={logo} alt={"Home"}/>
                    </a>
                </div>
                <div id={'headerLinkContainer'}>
                    <div className={"linkContainer"}>
                        <a className={"pageLinks"} href={"/aboutus"}>
                            About Us
                        </a>
                    </div>
                    <div className={"linkContainer"}>
                        <a id={"coatingInfoLink"} className={"pageLinks"} href={"/coatinginfo"}>
                            Coating <br/> Information
                        </a>
                    </div>
                    <div className={"linkContainer"}>
                        <a className={"pageLinks"} href={"/teknotes"}>
                            Tek Notes
                        </a>
                    </div>
                    <div className={"linkContainer"}>
                        <a className={"pageLinks"} href={"/contactus"}>
                            Contact Us
                        </a>
                    </div>
                    <div className={"linkContainer"}>
                        <a className={"pageLinks"} href={"/careers"}>
                            Careers
                        </a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Header;


