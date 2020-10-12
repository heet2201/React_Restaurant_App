import React, { Component } from 'react';
import Menu from './MenuComponent'
import Detail from './DishDetailComponent'
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import './../App.css';
import { DISHES } from './../shared/dishes';
import { COMMENTS } from './../shared/comments';
import { PROMOTIONS } from './../shared/promotions';
import { LEADERS } from './../shared/leaders';

import { Switch, Route, Redirect } from 'react-router-dom';

class Main extends Component {

  constructor(props) {

    console.log("Main Componenet constructor is invoked");
    super(props);

    this.state = {
      dishes: DISHES,
      comments: COMMENTS,
      promotions: PROMOTIONS,
      leaders: LEADERS
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
        <Home dish={this.state.dishes.filter((dish) => dish.featured)[0]}
              promotion={this.state.promotions.filter((promo) => promo.featured)[0]}
              leader={this.state.leaders.filter((leader) => leader.featured)[0]}
        />
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
            <Route exact path="/contactus" component={Contact} />
            <Redirect to="/home" />
          </Switch>
          <Footer />
      </div>
    );
  }
}

export default Main;
