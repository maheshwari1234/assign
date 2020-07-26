import {FETCH_BY_ID} from '../action/types'


const reducer=(state={},action)=>{
switch(action.type){
            case FETCH_BY_ID:
                return{
                   Idposts:action.payload
                }
                default:
                    return state
}
}

export default reducer;

