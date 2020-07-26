import { NEW_POST } from "./types";

export const newPost=(data)=>{
    return{
        type:NEW_POST,
        payload:data
    }
}

export const NewpostAction=(newdata)=>{
    return function(dispatch){
        dispatch(newPost("New post added successfully"))
    }
}