// import Area

import { Component } from "react";


//function area
export default class ClassComponentStatae extends Component{
    
    // 2.1 hooks Area
    

    // 2.2 Constructure area
        constructor(){
            super();

            this.state={
                counter:90,
            }
        }

        Increment=()=>{
            // this.setState({
            //     counter:this.state.counter+1
            // })

            // this.setState(preveValue=>({
            //     counter:preveValue.counter+5
            // }))

            // this.setState(preve=>({
            //     ...preve,
            //     counter:preve.counter+5
            // }))

            this.setState(preveState=>({
                ...preveState,
                counter:preveState.counter+10
            }))
        }
    //2.3 return statements
    
    render(){
        return(
            <>
                <div>
                    <p>Class Components {this.state.counter} </p>
                    <button onClick={this.Increment}>Increments value</button>
                </div>    
            </>
        )
    }
}

//export area