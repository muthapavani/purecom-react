import { Component } from "react";

class Child extends Component{
    constructor(){
        super()
        this.state={
            data:null

        }

    }
    componentDidUpdate(prevProps){
        if(this.props.id !=prevProps.id){
        console.log(this.props.id)
        fetch(`https://fakestoreapi.com/products/${this.props.id}`)
        .then((res)=>res.json())
        .then((data)=>this.setState({data}))
    }
}

    render(){
        console.log(this.state.data)
        return(<>
           
                {this.state.data?(
                <div>
                
                <h1>{this.state.data.title}</h1>
                <img src={this.state.data.image} alt="images" height="300px" width="300px"></img>
                <h2>RS: {this.state.data.price}</h2>
                <p> {this.state.data.description}</p>
                </div>
                 ):(<h1>loading...</h1>)}
        
        </>)
    }

}
export default Child