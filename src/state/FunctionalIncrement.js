// import Area

import { useState } from "react";


//functional Area
let FunctionalIncrement=()=>{

    let [counter,setCounter]=useState(0);

    function increment(){
        // counter++;

        console.log(setCounter);
        setCounter(counter+1)
        // 2
        //setCounter(counter++);
        
        
        // console.log(counter[0]);
        // counter[1](counter[0]+1);
    }
    return(
        <>
            <p>Counter is : {counter}</p>
            <button onClick={()=>{increment()}}>Increments The value </button>
        </>
    )
}

// Export area
export default FunctionalIncrement;