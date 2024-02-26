import HooksFunctional from "./HooksFunctional";


let UseEffectFunctional=()=>{
    const [value,isEven,increment,decrement]=HooksFunctional();
    return(
        <>
            <h1>Counter value is : {value}</h1>
            <div>
                <button onClick={increment}>increment</button>
                <button onClick={decrement}>decrement</button>
            </div>
            <div className={isEven ? "even" : "odd"}>{isEven ? "Even" : "Odd"}</div> 
        </>
    );
}

export default UseEffectFunctional;