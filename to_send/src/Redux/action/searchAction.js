import { SEARCH_BY_TAG } from "./types";
import axios from 'axios'

export const searchByTag=(data)=>{
    return{
        type:SEARCH_BY_TAG,
        payload:data
    }
}

export const searchByTagAction=(word)=>{
    console.log("word",word)
    return function(dispatch){
axios.get("https://jsonplaceholder.typicode.com/posts/2")
.then((response)=>{
    dispatch(searchByTag(response.data))
})

        
    }
}