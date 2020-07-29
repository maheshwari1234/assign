import React,{useState} from 'react'
import { Button, Form, Navbar, Nav, Image, Card } from 'react-bootstrap'
import '../App.css';
import { NewpostAction } from '../Redux/action/newPostAction'
import { useSelector, useDispatch } from 'react-redux';

const NewPost=(props)=>{

    const [inputs, setInputs] = useState({});
    const newDataSubmitted= useSelector((state) => state.newpost.data)
    const dispatch = useDispatch();

    const handleChange = (event) => {
        event.persist();
        setInputs(inputs => ({ ...inputs, [event.target.name]: event.target.value }));
    
      }

      const submit=(e)=>{
        e.preventDefault();

        const newData = {

            "Course": inputs.course,
            "Title": inputs.title,
            "Brief": inputs.Brief,
            "Body": inputs.body,
            "Image": "comman.jpg"

        }
        dispatch(NewpostAction(newData))


      }
      if(newDataSubmitted){
        props.history.push("/")
      }

    return(
        <React.Fragment>
                <Navbar bg="light" variant="dark">
                    <Navbar.Brand href="/home">
                        <Image src="./logo192.png" style={{ width: 100, marginTop: -7, height: 50 }} alt="Image not found" />
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        {/* <Nav.Link style={{ color: "black", fontSize: "20px" }} href="/home">Home</Nav.Link> */}
                        <Nav.Link style={{ color: "black", fontSize: "20px" }}>Write a new post</Nav.Link>
                    </Nav>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item><Nav.Link href="/home" style={{ color: "black" }}>Home</Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar><br />
                <div className="row">
                    <div className="offset-2 col-sm-6">
                        <Card>
                            <Card.Header>
                                <Form>
                                    <Form.Label style={{ fontWeight: "bold", fontSize: "20px" }}>Add Course Name here..</Form.Label>

                                    <Form.Control as="textarea" type="text" rows="1" onChange={handleChange} name="course" />

                                </Form>
                            </Card.Header>
                            <Card.Title>
                                <Form style={{ marginLeft: "20px" }}>
                                    <Form.Group>
                                        <Form.Label style={{ fontWeight: "bold", fontSize: "40px", color: "gray" }}>New post title here...</Form.Label>
                                        <Form.Control as="textarea" type="text" rows="2" onChange={handleChange} name="title" />
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label style={{ fontWeight: "bold", fontSize: "30px", color: "gray" }}>Brief about new post here..</Form.Label>
                                        <Form.Control as="textarea" type="text" rows="2" onChange={handleChange} name="Brief" />
                                    </Form.Group>

                                    <Form.File
                                        label="Upload Image"
                                        custom
                                        onChange={handleChange} name="image"
                                    />
                                </Form>
                            </Card.Title>
                            <Card.Body>
                                <Form>
                                    <Form.Group>
                                        <Form.Label style={{ fontWeight: "bold", fontSize: "20px" }} onChange={handleChange} value={inputs.body} name="body" >Write here Post content here..</Form.Label>
                                        <Form.Control as="textarea" rows="6" type="text" onChange={handleChange} name="body" />
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card><br />
                        <Button variant="primary" onClick={submit}>Publish</Button>
                    </div>
                </div>
            </React.Fragment>

    )
    
}


export default NewPost
