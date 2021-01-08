export function userReducer(actualState, action) {
    switch (action.type) {
        case 'login':
            return { ...actualState, user: { name: action.payload } }
        default: return actualState
    }
}