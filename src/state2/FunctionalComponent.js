import { useState } from "react";

export default function FunctionalComponent(){
    
    const [counter,setCounter]=useState(10);
    
    let increment=()=>{
        setCounter(counter+5);
    }

    function decrement(){
        setCounter(counter-2);
    }

    return(
        <>
            <h1>Counter Value is : {counter}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>dEcrement</button>
        </>
    )
}