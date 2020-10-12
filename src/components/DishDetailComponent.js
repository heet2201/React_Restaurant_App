import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

function RenderDish({dish}) {
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

function RenderComment({comments}) {
    if(comments != null)
        {
            const ret = comments.map((comment) => {
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

function Detail(props) {

        console.log("DishDetail Componenet render is invoked");

        return (
            <div className="container">
                <div className="row">
                    <Breadcrumb>
                        <BreadcrumbItem>
                            <Link to="/home">Home</Link>
                        </BreadcrumbItem>

                        <BreadcrumbItem>
                            <Link to="/menu">Menu</Link>
                        </BreadcrumbItem>
                        
                        <BreadcrumbItem active>{props.dish.name}</BreadcrumbItem>
                    </Breadcrumb>

                    <div className="col-12">
                        <h3>{props.dish.name}</h3>
                        <hr />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-5 m-1">
                            <RenderDish dish={props.dish} />
                        </div>
                        <div className="col-12 col-md-5">
                            <RenderComment comments={props.comments} />
                    </div>
                </div>
            </div>
        );
}

export default Detail;