import React, { Component } from 'react';
import Main from './components/MainComponent'
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {

  constructor(props) {
    console.log("App Componenet constructor is invoked");
    super(props);

  }

  componentDidMount() {
    console.log("App Componenet componenetDidMount is invoked");
  }

  render() {
    console.log("App Componenet render is invoked");
    return (
      <BrowserRouter>
        <div>
          <Main />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
