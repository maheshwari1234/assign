import React from 'react';
import Navbar from "./Navbar"
import { searchByTagAction } from '../Redux/action/searchAction'
import { connect } from "react-redux"
import { Card } from "react-bootstrap";

class Search extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            posts: [],
            fetched: false
        }

        const tag = this.props.match.params.tag
        console.log("tag",tag)
        this.componentDidMount = () => {
            console.log("sear2")

            
            this.props.search_by_tag(tag)


        }

    }

    render() {
        if (this.props.searched) {
            const posts = this.props.searched
            console.log("posts", posts)
            return (
                <React.Fragment>
                    <div className="row">
                        <Card>
                            <div className="offset-2 col-sm-6">
                                <Card.Title>
                                    <h2>{posts.title}</h2>
                                </Card.Title>
                                <Card.Body>
                                    <h5 style={{ justifyContent: "center" }}>{posts.body}</h5>
                                </Card.Body>
                            </div>
                        </Card>

                    </div>
                </React.Fragment>
            )
        }
        else {
            return (
                <h1>not</h1>
            )
        }

    }
}

const mapStateToProps = (state) => {
    console.log("search",state.searchByTag.data)
    return {
        searched: state.searchByTag.data

    }

}

const mapDispatchToProps = (dispatch) => {
    return {
        search_by_tag: (word) => {
            dispatch(searchByTagAction(word))
        }
    }

}


export default connect(mapStateToProps, mapDispatchToProps)(Search)