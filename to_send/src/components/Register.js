import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form } from 'react-bootstrap';
import { registerAction } from '../Redux/action/RegisterAction';
import {connect} from 'react-redux'

class Register extends React.Component {
    constructor() {
        super();
        this.state = {
            form: {
                userName: "",
                email: "",
                password: "",
                confirmPassword: "",
            },
            error: {
                userNameError: "",
                emailError: "",
                passwordError: "",
                confirmPasswordError: ""
            },
            Valid: {
                userNameValid: false,
                emailValid: false,
                passwordValid: false,
                confirmPasswordValid: false,
                button: false
            },
            successMessage: "",
            errorMessage: ""
        }
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
            case "userName":
                let Name = new RegExp(/^[a-zA-Z]{4,}$/);
                if (value === "") {
                    error.userNameError = "Please enter the Username"
                    Valid.userNameValid = false
                }
                else if (Name.test(value)) {
                    error.userNameError = ""
                    Valid.userNameValid = true
                }
                else {
                    error.userNameError = "Username should contain minimum 4 characters"
                    Valid.userNameValid = false

                }

                break

            case "email":
                let emailId = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
                if (value === "") {
                    error.emailError = "Please enter the Email Id"
                    Valid.emailValid = false
                }
                else if (emailId.test(value)) {
                    error.emailError = ""
                    Valid.emailValid = true
                }
                else {
                    error.emailError = "Please enter the valid Email Id"
                    Valid.emailValid = false

                }

                break

            case "password":
                let pass = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
                if (value === "") {
                    error.passwordError = "Please enter the password"
                    Valid.passwordValid = false
                }
                else if (!(pass.test(value))) {
                    error.passwordError = "Password should contain min 8 characters including uppercase,lowercase,special character and number"
                    Valid.passwordValid = false
                }
                else {
                    error.passwordError = " "
                    Valid.passwordValid = true

                }
                break

            case "confirmPassword":
                if (value === "") {
                    error.confirmPasswordError = "Please confirm the password"
                    Valid.confirmPasswordValid = false
                }
                else if (this.state.form.password !== value) {
                    error.confirmPasswordError = "Confirm Password should be same as the Password"
                    Valid.confirmPasswordValid = false
                }
                else {
                    error.confirmPasswordError = " "
                    Valid.confirmPasswordValid = true

                }
                break

                default:
                    break;
        }

        Valid.button = Valid.userNameValid && Valid.emailValid && Valid.passwordValid && Valid.confirmPasswordValid
        this.setState({ Valid: Valid })
    }

    handleSubmit = (e) => {
        const newUserDetails={
            userName:this.state.form.userName,
            email:this.state.form.email,
            password:this.state.form.password
        }
        e.preventDefault();
        this.props.register()

    }
    

    render() {
        const { form } = this.state
        return (
            <React.Fragment>
                <div className="row">
                    <div className="col-md-4 offset-4">
                        <div className="card mt-5" >
                            <div className="card-body">
                                <h2 style={{ textAlign: 'center' }}>Sign Up</h2>

                                <Form onSubmit={this.handleSubmit}>

                                    <Form.Group margin="normal">
                                        <Form.Label>UserName<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="text" placeholder="Enter your name" name="userName" id="UserName"
                                            onChange={this.handleChange} value={form.userName} />
                                        <span className="text-danger">{this.state.error.userNameError}</span>
                                    </Form.Group>



                                    <Form.Group margin="normal">
                                        <Form.Label>Email<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="email" placeholder="Enter your email" name="email" id="Email"
                                            onChange={this.handleChange} value={form.email} />
                                        <span className="text-danger">{this.state.error.emailError}</span>
                                    </Form.Group>

                                    <Form.Group margin="normal">
                                        <Form.Label>Password<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="password" placeholder="Password" name="password" id="Password"
                                            onChange={this.handleChange} value={form.password} />
                                        <span className="text-danger">{this.state.error.passwordError}</span>
                                    </Form.Group>

                                    <Form.Group margin="normal">
                                        <Form.Label>Confirm Password<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" id="ConfirmPassword"
                                            onChange={this.handleChange} value={form.confirmPassword} />
                                        <span className="text-danger">{this.state.error.confirmPasswordError}</span>
                                    </Form.Group>


                                    <Button variant="success" type="submit" disabled={!this.state.Valid.button} className="btn btn-block">
                                        Sign Up</Button>
                                    <span className="text-danger">{this.state.errorMessage}</span>
                                    <span className="text-success" style={{fontSize:20}}>{this.state.successMessage}</span>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>


            </React.Fragment>


        )
    }
}

const mapStateToProps=(state)=>{
    return{
       register:state.register.isLogged
    }
}

const mapDispatchToProps=(dispatch)=>{
    return{
        register:()=>{
            dispatch(registerAction())
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Register);