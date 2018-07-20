import React, { Component } from 'react'; 

class DiscountArea extends Component {
    render() {
      return (
        <div>



        {/* <!-- ****** Top Discount Area Start ****** --> */}
        <section className="top-discount-area d-md-flex align-items-center">
            {/* <!-- Single Discount Area --> */}
            <div className="single-discount-area">
                <h5>Free Shipping &amp; Returns</h5>
                <h6><a href="#">BUY NOW</a></h6>
            </div>
            {/* <!-- Single Discount Area --> */}
            <div className="single-discount-area">
                <h5>20% Discount for all dresses</h5>
                <h6>USE CODE: Colorlib</h6>
            </div>
            {/* <!-- Single Discount Area --> */}
            <div className="single-discount-area">
                <h5>20% Discount for students</h5>
                <h6>USE CODE: Colorlib</h6>
            </div>
        </section>
        {/* <!-- ****** Top Discount Area End ****** --> */}


        </div>
    );
  }
}

export default DiscountArea;