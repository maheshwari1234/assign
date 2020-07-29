import React,{ useEffect} from 'react';
import Navbar from "./Navbar"
import { searchByWordAction} from '../Redux/action/searchAction'
import Post from "./post"
import {useSelector,useDispatch} from 'react-redux'

const SearchByWord=(props)=>{
    const searched=useSelector((state)=>state.searchByTag.data)
    const dispatch=useDispatch();

    const word = props.match.params.word
    useEffect(() => {
       dispatch(searchByWordAction(word))
     }, []);

     if(searched!=undefined){
         const postArray = searched.map((post) => {
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
     else{
         return<h1>not search</h1>
     }

}

export default SearchByWord
