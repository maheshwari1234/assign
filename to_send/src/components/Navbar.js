import React from 'react';
import { Redirect } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { connect } from 'react-redux'
import { logoutAction } from '../Redux/action/Loginaction'

class Navbarr extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            word: "",
            clicked: false,
        }
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({ ...this.state, [name]: value })
    }

    submit = () => {
        this.setState({ clicked: true })
    }

    logout = () => {
        this.props.logout()
    }
    render() {
        if (this.state.clicked) {
            const word = this.state.word
            return <Redirect to={`/search/${word}`} />
        }
        return (
            <React.Fragment>
                <Navbar bg="secondary" variant="dark">
                    <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={this.handleChange} name="word" />
                        <Button variant="outline-light" onClick={this.submit}>Search</Button>
                    </Form>
                    <Nav className="mr-auto">
                        <NavDropdown title="Posts by category" value={this.state.value}>
                            <NavDropdown.Item href="/t/React" value="React">React</NavDropdown.Item>
                            <NavDropdown.Item href="/t/Javascript" value="Javascript">Javascript</NavDropdown.Item>
                            <NavDropdown.Item href="/t/Bootstrap" value="Bootstrap">Bootstrap</NavDropdown.Item>

                        </NavDropdown>
                    </Nav>
                    <Navbar.Collapse id="basic-navbar-nav">

                        <Nav className="ml-auto">
                            {(this.props.isLogged || this.props.isLogRegister)?<Nav.Item><Nav.Link href="/new" style={{ color: "yellow" }}>Write a Post</Nav.Link></Nav.Item>:null}
                            
                            {(!this.props.isLogged || this.props.isLogRegister)?
                                <Nav.Item><Nav.Link href="/login" style={{ color: "yellow" }}>Login</Nav.Link></Nav.Item> :
                                <Button variant="warning" onClick={this.logout}>Logout</Button>
                            }

                        </Nav>
                    </Navbar.Collapse>

                </Navbar>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("logout",state.login.isLogged)
    return {
        isLogged: state.login.isLogged,
        isLogRegister:state.register.isLogged
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        logout: () => {
            dispatch(logoutAction())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbarr);