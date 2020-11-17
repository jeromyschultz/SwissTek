import React, {Component} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import Content from "../CoatingInfo/components/Content";
import "./CoatingInfoStyle.css";
import "../AllPages.css";

class CoatingInfo extends Component{
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

export default CoatingInfo;