import React, { Component } from 'react';
import Menu from './MenuComponent'
import Detail from './DishDetailComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import './../App.css';
import {DISHES} from './../shared/dishes'
import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {

    console.log("Main Componenet constructor is invoked");
    super(props);

    this.state = {
      dishes: DISHES,
      //selectedDish: null
    };
  }

  componentDidMount() {
    console.log("Main Componenet componenetDidMount is invoked");
  } 

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {

    const HomePage = () => {
      return (
        <Home />
      );
    }
    
    console.log("Main Componenet render is invoked");
    return (
      <div>
        <Header />
        {/* <Menu dishes={this.state.dishes} 
          onClick={ (dishId) => this.onDishSelect(dishId) }/>
        <Detail 
          selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} /> */}

          <Switch>
            <Route path="/home" component={HomePage} />
            <Route exact path="/menu" component={() => <Menu dishes={this.state.dishes} />} />
            <Redirect to="/home" />
          </Switch>
          <Footer />
      </div>
    );
  }
}

export default Main;
