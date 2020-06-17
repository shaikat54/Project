import React, { Component } from 'react'
import Item from './Item';

class Cart extends Component {
    constructor(props){
        super(props);

        this.state={
            cartItems:props.items
        }
    }

    componentWillReceiveProps(newProps){
        this.setState({
            cartItems:newProps.items
        })
    }

    removeFromCart=(item)=>{
        console.log(item)
        this.props.removeFromCart(item)
    }

    render() {
        return (
            <div className="row">
                <h1><center>To-do-list</center></h1>
                {
                    this.state.cartItems.map((cartItem)=>{
                        return <Item key={cartItem._id} item={cartItem} isCart={true} removeFromCart={this.removeFromCart}/>
                    })
                }
            </div>
        )
    }
}

export default Cart;