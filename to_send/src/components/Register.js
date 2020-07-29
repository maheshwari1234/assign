import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form } from 'react-bootstrap';
import { Lock } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { registerAction } from '../Redux/action/RegisterAction';

import { useSelector, useDispatch } from 'react-redux'

function LoginForm(props) {
  const [inputs, setInputs] = useState({});
  const isLogged = useSelector((state) => state.register.isLogged)
  const success = useSelector((state) => state.register.success)

  const error = useSelector((state) => state.register.error)
  console.log("error", error)
  console.log("success", success)
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    validateForm(event.target.name, event.target.value)

  }

  const validateForm = (name, value) => {
    switch (name) {
        case "userName":
            let Name = new RegExp(/^[a-zA-Z]{4,}$/);
            if (value === "") {
                inputs.userNameError = "Please enter the Username"
                inputs.userNameValid = false
            }
            else if (Name.test(value)) {
                inputs.userNameError = ""
                inputs.userNameValid = true
            }
            else {
                inputs.userNameError = "Username should contain minimum 4 characters"
                inputs.userNameValid = false

            }

            break

        case "email":
            let emailId = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
            if (value === "") {
                inputs.emailError = "Please enter the Email Id"
                inputs.emailValid = false
            }
            else if (emailId.test(value)) {
                inputs.emailError = ""
                inputs.emailValid = true
            }
            else {
                inputs.emailError = "Please enter the valid Email Id"
                inputs.emailValid = false

            }

            break

        case "password":
            let pass = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
            if (value === "") {
                inputs.passwordError = "Please enter the password"
                inputs.passwordValid = false
            }
            else if (!(pass.test(value))) {
                inputs.passwordError = "Password should contain min 8 characters including uppercase,lowercase,special character and number"
                inputs.passwordValid = false
            }
            else {
                inputs.passwordError = " "
                inputs.passwordValid = true

            }
            break

        case "confirmPassword":
            if (value === "") {
                inputs.confirmPasswordError = "Please confirm the password"
                inputs.confirmPasswordValid = false
            }
            else if (inputs.password !== value) {
                inputs.confirmPasswordError = "Confirm Password should be same as the Password"
                inputs.confirmPasswordValid = false
            }
            else {
                inputs.confirmPasswordError = " "
                inputs.confirmPasswordValid = true

            }
            break

        default:
            break;
    }

    const button = inputs.userNameValid && inputs.emailValid && inputs.passwordValid && inputs.confirmPasswordValid
    setInputs[button] = button
}


  const handleSubmit = e => {
    e.preventDefault();
    const newUserDetails = {
        userName: inputs.userName,
        email: inputs.email,
        password: inputs.password
    }
    console.log("submitted", inputs.username, inputs.password);
    dispatch(registerAction(newUserDetails))
   
    
  };
  if(success!=undefined){
    props.history.push("/")
  }

  return (
    
    <React.Fragment>
                {/* <Navbar/> */}
                <div className="row">
                    <div className="col-md-4 offset-4">
                        <div className="card mt-5" >
                            <div className="card-body">
                                <h2 style={{ textAlign: 'center' }}>Sign Up</h2>

                                <Form onSubmit={handleSubmit}>

                                    <Form.Group margin="normal">
                                        <Form.Label>UserName<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="text" placeholder="Enter your name" name="userName" id="UserName"
                                            onChange={handleInputChange} value={inputs.userName} />
                                        <span className="text-danger">{inputs.userNameError}</span>
                                    </Form.Group>



                                    <Form.Group margin="normal">
                                        <Form.Label>Email<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="email" placeholder="Enter your email" name="email" id="Email"
                                            onChange={handleInputChange} value={inputs.email} />
                                        <span className="text-danger">{inputs.emailError}</span>
                                    </Form.Group>

                                    <Form.Group margin="normal">
                                        <Form.Label>Password<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="password" placeholder="Password" name="password" id="Password"
                                            onChange={handleInputChange} value={inputs.password} />
                                        <span className="text-danger">{inputs.passwordError}</span>
                                    </Form.Group>

                                    <Form.Group margin="normal">
                                        <Form.Label>Confirm Password<span className="text-danger">*</span></Form.Label>
                                        <Form.Control type="password" placeholder="Confirm Password" name="confirmPassword" id="ConfirmPassword"
                                            onChange={handleInputChange} value={inputs.confirmPassword} />
                                        <span className="text-danger">{inputs.confirmPasswordError}</span>
                                    </Form.Group>
                                    <Button variant="success" type="submit" disabled={inputs.button} className="btn btn-block">
                                        Sign Up</Button>
                                        <span className="text-success">{success != undefined ? success : null}</span>
                <span className="text-danger">{error != '' ? error : null}</span>
                                </Form>
                            </div>
                        </div>
                    </div>
                </div>


            </React.Fragment>



  )
}

export default LoginForm
