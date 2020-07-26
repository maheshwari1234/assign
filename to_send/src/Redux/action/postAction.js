
import { FETCH_POSTS_FAILURE, FETCH_POSTS_REQUEST, FETCH_POSTS_SUCCESS } from './types'
import axios from 'axios'

export const request = () => {
    return {
        type: FETCH_POSTS_REQUEST
    }
}


export const success = (posts) => {
    return {
        type: FETCH_POSTS_SUCCESS,
        payload: posts
    }
}

export const failure = (error) => {
    return {
        type: FETCH_POSTS_FAILURE,
        payload: error
    }
}


export const fetch = () => {
    return function (dispatch) {
        dispatch(request())
        axios.get("https://jsonplaceholder.typicode.com/posts")
            .then((response) => {
                dispatch(success(response.data))
            })
            .catch((error) => {
                dispatch(failure(error.message))
            })

    }


}