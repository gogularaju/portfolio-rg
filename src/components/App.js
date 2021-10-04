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
