const { REGISTER} = require("../action/types")

const initialstate={
    isLogged:false,
    isregister:''
}

const register=(state=initialstate,action)=>{
switch(action.type){
    case REGISTER:
    return{
        ...state,
        isLogged:true,
        isregister:action.payload
    }
    default:
        return state
}
}

export default register