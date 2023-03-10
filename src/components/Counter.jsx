import React, { useState } from 'react';

function Counter() {
    const [cart, setCart] = useState({ 
        item: 'apple', 
        quantity: 0,
    })

    function removeApple() {
        setCart(prevCart => ({
            ...prevCart,
            quantity: prevCart.quantity - 1
        }))
    }

    function addApple() {
        setCart(prevCart => ({
            ...prevCart,
            quantity: prevCart.quantity + 1,
        }))
    }

    return (
        <>
        <button onClick={removeApple}>-</button>
        {cart.quantity}
        {cart.item}
        <button onClick={addApple}>+</button>
        </>
    )
}

export default Counter