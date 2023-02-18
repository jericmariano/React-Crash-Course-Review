import React, { useState } from 'react';

function Counter() {
    const [counter, setCounter] = useState(0)

    function incrementCounter() {
        setCounter(counter + 1)
    }

    function decrementCounter() {
        setCounter(counter - 1)
    }


    return (
        <>
        <button onClick={decrementCounter}>-</button>
        {counter}
        <button onClick={incrementCounter}>+</button>
        </>
    )
}

export default Counter