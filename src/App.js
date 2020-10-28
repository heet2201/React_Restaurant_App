import React, { Component } from 'react';
import Main from './components/MainComponent'
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ConfigureStore } from './redux/configureStore';

const store = ConfigureStore();

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
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Main />
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
