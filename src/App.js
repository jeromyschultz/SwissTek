import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,

} from "react-router-dom";
import './App.css';
import Home from "./components/HomePage/Home";
import AboutUs from "./components/AboutUs/AboutUs";
import CoatingInfo from "./components/CoatingInfo/CoatingInfo";
import TekNotes from "./components/TekNotes/TekNotes";
import ContactUs from "./components/ContactUs/ContactUs";
import Careers from "./components/Careers/Careers";
import AOS from "aos";


class App extends Component {
  render() {
      AOS.init({
              once: true,
            duration: 1000
          }
      );

      return (
        <Router>
            <div className="App">
            <Switch>
                <Route path={"/"} exact component={Home}/>
                <Route path={"/aboutus"} exact component={AboutUs}/>
                <Route path={"/coatinginfo"} exact component={CoatingInfo}/>
                <Route path={"/teknotes"} exact component={TekNotes}/>
                <Route path={"/contactus"} exact component={ContactUs}/>
                <Route path={"/careers"} exact component={Careers}/>
            </Switch>
            </div>
        </Router>
    );
  }
}





export default App;
