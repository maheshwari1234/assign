import React from 'react'
import Navbar from './Navbar'
import Post from './post'
import {useSelector} from 'react-redux'

function Home(){
    console.log("functional com in home")
    const posts=useSelector(state=>state.postred.posts)
    const postArray = posts.map((post) => {
        return <Post id={post.id} Title={post.Title} Brief={post.Brief} Image={post.Image} />
    })
    return (
        <React.Fragment>
            <Navbar/>
            <div>
                {postArray}
            </div>
        </React.Fragment>
    )

}
       
    
export default Home
