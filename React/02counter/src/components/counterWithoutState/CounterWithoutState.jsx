function CounterWithoutState() {
    let counter = 0
    const increaseCounter = () =>{
        counter = counter + 1
    console.log(counter);

    }
    const decreaseCounter = () =>{
        counter -= 1
    console.log(counter);
    }
    
    return (
        <>
        <h2>Counter is: {counter}</h2>
        <button onClick={increaseCounter}>Increase Counter</button>
        <button onClick={decreaseCounter}>Decrease Counter</button>

        </>
    )
}

export default CounterWithoutState;