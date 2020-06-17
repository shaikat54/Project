import React, {Component} from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'

class MyOrdersPage extends Component{
    render(){
        return(
            <React.Fragment>
                <Header/>
                <h4> The Following are the Facilities : </h4>
                <p>To use them click on them</p>
                <ol>
                <li><p><a href="https://www.huffpost.com/entry/how-to-find-financial-ass_b_11388340">Financial Planning</a></p></li>
                <li><p><a href="http://vikaspedia.in/social-welfare/senior-citizens-welfare/concessions-and-facilities-given-to-senior-citizens">Medical Assistant </a></p></li>
                <li><p><a href="https://www.seniority.in/">Shopping Trips</a></p></li>
                <li><p><a href="https://www.tourmyindia.com/blog/where-to-go-on-holidays-in-india-with-elderly-parents/">Events</a></p></li>
                </ol>
                <p>To know about the Blood Pressure(B.P) and Cholesterol </p>
                <a href="table.html">Click Here </a>
                <p>To check your Blood Pressure(B.P) and Cholesterol </p>
<a href="bloodchole.html">Click Here </a>
    
                <h3>THANK YOU ! !</h3>
                <Footer/>
            </React.Fragment>
        )
    }
}

export default MyOrdersPage;