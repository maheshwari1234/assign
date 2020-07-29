import React, { useState } from 'react';
import { Redirect } from "react-router-dom";
import { Navbar, Nav, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';
import { logoutAction } from '../Redux/action/Loginaction';
import { useDispatch, useSelector } from 'react-redux';

console.log("navbar2")

const Navbarr = () => {
    const [inputs, setInputs] = useState({});
    const [name,setName]=useState({submitted:false,clicked:false})
    const [categ,setCat]=useState('')

    const isLogged = useSelector((state) => state.login.isLogged)
    const isLogRegister = useSelector((state) => state.register.isLogged)
    const dispatch = useDispatch();

    const handleChange = (event) => {
        event.persist();
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    }
    const submit = () => {        
           setName({submitted:true})
           
 
    }

    const category = (cat) => {
        console.log("cat",cat)
        setCat(cat)
        setName({clicked:true})
    }

    if(name.submitted){
        const word=inputs.word
        return <Redirect to={`/search/${word}`} />
    }

    if(name.clicked){
        console.log("",categ)
        const cat=categ
        console.log("cat in click",cat)
        return <Redirect to={`/t/${cat}`} />
    }

    return (
        <React.Fragment>
            <Navbar bg="secondary" variant="dark">
                <Form inline>
                    <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleChange} name="word" />
                    <Button variant="outline-light" onClick={submit}>Search</Button>
                </Form>
                <Nav className="mr-auto">
                    <NavDropdown title="Posts by category" >
                        <NavDropdown.Item onClick={() => { category("React") }} value="React">React</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => { category("Javascript") }} value="Javascript">Javascript</NavDropdown.Item>
                        <NavDropdown.Item onClick={() => { category("Bootstrap") }} value="Bootstrap">Bootstrap</NavDropdown.Item>
                    </NavDropdown>
                </Nav>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        {(isLogged || isLogRegister) ? <Nav.Item><Nav.Link href="/new" style={{ color: "yellow" }}>Write a Post</Nav.Link></Nav.Item> : null}
                        {(isLogged || isLogRegister) ?
                            <Button variant="warning" onClick={dispatch(logoutAction())}>Logout</Button> :
                            <Nav.Item><Nav.Link href="/login" style={{ color: "yellow" }}>Login</Nav.Link></Nav.Item>
                        }

                    </Nav>
                </Navbar.Collapse>

            </Navbar>
        </React.Fragment>
    )

}
export default Navbarr;
