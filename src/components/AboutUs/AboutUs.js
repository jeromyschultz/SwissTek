import React, {Component} from 'react';
import Header from "../Header";
import Content from "../AboutUs/components/Content";
import Footer from "../Footer";
import "./AboutStyle.css";
import "../AllPages.css";


class AboutUs extends Component{
    render() {
        return (
            <div>
                <Header/>
                <Content />
                <Footer />
            </div>
        )
    }
}

export default AboutUs;