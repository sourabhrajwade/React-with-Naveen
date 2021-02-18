const actionTypes = {
    LOGIN_REQUEST: 'LOGIN_REQUEST'
}
const loginActions = {
    loginRequest: ( payload ) => {
        return {
            type: actionTypes.LOGIN_REQUEST, 
            payload: payload
        }
    }
};

export {actionTypes, loginActions}