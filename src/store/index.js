import { reducer } from './reducers'
const initialState = {
    produtos: [],
    user: {
        name: 'Sem usuário'
    },
    carrinho: [],
    outros: '...',
    numero: 0
}

export { initialState, reducer };
