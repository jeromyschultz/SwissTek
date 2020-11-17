import React, {Component} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import Content from "./components/Content";
import "./ContactStyle.css";


class ContactUs extends Component{
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

export default ContactUs;