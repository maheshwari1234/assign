import React from "react";
import { Image, Card } from "react-bootstrap";
import axios from 'axios';
import { connect } from 'react-redux'
import { fetch } from '../Redux/action/IndpostAction'

class IndividualPost extends React.Component {
    constructor(props) {
        super(props);
        this.state={
            fetched:false
        }

        const id = this.props.match.params.id
        this.componentDidMount = () => {
            console.log("1")
            this.props.fecthById(id)
            this.setState({fetched:true})


        }
    }
    render() {
        console.log("fetch",this.state.fetched)
      if(this.props.posts){
          const posts=this.props.posts
          console.log("posts",posts)
        return (
            <React.Fragment>
            <div className="row">
                <Card>
                <div className="offset-2 col-sm-6">
                    <Card.Title>
          <h2>{posts.title}</h2>
                    </Card.Title>
                    <Card.Body>
          <h5 style={{justifyContent:"center"}}>{posts.body}</h5>
                    </Card.Body>
                </div>
                </Card>
  
            </div>
          </React.Fragment>
        )
      }
      else{
          return(
              <h1>not</h1>
          )
      }
       
    }
}

const mapStateToProps = (state) => {
    console.log("posts in state3",state.postId.Idposts)
    return {
        posts: state.postId.Idposts
    }

}
const mapDispatchToProps = (dispatch) => {
    return {
        fecthById: (id) => {
            dispatch(fetch(id))
        }
    }
}




export default connect(mapStateToProps, mapDispatchToProps)(IndividualPost)