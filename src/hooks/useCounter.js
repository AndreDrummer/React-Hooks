import { useState } from 'react'

export const useCounter = (initialValue = 0) => {
    const [state, setState] = useState(initialValue);

    function inc() {
        setState(state + 1)
    }

    function dec() {
        setState(state - 1)
    }

    return [state, dec, inc]
}