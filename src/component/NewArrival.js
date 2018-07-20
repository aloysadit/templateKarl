import React, { Component } from 'react';


class NewArrival extends Component { 
    render() {
        return (
            <div>
                 
        {/* <!-- ****** New Arrivals Area Start ****** --> */}
        <section className="new_arrivals_area section_padding_100_0 clearfix">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section_heading text-center">
                            <h2>New Arrivals</h2>
                        </div>
                    </div>
                </div>
            </div>

            <div className="karl-projects-menu mb-100">
                <div className="text-center portfolio-menu">
                    <button className="btn active" data-filter="*">ALL</button>
                    <button className="btn" data-filter=".women">WOMAN</button>
                    <button className="btn" data-filter=".man">MAN</button>
                    <button className="btn" data-filter=".access">ACCESSORIES</button>
                    <button className="btn" data-filter=".shoes">shoes</button>
                    <button className="btn" data-filter=".kids">KIDS</button>
                </div>
            </div>

            <div className="container">
                <div className="row karl-new-arrivals">

                    {/* <!-- Single gallery Item Start --> */}
                    <div className="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.2s">
                        {/* <!-- Product Image --> */}
                        <div className="product-img">
                            <img src="img/product-img/product-1.jpg" alt=""/>
                            <div className="product-quicview">
                                <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus"></i></a>
                            </div>
                        </div>
                        {/* <!-- Product Description --> */}
                        <div className="product-description">
                            <h4 className="product-price">$39.90</h4>
                            <p>Jeans midi cocktail dress</p>
                            {/* <!-- Add to Cart --> */}
                            <a href="#" className="add-to-cart-btn">ADD TO CART</a>
                        </div>
                    </div>

                    {/* <!-- Single gallery Item Start --> */}
                    <div className="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.3s">
                        {/* <!-- Product Image --> */}
                        <div className="product-img">
                            <img src="img/product-img/product-2.jpg" alt=""/>
                            <div className="product-quicview">
                                <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus"></i></a>
                            </div>
                        </div>
                        {/* <!-- Product Description --> */}
                        <div className="product-description">
                            <h4 className="product-price">$39.90</h4>
                            <p>Jeans midi cocktail dress</p>
                            {/* <!-- Add to Cart --> */}
                            <a href="#" className="add-to-cart-btn">ADD TO CART</a>
                        </div>
                    </div>

                    {/* <!-- Single gallery Item Start --> */}
                    <div className="col-12 col-sm-6 col-md-4 single_gallery_item access wow fadeInUpBig" data-wow-delay="0.4s">
                        {/* <!-- Product Image --> */}
                        <div className="product-img">
                            <img src="img/product-img/product-3.jpg" alt=""/>
                            <div className="product-quicview">
                                <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus"></i></a>
                            </div>
                        </div>
                        {/* <!-- Product Description --> */}
                        <div className="product-description">
                            <h4 className="product-price">$39.90</h4>
                            <p>Jeans midi cocktail dress</p>
                            {/* <!-- Add to Cart --> */}
                            <a href="#" className="add-to-cart-btn">ADD TO CART</a>
                        </div>
                    </div>

                    {/* <!-- Single gallery Item Start --> */}
                    <div className="col-12 col-sm-6 col-md-4 single_gallery_item shoes wow fadeInUpBig" data-wow-delay="0.5s">
                        {/* <!-- Product Image --> */}
                        <div className="product-img">
                            <img src="img/product-img/product-4.jpg" alt=""/>
                            <div className="product-quicview">
                                <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus"></i></a>
                            </div>
                        </div>
                        {/* <!-- Product Description --> */}
                        <div className="product-description">
                            <h4 className="product-price">$39.90</h4>
                            <p>Jeans midi cocktail dress</p>
                            {/* <!-- Add to Cart --> */}
                            <a href="#" className="add-to-cart-btn">ADD TO CART</a>
                        </div>
                    </div>

                    {/* <!-- Single gallery Item Start --> */}
                    <div className="col-12 col-sm-6 col-md-4 single_gallery_item women wow fadeInUpBig" data-wow-delay="0.6s">
                        {/* <!-- Product Image --> */}
                        <div className="product-img">
                            <img src="img/product-img/product-5.jpg" alt=""/>
                            <div className="product-quicview">
                                <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus"></i></a>
                            </div>
                        </div>
                        {/* <!-- Product Description --> */}
                        <div className="product-description">
                            <h4 className="product-price">$39.90</h4>
                            <p>Jeans midi cocktail dress</p>
                            {/* <!-- Add to Cart --> */}
                            <a href="#" className="add-to-cart-btn">ADD TO CART</a>
                        </div>
                    </div>

                    {/* <!-- Single gallery Item --> */}
                    <div className="col-12 col-sm-6 col-md-4 single_gallery_item kids man wow fadeInUpBig" id="man" data-wow-delay="0.7s">
                        {/* <!-- Product Image --> */}
                        <div className="product-img">
                            <img src="img/product-img/product-6.jpg" alt=""/>
                            <div className="product-quicview">
                                <a href="#" data-toggle="modal" data-target="#quickview"><i className="ti-plus"></i></a>
                            </div>
                        </div>
                        {/* <!-- Product Description --> */}
                        <div className="product-description">
                            <h4 className="product-price">$39.90</h4>
                            <p>Jeans midi cocktail dress</p>
                            {/* <!-- Add to Cart --> */}
                            <a href="#" className="add-to-cart-btn">ADD TO CART</a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        {/* <!-- ****** New Arrivals Area End ****** --> */}


                </div>
        
    );
} 
}
export default NewArrival;