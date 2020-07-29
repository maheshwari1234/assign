import React, { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { Button, Form } from 'react-bootstrap';
import { Lock } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';
import { loginAction } from '../Redux/action/Loginaction';
import { useSelector, useDispatch } from 'react-redux'

function LoginForm(props) {
  const [inputs, setInputs] = useState({});
  const [button,setButton]=useState(false)

  const isLogged = useSelector((state) => state.login.isLogged)
  const success = useSelector((state) => state.login.success)
  const error = useSelector((state) => state.login.error)

  console.log("error", error)
  console.log("success", success)
  console.log("logged",isLogged)
  const dispatch = useDispatch();

  const handleInputChange = (event) => {
    event.persist();
    setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    validateForm(event.target.name, event.target.value)

  }

  const validateForm = (name, value) => {
    switch (name) {
      case "username":
        let emailRegex = new RegExp(/^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/);
        if (value === "") {
          inputs.emailError = "Please enter the EmailId"
          inputs.emailValid = false
        }
        else if (emailRegex.test(value)) {
          inputs.emailError = ""
          inputs.emailValid = true
        }
        else {
          inputs.emailError = "Please enter the valid EmailId"
          inputs.emailValid = false

        }

        break
      case "password":
        let passwordRegex = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/);
        if (value === "") {
          inputs.passwordError = "Please enter the password"
          inputs.passwordValid = false
        }
        else if (!(passwordRegex.test(value))) {
          inputs.passwordError = "Password should contain min 8 characters including uppercase,lowercase,special character and number"
          inputs.passwordValid = false
        }
        else {
          inputs.passwordError = " "
          inputs.passwordValid = true

        }
        break
      default:
        break;
    }
    console.log("valid",inputs.emailValid,inputs.passwordValid)

    const buttonValid = inputs.emailValid && inputs.passwordValid
    setButton(buttonValid)
  }

  const handleSubmit = e => {
    e.preventDefault();
    console.log("submitted", inputs.username, inputs.password);
    dispatch(loginAction(inputs.username, inputs.password))
   
    
  };
  if(success!=undefined){
    props.history.push("/")
  }

  return (
    
    <React.Fragment>
      <div className="row">
        <div className="col-md-4 offset-4">
          <div className="card mt-5" >
            <div className="card-body">
              <center><Lock style={{ color: 'black', fontSize: '35' }} /></center>
              <Form onSubmit={handleSubmit}>
                <Form.Group margin="normal">
                  <Form.Label>Email<span className="text-danger">*</span></Form.Label>
                  <Form.Control type="email" placeholder="Enter email" name="username" id="Email"
                    onChange={handleInputChange} value={inputs.username} />
                  <span className="text-danger">{inputs.emailError}</span>

                </Form.Group>
                <Form.Group margin="normal">
                  <Form.Label>Password<span className="text-danger">*</span></Form.Label>
                  <Form.Control type="password" placeholder="Password" name="password" id="Password"
                    onChange={handleInputChange} value={inputs.password} />
                  <span className="text-danger">{inputs.passwordError}</span>
                </Form.Group>

                <Button variant="primary" type="submit" disabled={button} className="btn btn-block">
                  Login</Button>
                <span className="text-success">{success != undefined ? success : null}</span>
                <span className="text-danger">{error != '' ? error : null}</span>

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

export default LoginForm
