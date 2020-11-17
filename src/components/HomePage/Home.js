import React, {Component} from 'react';
import Header from '../Header';
import Content from "./components/Content";
import Footer from "../Footer";



class Home extends Component{
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

export default Home;

