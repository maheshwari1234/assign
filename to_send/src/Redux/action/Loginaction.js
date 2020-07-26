import { LOGIN, LOGOUT } from './types'

export const login = (isLogged) => {
    return {
        type: LOGIN,
        payload: isLogged

    }
}

export const logout = (isLogged) => {
    return {
        type: LOGOUT,
        payload: isLogged

    }
}

export const loginAction = (username, password) => {
    return function (dispatch) {
        if (username === "Admin@gmail.com" && password === "Admin@90") {
            dispatch(login(true))
        }
    }

}

export const logoutAction = () => {
    return function (dispatch) {
        dispatch(logout(false))

    }

}
