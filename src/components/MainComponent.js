import React, { Component } from 'react';
import Menu from './MenuComponent'
import Detail from './DishDetailComponent'
import Contact from './ContactComponent';
import Header from './HeaderComponent';
import Footer from './FooterComponent';
import Home from './HomeComponent';
import About from './AboutUs';
import './../App.css';
import { postComment, fetchDishes, fetchComments, fetchPromos } from '../redux/ActionCreators';
// import { DISHES } from './../shared/dishes';
// import { COMMENTS } from './../shared/comments';
// import { PROMOTIONS } from './../shared/promotions';
// import { LEADERS } from './../shared/leaders';

import { Switch, Route, Redirect, withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { actions } from 'react-redux-form';

const mapStateToProps = state => {
  return{
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = (dispatch) => ({
  postComment: (dishId, rating, author, comment) => dispatch(postComment(dishId, rating, author, comment)),
  fetchDishes: () => {dispatch(fetchDishes())},
  resetFeedbackForm: () => { dispatch(actions.reset('feedback')) },
  fetchComments: () => {dispatch(fetchComments())},
  fetchPromos: () => {dispatch(fetchPromos())}
});

class Main extends Component {

  constructor(props) {

    console.log("Main Componenet constructor is invoked");
    super(props);

  }

  componentDidMount() {
    this.props.fetchDishes();
    this.props.fetchComments();
    this.props.fetchPromos();
  }

  onDishSelect(dishId) {
    this.setState({ selectedDish: dishId});
  }

  render() {
    const HomePage = () => {
      return (
        <Home dish={this.props.dishes.dishes.filter((dish) => dish.featured)[0]}
              dishesLoading={this.props.dishes.isLoading}
              dishesErrMess={this.props.dishes.errmess}
              promotion={this.props.promotions.promotions.filter((promo) => promo.featured)[0]}
              promosLoading={this.props.promotions.isLoading}
              promosErrMess={this.props.promotions.errmess}
              leader={this.props.leaders.filter((leader) => leader.featured)[0]}
        />
      );
    }

    const DishWithId = ({match}) => {
      console.log(this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0])  
      return (
        <Detail dish={this.props.dishes.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10))[0]}
                isLoading={this.props.dishes.isLoading}
                errMess={this.props.dishes.errmess} 
                comments={this.props.comments.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10))}
                commentsErrMess={this.props.comments.errmess} 
                postComment={this.props.postComment}        
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
            <Route exact path="/menu" component={() => <Menu dishes={this.props.dishes} />} />
            <Route path="/menu/:dishId" component={DishWithId} />
            <Route exact path="/contactus" component={() => <Contact resetFeedbackForm={this.props.resetFeedbackForm}/>} />
            <Route path="/aboutus" component={() => <About leaders={this.props.leaders} />} />
            <Redirect to="/home" />
          </Switch>
          <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
