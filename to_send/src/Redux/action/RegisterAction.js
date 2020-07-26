import {REGISTER} from './types'

export const register = (isLogged) => {
    return {
        type: REGISTER,
        payload: isLogged

    }
}

export const registerAction = (username, password) => {
    return function (dispatch) {
        dispatch(register("Account Created Successfully"))
    }

}

