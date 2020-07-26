import  Reducer from './postReducer'
import postIdReducer from './postIdReducer'
import LoginReducer from './LoginReducer'
import RegisterReducer from './RegisterReducer'
import newpostReducer from './NewpostReducer'
import Searchtag from './SearchTagReducer'
import {combineReducers} from 'redux'

const rootreducer=combineReducers({
    postred:Reducer,
    postId:postIdReducer,
    login:LoginReducer,
    register:RegisterReducer,
    newpost:newpostReducer,
    searchByTag:Searchtag

})

export default rootreducer