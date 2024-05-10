import { Component } from "react";

class Counter extends Component {
    state={
        products: 0,
        // message:"MyCounterApp"
    }
   
    changeAction = (action)=>{
        switch(action){
            case "Increment":
                this.setState({
                    products:this.state.products+1
                })
                break
                case "decrement":
                    this.setState({
                        products:this.state.products-1
                    })
                    break
                    case "reset":
                        this.setState({
                            products:0
                        })
                        break
                        default:break
        }
       
    }
    render(){
        return(
            <div style={
                {}
            }>
            {/* <h2>{this.state.message}</h2> */}
            <h6>Quantity {this.state.products} </h6>
            <button style={{margin:"10px" , backgroundColor:"green",color:"white", borderRadius:"4px",border:"none"}} onClick={()=>this.changeAction("Increment")} >Add</button>
            <button style={{margin:"10px", background:"red" , color:"white",borderRadius:"4px",border:"none"}} onClick={()=>this.changeAction ("decrement")}>Delete</button>
            {/* <button onClick={()=>this.changeAction("reset")}>Reset</button> */}
            </div>
        )
    }
}
export default Counter 

