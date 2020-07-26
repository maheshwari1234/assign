import {FETCH_BY_ID}  from './types'
import axios from 'axios'

export const FetchById=(data)=>{
    return {
        type:FETCH_BY_ID,
        payload:data
    }
}

export const fetch = (id) => {
    console.log("id in action",id)
    return function (dispatch) {
        axios.get("https://jsonplaceholder.typicode.com/posts/"+id)
            .then((response) => {
                console.log("response",response.data)
                dispatch(FetchById(response.data))
            })

    }


}