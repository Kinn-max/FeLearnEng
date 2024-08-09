import React from 'react'

export default function OtherCourse() {
  return (
    <div class="col-xl-3 col-md-6">
        <div class="card item-card">
            <div class="card-body pb-0 h-100">
                <div class="text-center">
                    <img src="../assets/images/ecommerce/08.jpg" alt="img" class="img-fluid w-100 rounded-3"/>
                </div>
                <div class="card-body relative product-des">
                    <div class="cardtitle">
                        <span>Accessories</span>
                        <a>Metal Watch</a>
                    </div>
                    <div class="cardprice">
                        <span class="type--strikethrough">$999</span>
                        <span>$799</span>
                    </div>
                </div>
            </div>
            <div class="text-center border-top py-3 px-2 ">
                <a href="products.html" class="btn btn-primary my-1"><i class="fe fe-eye me-1"></i> View More</a>
                <a href="product-cart.html" class="btn btn-success"><i class="fe fe-shopping-cart me-1"></i> Add to cart</a>
            </div>
        </div>
    </div>
  )
}
