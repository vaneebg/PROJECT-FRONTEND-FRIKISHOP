const users = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...state,
                token: action.payload.token,
                role: action.payload.user.role
            }
        case 'USER_INFO':
            return {
                ...state,
                user: action.payload
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                token: null
            }
        case 'REGISTER':
            return {
                ...state,
                message: action.payload.message
            }
        case 'CLEARMESSAGE':
            return {
                ...state,
                message: ''
            }
        default:
            return state;
    }

}

export default users;