import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import Navbar from './Navbar'

class Home extends React.Component {
    render() {
        return (
            <div>
                <Navbar />
                {this.props.posts.map((data) => {
                    return (
                        <div className="row">
                            <Card>
                                <div className="offset-2 col-md-6">
                                    <Card.Title>
                                        <Link to={`/${data.id}/${data.title}`} style={{ color: 'deepblue', fontSize: "20px" }}>{data.title.toUpperCase()}</Link>
                                    </Card.Title>
                                    <Card.Body>
                                        <p>{data.body}</p>
                                    </Card.Body>

                                </div>
                            </Card>
                        </div>
                    )
                })}
            </div>

        )
    }
}


const mapStateToProps = (state) => {
    return {
        posts: state.postred.posts
    }

}
export default connect(mapStateToProps)(Home)