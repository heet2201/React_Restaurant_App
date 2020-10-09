import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap';

class Detail extends Component {
    
    renderComments(dish) {
        if(dish != null)
        {
            const ret = dish.comments.map((comment) => {
                return(
                        <li key={comment.id}>
                            <div>
                                <p>{comment.comment}</p>
                                <p>-- {comment.author}, {new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short', day: '2-digit'}).format(new Date(Date.parse(comment.date))) }</p>
                                <br />
                            </div>
                        </li>
                );
            });

            return(
                <div>
                    <h2><strong>Comments</strong></h2>
                    <br />
                    <ul className="list-unstyled">
                        {ret}
                    </ul>
                </div>
            );
        }
        else
        {
            return(
                <div></div>
            );
        }
    }

    renderDish(dish) {
        if(dish != null)
        {
            return(
                    <Card>
                        <CardImg width="100%" src={dish.image} alt={dish.name}></CardImg>
                        <CardBody>
                            <CardTitle>{dish.name}</CardTitle>
                            <CardText>{dish.description}</CardText>
                        </CardBody>
                    </Card>
            );
        }
        else
        {
            return(
                <div></div>
            );
        }
    }

    render() {

        console.log("DishDetail Componenet render is invoked");

        return (
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                            {this.renderDish(this.props.selectedDish)}
                        </div>
                        <div className="col-12 col-md-5">
                            {this.renderComments(this.props.selectedDish)}
                    </div>
                </div>
            </div>
        );
    }
}

export default Detail;