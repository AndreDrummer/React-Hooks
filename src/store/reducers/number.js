export function numberReducer(actualState, action) {
    switch (action.type) {
        case 'numberAdd2':
            return { ...actualState, numero: actualState.numero + 2 }
        case 'times7':
            return { ...actualState, numero: actualState.numero * 7 }
        case 'dividir25':
            return { ...actualState, numero: actualState.numero / 25 }
        case 'toInt':
            return { ...actualState, numero: parseInt(actualState.numero) }
        case 'AddN':
            return { ...actualState, numero: actualState.numero + parseInt(action.payload) }
        default: return actualState
    }
}