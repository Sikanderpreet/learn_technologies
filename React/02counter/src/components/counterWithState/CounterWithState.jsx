import { useState } from "react"

function CounterWithState() {
    const [counter, setCounter]= useState(0)

    const increaseCounter = () =>{
        setCounter((prev)=> {
            if (prev !== 20) return prev+1;
            return prev;

        }
    )

    }
    const decreaseCounter = () =>{
        setCounter((prev)=> {
            if (prev !== 0) return prev-1;
            return prev;
        }
    )

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