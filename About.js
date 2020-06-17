import React, { Component } from 'react'

class About extends Component {
    render() {
        return (
            <div className="container" style={{marginTop:"50px"}}>
                <h1 className="mt-4 mb-3">About
                    <small> Elders Assiatance </small>
                </h1>
                <ol className="breadcrumb">
                    <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                    </li>
                    <li className="breadcrumb-item active">
                        <a href="about.html"></a>About</li>
                </ol>

                <div className="row">
                    <div className="col-lg-6">
                        <img className="img-fluid rounded mb-4" src="pics/4.jpg" alt="" />
                    </div>
                    <div className="col-lg-6">
                        <h2>About</h2>
                        <p>To help elderly people without any hassle with quick assistance, at anytime and anywhere. </p>
                        <p>We promote awareness to people as to how effortlessly useful our website is. It will provide various services to the elderly people. </p>
                        <p>The services like Medical assistance, Safety and Security, Accompanying Elders anywhere, Visiting Relatives, Shopping Trips, Using Smartphones, Financial and Social Event.</p>
                    </div>
                </div>
                <h2>Our Team</h2>

                <div className="row">
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100 text-center">
                            <img className="card-img-top" src="pics/Galex.jpeg" alt="" />
                            <div className="card-body">
                                <h4 className="card-title">G ALEX</h4>
                                <h6 className="card-subtitle mb-2 text-muted">Owner</h6>
                                <p className="card-text">She has experince of more than 10 years . He will be the right person to guide.</p>
                            </div>
                            <div className="card-footer">
                                <a href="#">alex25@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100 text-center">
                            <img className="card-img-top" src="pics/akgupta.jpg" alt="" />
                            <div className="card-body">
                                <h4 className="card-title">A K GUPTA</h4>
                                <h6 className="card-subtitle mb-2 text-muted">SBI Branch Manager</h6>
                                <p className="card-text">He is a branch manager , she will be helping regading financial problem through bank.</p>
                            </div>
                            <div className="card-footer">
                                <a href="#">akgupta65@gmail.com</a>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mb-4">
                        <div className="card h-100 text-center">
                            <img className="card-img-top" src="pics/jgandhi.jpg" alt="" />
                            <div className="card-body">
                                <h4 className="card-title">J GANDHI</h4>
                                <h6 className="card-subtitle mb-2 text-muted">Program Co-ordinator</h6>
                                <p className="card-text">Regarding any events or trips this person will help you .</p>
                            </div>
                            <div className="card-footer">
                                <a href="#">jgandhi661@gmail.com</a>
                            </div>
                        </div>
                    </div>
                </div>
                <h2>Our Tourist Places</h2>
                <div className="row">
                    <div className="col-lg-2 col-sm-4 mb-4">
                        <img className="img-fluid" src="pics/tajmahal.jpg" alt="" />
                    </div>
                    <div className="col-lg-2 col-sm-4 mb-4">
                        <img className="img-fluid" src="pics/images.jpg" alt="" />
                    </div>
                    <div className="col-lg-2 col-sm-4 mb-4">
                        <img className="img-fluid" src="pics/download.jpg" alt="" />
                    </div>
                    <div className="col-lg-2 col-sm-4 mb-4">
                        <img className="img-fluid" src="pics/4-compressed.jpg" alt="" />
                    </div>
                    <div className="col-lg-2 col-sm-4 mb-4">
                        <img className="img-fluid" src="pics/event.jpg" alt="" />
                    </div>
                    <div className="col-lg-2 col-sm-4 mb-4">
                        <img className="img-fluid" src="pics/44.jpg" alt="" />
                    </div>
                </div>

            </div>
        )
    }
}

export default About;