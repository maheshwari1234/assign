const { SEARCH_BY_TAG} = require("../action/types")


const searchTag=(state={},action)=>{
switch(action.type){
    case SEARCH_BY_TAG:
    return{
        ...state,
        data:action.payload
    }
    default:
        return state
}
}

export default searchTag