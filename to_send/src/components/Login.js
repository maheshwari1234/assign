import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form } from 'react-bootstrap';
import { Lock } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { loginAction } from '../Redux/action/Loginaction';
import { connect } from 'react-redux';
import Navbar from './Navbar'

class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            form: {
                email: "",
                password: ""
            },
            error: {
                emailError: "",
                passwordError: ""
            },
            Valid: {
                emailValid: false,
                passwordValid: false,
                button: false
            },
            successMessage: "",
            errorMessage: "",
            logged: false
        }
    }

    store = (key, value) => {
        localStorage.setItem(key, value)
    }
    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({ form: { ...this.state.form, [name]: value } })
        this.validateForm(name, value)
    }

    validateForm = (name, value) => {
        var { Valid } = this.state;
        var { error } = this.state;
        switch (name) {
            case "email":
                let emailRegex = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
                if (value === "") {
                    error.emailError = "Please enter the EmailId"
                    Valid.emailValid = false
                }
                else if (emailRegex.test(value)) {
                    error.emailError = ""
                    Valid.emailValid = true
                }
                else {
                    error.emailError = "Please enter the valid EmailId"
                    Valid.emailValid = false

                }

                break
            case "password":
                let passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
                if (value === "") {
                    error.passwordError = "Please enter the password"
                    Valid.passwordValid = false
                }
                else if (!(passwordRegex.test(value))) {
                    error.passwordError = "Password should contain min 8 characters including uppercase,lowercase,special character and number"
                    Valid.passwordValid = false
                }
                else {
                    error.passwordError = " "
                    Valid.passwordValid = true

                }
                break
            default:
                break;
        }

        Valid.button = Valid.emailValid && Valid.passwordValid
        this.setState({ Valid: Valid })
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const email = this.state.form.email
        const password = this.state.form.password
        this.props.login(email, password)


    }

    render() {
        const { form } = this.state

        return (

            <React.Fragment>
                <Navbar />
                <div className="row">
                    <div className="col-md-4 offset-4">
                        <div className="card mt-5" >
                            <div className="card-body">
                                <center><Lock style={{ color: 'black', fontSize: '35' }} /></center>

                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group margin="normal">
                                        <Form.Label>Email<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="email" placeholder="Enter email" name="email" id="Email"
                                            onChange={this.handleChange} value={form.email} />
                                        <span className="text-danger">{this.state.error.emailError}</span>
                                    </Form.Group>

                                    <Form.Group margin="normal">
                                        <Form.Label>Password<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="password" placeholder="Password" name="password" id="Password"
                                            onChange={this.handleChange} value={form.password} />
                                        <span className="text-danger">{this.state.error.passwordError}</span>
                                    </Form.Group>

                                    <Button variant="primary" type="submit" disabled={!this.state.Valid.button} className="btn btn-block">
                                        Login</Button>
                                    <span className="text-danger">{this.state.errorMessage}</span>
                                    <span className="text-success" style={{ fontSize: 20 }}>{this.state.successMessage}</span>
                                </Form>
                                <div>Don't have an Account?</div>
                                <Link to="/register" style={{ color: 'blue' }}><center> Sign Up or Create an Account</center></Link>

                            </div>
                        </div>
                    </div>
                </div>


            </React.Fragment>


        )
    }
}


const mapStateToProps = (state) => {
    return {
        isLogged: state.login.isLogged
    }
}


const mapDispatchToProps = (dispatch) => {
    return {
        login: (username, password) => {
            dispatch(loginAction(username, password))

        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Login);