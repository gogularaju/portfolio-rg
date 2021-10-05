// @flow
import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navigation from './Navigation';
import Jumbotron from './Jumbotron';
import Feed from './Feed';
import data from '../data/data.json';
import './App.css';
import Footer from './footer';

class App extends Component {
  constructor(props) {
    super(props);
    this.state ={
      feeds: [],
    }
  }

  componentWillMount() {
    this.setState({
      feeds: data,
    })
  };

  componentDidMount () {
    window.onscroll = () => {
      this.scrollFunction()
    };
  }


  scrollFunction = () => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) {
      if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        document.getElementById("profile-photo").style.width = "60px";
        document.getElementById("profile-photo").style.height = "60px";
        document.getElementById("header").style.flexDirection = "row-reverse";
        document.getElementById("header").style.justifyContent = "space-evenly";
        document.getElementById("nav-section").style.alignItems = "center";
        document.getElementById("profileTitle").style.fontSize = "12px";
        document.getElementById("profileSection").style.flexDirection = "row";
       
      } else {
        document.getElementById("profile-photo").style.width = "112px";
        document.getElementById("profile-photo").style.height = "112px";
        document.getElementById("header").style.flexDirection = "column";
        document.getElementById("header").style.justifyContent = "center";
        document.getElementById("nav-section").style.alignItems = "unset";
        document.getElementById("profileTitle").style.fontSize = "24px";
        document.getElementById("profileSection").style.flexDirection = "column";
        
      }
    }
    
  }


  render() {
    return (
      <Router>
        <div className="main-container">
          <Navigation />
          <Jumbotron title={this.state.jumbotronTitle}/>
          <Switch>
            {/* <Route path="/contact" component={Contact}/> */}
            {/* <Route path="/about" component={About}/> */}
            <Route exact path="/" render={(props) => (
              <Feed feeds={this.state.feeds} />
            )} />
          </Switch>
          <Footer name={this.state.name}/>
        </div>
      </Router>
    )
  }
}

export default App;
