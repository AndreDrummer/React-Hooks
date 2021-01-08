import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

// Ex #01
function calFatorial(num) {
    const n = parseFloat(num);
    if (n < 0) return -1;
    if (n === 0) return 1;
    return calFatorial(n - 1) * n
}

// Ex #02    
function isOdd(num) {
    const n = parseFloat(num);
    if (n % 2 === 0) return false
    return true;
}

const UseEffect = (props) => {

    // Ex #01
    const [number, setNumber] = useState(1);
    const [fatorial, setFatorial] = useState(1);

    useEffect(function () {
        setFatorial(calFatorial(number))
    }, [number])

    useEffect(() => {
        if (fatorial > 1000000) document.title = 'Fudeo fih' // Altera o título da página
    }, [fatorial])


    // Ex #02
    const [status, setStatus] = useState('Par')
    const [statusNumber, setStatusNumber] = useState(0)

    useEffect(function () {
        setStatus(isOdd(number) === true ? 'Ímpar' : 'Par')
    }, [number])

    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
            />

            <SectionTitle title="Exercício #01" />
            <span className="text">Fatorial de</span>
            <input type="number" className="input" value={number} onChange={(e) => setNumber(e.target.value)} />
            <div>
                <span className="text">É igual a    </span>
                <span className="text red">{fatorial}</span>
            </div>
            <div style={{
                height: "50px"
            }}></div>

            <SectionTitle title="Exercício #02" />
            <input type="number" className="input" value={statusNumber} onChange={(e) => setStatusNumber(e.target.value)} />
            <div>
                <span className="text">Status </span>
                <span className="text red">{status}</span>
            </div>
        </div>
    )
}

export default UseEffect
