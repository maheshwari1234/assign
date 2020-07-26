import React from 'react'
import { Button, Form, Navbar, Nav,Image,Card} from 'react-bootstrap'
import '../App.css';
import {NewpostAction} from '../Redux/action/newPostAction'
import {connect} from 'react-redux'

class NewPost extends React.Component {
    constructor(props){
        super(props)
        this.state={
            title:"",
            body:"",
            course:"",
            image:"",
            Brief:"",
            submitted:false
        }
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({ ...this.state, [name]: value } )
    }

    submit=(e)=>{
        e.preventDefault();

    const newData={
        
        "Course":this.state.course,
        "Title":this.state.title,
        "Brief":this.state.Brief,
        "Body":this.state.body,
        "Image":"comman.jpg"
        
    }

    this.props.newData(newData)

    }

    

    render() {
        // const post=this.state
        if(this.state.submitted){
            this.props.history.push("/posts")

        }
        return (
            <React.Fragment>
                <Navbar bg="light" variant="dark">
                    <Navbar.Brand href="/home">
                        <Image src="./logo192.png" style={{ width: 100, marginTop: -7, height: 50 }}  alt="Image not found"/>
                    </Navbar.Brand>
                    <Nav className="mr-auto">
                        <Nav.Link style={{ color: "black", fontSize: "20px" }}>Write a new post</Nav.Link>
                    </Nav>
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ml-auto">
                            <Nav.Item><Nav.Link href="/new" style={{ color: "black" }}>Edit</Nav.Link></Nav.Item>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
                <div className="row">
                    <div className="offset-2 col-sm-6">
                        <Card>
                            <Card.Header>
                                <Form>
                                <Form.Label style={{ fontWeight: "bold", fontSize: "20px"}}>Add Course Name here..</Form.Label>

                                <Form.Control as="textarea" type="text" rows="1" onChange={this.handleChange} name="course"/>

                                </Form>
                            </Card.Header>
                            <Card.Title>
                                <Form style={{ marginLeft: "20px" }}>
                                    <Form.Group>
                                        <Form.Label style={{ fontWeight: "bold", fontSize: "40px", color: "gray" }}>New post title here...</Form.Label>
                                        <Form.Control as="textarea" type="text" rows="2" onChange={this.handleChange} name="title"/>
                                    </Form.Group>

                                    <Form.Group>
                                        <Form.Label style={{ fontWeight: "bold", fontSize: "30px", color: "gray" }}>Brief about new post here..</Form.Label>
                                        <Form.Control as="textarea" type="text" rows="2" onChange={this.handleChange} name="Brief"/>
                                    </Form.Group>

                                    <Form.File
                                        label="Upload Image"
                                        custom 
                                        onChange={this.handleChange} name="image"
                                    />
                                </Form>
                            </Card.Title>
                            <Card.Body>
                                <Form>
                                    <Form.Group>
                                        <Form.Label style={{ fontWeight: "bold", fontSize: "20px" }} onChange={this.handleChange} value={this.state.body} name="body" >Write here Post content here..</Form.Label>
                                        <Form.Control as="textarea" rows="6"  type="text" onChange={this.handleChange} name="body"/>
                                    </Form.Group>
                                </Form>
                            </Card.Body>
                        </Card><br />
                        <Button variant="primary" onClick={this.submit}>Publish</Button>
                    </div>
                </div>
            </React.Fragment>

        )
    }
}

const mapStateToProps=(state)=>{
    console.log("newpost",state.newpost.data)
return{
    newData:state.newpost.data
}
}

const mapDispatchToProps=(dispatch)=>{
    return{
        newData:(data)=>{
dispatch(NewpostAction(data))
        }
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(NewPost)