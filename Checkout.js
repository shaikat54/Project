import React, {Component} from 'react'

class Checkout extends Component{
    constructor(props){
        super()

        this.state={
            orderTotal:props.orderTotal
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({
            orderTotal:newProps.orderTotal
        })
    }

    render(){
        return(
            <div>
                <h1>Check List</h1>
                <p>Total: {this.state.orderTotal}</p>
                <button>PROCEED</button>
            </div>
        )
    }
}

export default Checkout;