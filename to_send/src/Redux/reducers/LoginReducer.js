const { LOGIN,LOGOUT} = require("../action/types")

const initialstate={
    isLogged:false
}

const login=(state=initialstate,action)=>{
switch(action.type){
    case LOGIN:
    return{
        ...state,
        isLogged:action.payload
    }
    case LOGOUT :
    return{
        ...state,
        isLogged:action.payload
    }
    default:
        return state
}
}

export default login