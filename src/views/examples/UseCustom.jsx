import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import { useCounter } from '../../hooks/useCounter'
import { useFetch } from '../../hooks/useFetch'

const UseRef = (props) => {

    const [counter, inc, dec] = useCounter(10);
    const url = 'https://servicodados.ibge.gov.br/api/v1/localidades/estados/';
    const response = useFetch(url)

    function showStates(states) {
        return states.map((state) => <li key={state.nome}>{state.nome} - {state.sigla}</li>)
    }

    return (
        <div className="UseCustom">
            <PageTitle
                title="Seu Hook"
                subtitle="Vamos aprender como criar o nosso próprio Hook!"
            />

            <SectionTitle title="Exercício  #01" />
            <div className="center">
                <span className="text">{counter}</span>
                <div>
                    <button className="btn" onClick={() => inc()}>-1</button>
                    <button className="btn" onClick={() => dec()}> +1</button>
                </div>
            </div>

            <SectionTitle title="Exercício  #02" />
            <div className="center">
                {/* <ul>{response.data}</ul> */}
                <ul>{response.data ? showStates(response.data) : false}</ul>
            </div>
        </div>

    )
}

export default UseRef
