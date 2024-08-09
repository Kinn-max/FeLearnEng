import React from 'react'
import OtherCourse from '../../components/OtherCourse'

export default function DetailCourse() {
  return (
    <>
        <div className='container'>
            <div class="row">
                <div class="col-xl-12">
                    <div class="card">
                        <div class="card-body h-100">
                            <div class="row text-start ">
                                <div class=" col-xl-5 col-lg-12 col-md-12">
                                    <div class="product-carousel  border br-5">
                                        <div id="Slider" class="carousel slide" data-bs-ride="false">
                                            <div class="carousel-inner py-3">
                                                <div class="carousel-item active"><img src="../assets/images/ecommerce/13.png" alt="img" class="img-fluid mx-auto d-block"/>
                                                </div>
                                                <div class="carousel-item"> <img src="../assets/images/ecommerce/14.png" alt="img" class="img-fluid mx-auto d-block"/>
                                                </div>
                                                <div class="carousel-item"> <img src="../assets/images/ecommerce/15.png" alt="img" class="img-fluid mx-auto d-block"/>
                                                </div>
                                                <div class="carousel-item"> <img src="../assets/images/ecommerce/16.png" alt="img" class="img-fluid mx-auto d-block"/>
                                                </div>
                                                <div class="carousel-item"> <img src="../assets/images/ecommerce/17.png" alt="img" class="img-fluid mx-auto d-block"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="clearfix carousel-slider">
                                        <div id="thumbcarousel" class="carousel slide mt-2" data-bs-interval="t">
                                            <div class="carousel-inner">
                                                <ul class="carousel-item active d-flex justify-content-center list-unstyled nav mt-2">
                                                    <li data-bs-target="#Slider" data-bs-slide-to="0" class="thumb wd-18 active my-2"><img src="../assets/images/ecommerce/13.png" alt="img"/></li>
                                                    <li data-bs-target="#Slider" data-bs-slide-to="1" class="thumb wd-18 my-2"><img src="../assets/images/ecommerce/14.png" alt="img"/></li>
                                                    <li data-bs-target="#Slider" data-bs-slide-to="2" class="thumb wd-18 my-2"><img src="../assets/images/ecommerce/15.png" alt="img"/></li>
                                                    <li data-bs-target="#Slider" data-bs-slide-to="3" class="thumb wd-18 my-2"><img src="../assets/images/ecommerce/16.png" alt="img"/></li>
                                                    <li data-bs-target="#Slider" data-bs-slide-to="4" class="thumb wd-18 my-2"><img src="../assets/images/ecommerce/17.png" alt="img"/></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="details col-xl-7 col-lg-12 col-md-12 mt-4 mt-xl-0">
                                    <h5 class="product-title mb-1">Khóa học giao tiếp</h5>
                                    <p class="text-muted fs-13 mb-1">Dành cho người đi làm</p>
                                    <div class="rating mb-1">
                                        <div class="stars">
                                            <span class="bx bxs-star fs-17 align-center checked"></span>
                                            <span class="bx bxs-star fs-17 align-center checked"></span>
                                            <span class="bx bxs-star fs-17 align-center checked"></span>
                                            <span class="bx bxs-star fs-17 align-center checked"></span>
                                            <span class="bx bxs-star fs-17 align-center text-muted"></span>
                                        </div>
                                        <span class="review-no">471 reviews</span>
                                    </div>
                                    <h6 class="price fs-14">current price: <span class="h4 ms-2 d-inline-block">$180</span></h6>
                                    <p class="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu
                                        laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim
                                        sociosqu delectus posuere.</p>
                                    <p class="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87
                                            votes)</strong></p>
                                    
                                    <div class="d-flex  mt-2">
                                        <div class="mt-2 product-title">Quantity:</div>
                                        <div class="d-flex ms-2">
                                            <ul class=" mb-0 qunatity-list list-unstyled">
                                                <li>
                                                    <div class="form-group">
                                                        <div class="choices" data-type="select-one" tabindex="0" role="combobox" aria-autocomplete="list" aria-haspopup="true" aria-expanded="false">
                                                        </div>
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                    <div class="action mt-4">
                                        <a href="wish-list.html" class="add-to-cart btn btn-danger my-1 me-1">ADD TO
                                        WISHLIST</a>
                                        <a href="product-cart.html" class="add-to-cart btn btn-success">ADD TO
                                        CART</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className='text-title'>KHÓA HỌC GỢI Ý</h3>
            <div class="row related-products-ltr-l">
                <OtherCourse/>
                <OtherCourse/>
                <OtherCourse/>
                <OtherCourse/>
                <OtherCourse/>
            </div>
        </div>
    </>
   
  )
}
