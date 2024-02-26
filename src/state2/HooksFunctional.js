import { useEffect, useState } from "react"


export default function HooksFunctional(){
    
    const [value,setValue]=useState(5);
    const [isEven,setIsEven]=useState(false);

    useEffect(()=>{
        if(value % 2 == 0){
            setIsEven(true);
        }else{
            setIsEven(false);
        }
    },[value]);

    const increment=()=>{
        setValue(value+2);
    }
    
    let decrement=()=>{
        setValue(value-3);
    };

    return[value,isEven,increment,decrement];
}