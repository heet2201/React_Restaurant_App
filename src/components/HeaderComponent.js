import React, {Component, Fragment} from 'react';
import { Navbar, NavbarBrand, Nav, NavbarToggler, Collapse, NavItem, Jumbotron, 
         Button, Modal, ModalHeader, ModalBody,
         Form, FormGroup, Input, Label } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component{

    constructor(props){
        super(props);

        this.state= {
            isNavOpen: false, 
            isModalOpen: false
        };

        this.togglerNav = this.togglerNav.bind(this);
        this.toggleModal = this.toggleModal.bind(this);
        this.handleLogin = this.handleLogin.bind(this);
    }

    togglerNav() {
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }

    toggleModal() {
        this.setState({
            isModalOpen: !this.state.isModalOpen
        });
    }

    handleLogin(event) {
        this.toggleModal();
        alert("Username: "+this.username.value+" Password: "+this.password.value
                + " Remember: "+ this.remember.checked);
        event.prevetDefault();
    }

    render() {
        return(
            // React Fragment (Short Form)
            // Or
            //<React.Fragment></React.Fragment>
            <>
                <Navbar dark expand="md" fixed="top">
                    <div className="container">
                        <NavbarToggler onClick={this.togglerNav} />

                        <NavbarBrand className="mr-auto" href="/">
                            <img src="assets/images/logo.png" height="30" width="41"
                            alt="Ristorante Con Fusion" />
                        </NavbarBrand>

                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"> Home</span>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <span className="fa fa-info fa-lg"> About Us</span>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/menu">
                                        <span className="fa fa-list fa-lg"> Menu</span>
                                    </NavLink>
                                </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" to="/contactus">
                                        <span className="fa fa-address-card fa-lg"> Contact Us</span>
                                    </NavLink>
                                </NavItem>
                            </Nav>

                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button onClick={this.toggleModal} className="LoginButton">
                                        <span className="fa fa-sign-in fa-lg"></span> Login
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
                <Jumbotron>
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Ristorante Con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
                    <ModalHeader toggle={this.toggleModal}>Login</ModalHeader>
                    <ModalBody>
                        <Form onSubmit={this.handleLogin}>
                            <FormGroup>
                                <Label htmlFor="usename">Usename</Label>
                                <Input type="text" id="usename" name="usename"
                                    innerRef={(input) => this.username = input} />
                            </FormGroup>

                            <FormGroup>
                                <Label htmlFor="password">Password</Label>
                                <Input type="password" id="password" name="password"
                                    innerRef={(input) => this.password = input} />
                            </FormGroup>

                            <FormGroup check>
                                <Label check>
                                    <Input type="checkbox" name="remember"
                                        innerRef={(input) => this.remember = input} />
                                    Remember me
                                </Label>
                            </FormGroup>

                            <Button type="submit" value="Submit" className="bg-primary">
                                Login
                            </Button>

                        </Form>
                    </ModalBody>
                </Modal>
            </>
        );
    }
}

export default Header;