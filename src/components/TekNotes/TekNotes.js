import React, {Component} from 'react';
import Header from "../Header";
import Footer from "../Footer";
import Content from "./components/Content";
import "./TekStyle.css";


class TekNotes extends Component{
    render() {
        return (
            <div>
                <Header/>
                <Content/>
                <Footer />
            </div>
        )
    }
}

export default TekNotes;