import React, { Component } from 'react';
import { Link, Route} from 'react-router-dom';





class HeaderArea extends Component { 
    render() {
        return (
            <div>


          
        {/* <!-- ****** Header Area Start ****** --> */}
        <header className="header_area">
            {/* <!-- Top Header Area Start --> */}
            <div className="top_header_area">
                <div className="container h-100">
                    <div className="row h-100 align-items-center justify-content-end">

                        <div className="col-12 col-lg-7">
                            <div className="top_single_area d-flex align-items-center">
                                {/* <!-- Logo Area --> */}
                                <div className="top_logo">
                                    <a href="#"><img src="img/core-img/logo.png" alt=""/></a>
                                </div>
                                {/* <!-- Cart & Menu Area --> */}
                                <div className="header-cart-menu d-flex align-items-center ml-auto">
                                    {/* <!-- Cart Area --> */}
                                    <div className="cart">                  
                                        <Link to="/Xcart" id="header-cart-btn" ><span className="cart_quantity">2</span> <i className="ti-bag"></i> Your Bag $20</Link>                   
                                        {/* <!-- Cart List Area Start --> */}
                                        <ul className="cart-list">
                                            <li>
                                                <a href="#" className="image"><img src="img/product-img/product-10.jpg" className="cart-thumb" alt=""/></a>
                                                <div className="cart-item-desc">
                                                    <h6><a href="#">Women's Fashion</a></h6>
                                                    <p>1x - <span className="price">$10</span></p>
                                                </div>
                                                <span className="dropdown-product-remove"><i className="icon-cross"></i></span>
                                            </li>
                                            <li>
                                                <a href="#" className="image"><img src="img/product-img/product-11.jpg" className="cart-thumb" alt=""/></a>
                                                <div className="cart-item-desc">
                                                    <h6><a href="#">Women's Fashion</a></h6>
                                                    <p>1x - <span className="price">$10</span></p>
                                                </div>
                                                <span className="dropdown-product-remove"><i className="icon-cross"></i></span>
                                            </li>
                                            <li className="total">
                                                <span className="pull-right">Total: $20.00</span>
                                                <a href="cart.html" className="btn btn-sm btn-cart">Cart</a>
                                                <a href="checkout-1.html" className="btn btn-sm btn-checkout">Checkout</a>
                                            </li>
                                        </ul>
                                    </div>
                                    {/* <div className="header-right-side-menu ml-15">
                                        <a href="#" id="sideMenuBtn"><i className="ti-menu" aria-hidden="true"></i></a>
                                    </div> */}
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

            {/* <!-- Top Header Area End --> */}
            <div className="main_header_area">
                <div className="container h-100">
                    <div className="row h-100">
                        <div className="col-12 d-md-flex justify-content-between">
                            {/* <!-- Header Social Area --> */}
                            <div className="header-social-area">
                                <a href="#"><span className="karl-level">Share</span> <i className="fa fa-pinterest" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a>
                                <a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a>
                            </div>
                            {/* <!-- Menu Area --> */}
                            <div className="main-menu-area">
                                <nav className="navbar navbar-expand-lg align-items-start">

                                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#karl-navbar" aria-controls="karl-navbar" aria-expanded="false" aria-label="Toggle navigation"><span className="navbar-toggler-icon"><i className="ti-menu"></i></span></button>

                                    <div className="collapse navbar-collapse align-items-start collapse" id="karl-navbar">
                                        <ul className="navbar-nav animated" id="nav">
                                            <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
                                            <li className="nav-item dropdown">
                                                <a className="nav-link dropdown-toggle" href="#" id="karlDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Pages</a>
                                                <div className="dropdown-menu" aria-labelledby="karlDropdown">
                                                    <Link to="/" className="dropdown-item">Home</Link>
                                                    <Link to="/Xshop" className="dropdown-item">Shop</Link>
                                                    <Link to="/Xproduct" className="dropdown-item">Product Details</Link>
                                                    <Link to="/Xcart" className="dropdown-item">Cart</Link>
                                                    <Link to="/Xcheckout" className="dropdown-item">Checkout</Link>
                                                </div>
                                            </li>
                                            <li className="nav-item"><a className="nav-link" href="#">Dresses</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#"><span className="karl-level">hot</span> Shoes</a></li>
                                            <li className="nav-item"><a className="nav-link" href="#">Contact</a></li>
                                        </ul>
                                    </div>
                                </nav>
                            </div>
                            {/* <!-- Help Line --> */}
                            <div className="help-line">
                                <a href="tel:+346573556778"><i className="ti-headphone-alt"></i> +34 657 3556 778</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        {/* <!-- ****** Header Area End ****** --> */}

                </div>
        
    );
} 
}
export default HeaderArea;