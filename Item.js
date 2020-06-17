import React, { Component } from 'react'

class Item extends Component {
    constructor(props) {
        super(props);

        this.state = {
            item: props.item
        }
    }

    addToCart=()=>{
        this.props.addToCart(this.state.item)
    }

    removeFromCart=()=>{
        this.props.removeFromCart(this.state.item)
    }

    render() {
        return (
            <div className={ (this.props.isCart==false) ? ("col-lg-4 col-md-6 mb-4") : ("col-12")}>
                <div className="card h-100">
                    { (this.props.isCart==false) 
                        ? (<a href="#"><img className="card-img-top" src="pics/1.jpg" alt="" /></a>) 
                        : ("")
                    }
                    <div className="card-body">
                        <h4 className="card-title">
                            <a href="item.html">{this.state.item.name}</a>
                        </h4>
                        <h5>{this.state.item.price}</h5>
                        {
                            (this.props.isCart==false) ? (
                                <p className="card-text">Add and Enjoy the Facility!</p>
                            ):
                            (
                                <p>Qty:{this.state.item.qty}</p>
                            )
                        }
                    </div>
                    <div className="card-footer">
                        {
                            (this.props.isCart==true) ? (
                                <button onClick={this.removeFromCart}>Remove</button>
                            ) :
                            (
                                <button onClick={this.addToCart}>Add to To-Do List</button>
                            )
                        }
                        
                    </div>
                </div>
            </div>
        )
    }
}

export default Item;