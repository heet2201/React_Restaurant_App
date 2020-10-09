import React, { Component } from 'react';
import Main from './components/MainComponent'
import './App.css';

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
      <div>
        <Main />
      </div>
    );
  }
}

export default App;
