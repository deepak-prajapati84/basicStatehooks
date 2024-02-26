import { Component } from "react";
import  './style.css'

class ClassFunctionalState extends Component{

    // Hooks Area


    //Constructor area

    constructor(){
        super();
        this.state={counter:10}
    }


    Increment=()=>{
        this.setState({
            counter:this.state.counter+3
        })
    }

    Decrement=()=>{
        
        this.setState((preveValue)=>({
            // ...preveValue,
            counter:preveValue.counter-2
        }))
        
        // this.setState({
        //     counter:Math.max(this.state.counter-2)
        // })
    }

    Even=()=>{

    }

    render(){
        return(
            <>
                <div className="buttongroup">
                    <h2>Counter value is : {this.state.counter} </h2>
                    <div>
                        <button onClick={this.Increment} className="buttons">Increment</button>
                        <button onClick={this.Decrement} className="buttons" style={{background:"red"}}>Decrement</button>
                        <button onClick={this.Even} className="buttons" style={{marginLeft:115,background:'black',color:"white",padding:"10px 20px 10px 20px"}}>Even</button>
                    </div>
                </div>
            </>
        );
    }
}

export default ClassFunctionalState;