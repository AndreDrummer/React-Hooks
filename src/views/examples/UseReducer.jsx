import React, { useReducer, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { initialState, reducer } from '../../store';
import { numberAdd2, login } from '../../store/actions';

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [number, setNumber] = useState(0);
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />

            <div className="center">
                <span className="text">{state.numero}</span>
                <span className="text">{state.user.name}</span>
                <div >
                    <button className="btn" onClick={() => login(dispatch, 'Marcos')}>Login</button>
                    <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
                    <button className="btn" onClick={() => dispatch({ type: 'times7' })}>*7</button>
                    <button className="btn" onClick={() => dispatch({ type: 'dividir25' })}>/25</button>
                    <button className="btn" onClick={() => dispatch({ type: 'toInt' })}>ToInt</button>
                    <input type="number" className="input" value={number} onChange={e => setNumber(e.target.value)} />
                    <button className="btn" onClick={() => dispatch({ type: 'AddN', payload: number })}>Adicionar Valor</button>
                </div>
            </div>
        </div>
    )
}


export default UseReducer
