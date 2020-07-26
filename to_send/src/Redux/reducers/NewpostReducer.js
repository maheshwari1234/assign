const { NEW_POST} = require("../action/types")


const new_post=(state={},action)=>{
switch(action.type){
    case NEW_POST:
    return{
        ...state,
        data:action.payload
    }
    default:
        return state
}
}

export default new_post