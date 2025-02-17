import { PureComponent } from "react"
import Child from "../child/child"


class Parent extends PureComponent{
constructor(){
    super()
    this.state={
        username:"Products",
        id:0

    }
}
increment=()=>{
    this.setState({id:this.state.id+1})
}
decrement=()=>{
    this.setState({id:this.state.id-1})
}
    render(){

        return(
        <>
          <h1>{this.state.username}</h1>
          <button disabled={this.state.id>=20} onClick={this.increment}>increment</button>
          <button disabled={this.state.id<=1} onClick={this.decrement}>decrement</button>
          
          <Child id={this.state.id}/>

        </>
        )
    }
}

export default Parent