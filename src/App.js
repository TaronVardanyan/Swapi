import React, { Component } from 'react';
import { BrowserRouter,Switch, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import Content from './components/Content';
import Detail from './components/Detail';

let pathString = window.location.href;

if(pathString.split(":")[0] === "https"){
    window.location.assign(window.location.href.replace("https", "http"));
}

class App extends Component {
  render() {
    return (
        <BrowserRouter>
            <div className="App">
              <Header />
              <Switch>
                  <Route path="/" component={Content} exact />
                  <Route path="/Detail" component={Detail} exact />
              </Switch>
            </div>
        </BrowserRouter>
    );
  }
}

export default App;
