import React, { Component, useState } from 'react';
import { Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem, Button, Modal, ModalHeader, ModalBody,
         Row, Col, Label, Container } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Control, LocalForm, Errors} from 'react-redux-form'
import { Loading } from './LoadingComponent';
import {baseUrl} from '../shared/baseUrl';

const required = (val) => val && val.length;
const max_length = (len) => (val) => !(val) || (val.length <= len);
const min_length = (len) => (val) => (val) && (val.length >= len); 

function CommentForm(props) {
    
    const [modal, setModal] = useState(false);

    const toggle = () => setModal(!modal);

    const handleComment = (values) => {
        toggle();
        props.addComment(props.dishId, values.rating, values.name, values.comment)
        // console.log("Current State is: "+ JSON.stringify(values));
        // alert("Current State is: "+ JSON.stringify(values));
    }

        return (
            // React Fragment
            <>
                <Button outline onClick={toggle}>
                    <span className="fa fa-pencil fa-lg fa-fw"></span> Submit Comment
                </Button>

                <Modal isOpen={modal} toggle={toggle}>
                    <ModalHeader toggle={toggle}>Submit Comment</ModalHeader>
                    <ModalBody>
                        <LocalForm onSubmit={(values) => handleComment(values)}>
                            <Container>
                            <Row className="form-group">
                                <Label htmlFor="rating">Rating</Label>
                                
                                <Control.select model=".rating" id="rating" name="rating"
                                            className="form-control">
                                        
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                        <option value="4">4</option>
                                        <option value="5">5</option>

                                </Control.select>
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="name">Name</Label>

                                <Control.text model=".name" id="name" name="name"
                                                className="form-control"
                                                validators={{
                                                    required, min_length: min_length(3), max_length: max_length(15)
                                                }} />

                                <Errors
                                    className="text-danger"
                                    model=".name"
                                    show="touched"
                                    messages={{
                                        required: "Required",
                                        min_length: "Length must be greater than 2 characters",
                                        max_length: "Length must be less than 16 characters"
                                    }}
                                />
                            </Row>

                            <Row className="form-group">
                                <Label htmlFor="comment">Comment</Label>

                                <Control.textarea model=".comment" id="comment" name="comment"
                                                className="form-control" rows="6"/>
                            </Row>

                            <Row className="form-group">
                                <Button type="submit" color="primary">
                                    Submit
                                </Button>
                            </Row>
                            </Container>
                        </LocalForm>
                    </ModalBody>
                </Modal>
            </>
        );
    
}

function RenderDish({dish}) {
    if(dish != null)
        {
            return(
                    <Card>
                        <CardImg width="100%" src={baseUrl + dish.image} alt={dish.name}></CardImg>
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

function RenderComment({comments, addComment, dishId}) {
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
                        <CommentForm 
                            dishId={dishId}
                            addComment={addComment} />
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

        if(props.isLoading) {
            return (
                <div className="container">
                    <div className="row">
                        <Loading />
                    </div>
                </div>
            );
        }
        else if(props.errMess) {
            return (
                <div className="container">
                    <div className="row">
                        <h4>{props.errMess}</h4>
                    </div>
                </div>
            );
        }

        else{
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
                                <RenderComment comments={props.comments} 
                                    addComment={props.addComment}
                                    dishId={props.dish.id} />
                        </div>
                    </div>
                </div>
            );
        }
}

export default Detail;