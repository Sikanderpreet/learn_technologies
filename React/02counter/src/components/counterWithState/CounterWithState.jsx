import { useState } from "react"

function CounterWithState() {
    const [counter, setCounter]= useState(0)

    const increaseCounter = () =>{
        setCounter((prev)=> prev+1)

    }
    const decreaseCounter = () =>{
        setCounter((prev)=> prev-1)

    }
    
    return (
        <>
        <h2>Counter(with state) is: {counter}</h2>
        <button onClick={increaseCounter}>Increase Counter</button>
        <button onClick={decreaseCounter}>Decrease Counter</button>

        </>
    )
}

export default CounterWithState;