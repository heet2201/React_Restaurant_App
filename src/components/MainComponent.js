import React, { Component } from 'react';
import Menu from './MenuComponent'
import Detail from './DishDetailComponent'
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import './../App.css';
import {DISHES} from './../shared/dishes'

class Main extends Component {

  constructor(props) {

    console.log("Main Componenet constructor is invoked");
    super(props);

    this.state = {
      dishes: DISHES,
      selectedDish: null
    };
  }

  componentDidMount() {
    console.log("Main Componenet componenetDidMount is invoked");
  } 

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    console.log("Main Componenet render is invoked");
    return (
      <div>
        <Header />
        <Menu dishes={this.state.dishes} 
          onClick={ (dishId) => this.onDishSelect(dishId) }/>
        <Detail 
          selectedDish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
          <Footer />
      </div>
    );
  }
}

export default Main;
