import React from 'react'

export default function Banner() {
    const imageUrl = process.env.PUBLIC_URL + '/assets/images/img-banner.jpg';

  return (
    <div class="landing-banner" id="home">
                <section class="section">
                    <div class="container main-banner-container">
                        <div style={{ backgroundImage: `url(${imageUrl})`, paddingBottom: '30px' }} class="row style-background  justify-content-center text-center">
                            <div class="col-xxl-9 col-xl-9 col-lg-9 col-md-8">
                                <div class="py-5 pb-lg-0">
                                    <div class="mb-3">
                                        <h5 class="fw-semibold ">Học tiếng anh mỗi ngày</h5>
                                    </div>
                                    <p class="landing-banner-heading mb-3">Xây dựng nền tảng tiếng anh !</p>
                                    <div class="fs-16 mb-5"> Valex - Now you can use this admin template to design stunning dashboards that will wow your target viewers or users to no end. To create a good and well-structured dashboard, you need to start from scratch with HTML, SCSS, CSS, and JS and with lots of coding, but by using this Valex-Admin template.</div>
                                    <a href="index.html" class="m-1 btn btn-primary">
                                        Discover More
                                        <i class="fe fe-eye ms-2 align-middle"></i>
                                    </a>
                                    <a href="index.html" class="m-1 btn btn-info">
                                        Get Started
                                        <i class="fe fe-arrow-right ms-2 align-middle"></i>
                                    </a>
                                </div>
                            </div>
                            </div>
                    </div>
                </section>
                <section class="section section-bg " id="features">
                <div class="container text-center position-relative">
                    <p class="fs-12 fw-semibold text-success mb-1">
                        <span class="landing-section-heading">Features</span>
                    </p>
                    <div class="landing-title"></div>
                    <h3 class="fw-semibold mb-2">Valex Main Features</h3>
                    <div class="row justify-content-center">
                        <div class="col-xl-7">
                            <p class="text-muted fs-15 mb-5 fw-normal">We are proud to have top class clients and customers,which motivates us to work more on projects.</p>
                        </div>
                    </div>
                    <div class="row  g-2 justify-content-center">
                        <div class="col-xl-12">
                            <div class="row justify-content-evenly">
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                                    <div class="card features main-features main-features-4 p-4 active" data-wow-delay="0.1s"> 
                                        <div class="bg-img mb-2"> 
                                            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128">
                                            <circle cx="64" cy="64" r="64" fill="#42A3DB"></circle>
                                            <path fill="#347CBE" d="M85.5 26.6 66.1 61 33.3 98.6 62.6 128H64c33.7 0 61.3-26 63.8-59.1L85.5 26.6z"></path>
                                            <path fill="#CD2F30" d="M73.1 57.7h-16c3.6 18.7 11.1 36.6 22.1 52.5.3-5 1-9.8 1.8-14.5 4.6 1.3 9.2 2.3 13.7 3-9.7-12.2-17-26.1-21.6-41z"></path>
                                            <path fill="#F04D45" d="M54.9 57.7c-4.6 15-11.9 28.9-21.6 40.9 4.5-.7 9.1-1.7 13.7-3 .9 4.7 1.5 9.5 1.8 14.5 11-15.9 18.4-33.8 22.1-52.5h-16z">
                                            </path>
                                            <path fill="#FFF" d="M93.5 52c1.8-1.8 1.8-4.7 0-6.5-1.3-1.3-1.7-3.3-1-5 1-2.4-.1-5-2.5-6-1.7-.7-2.8-2.4-2.8-4.3 0-2.5-2.1-4.6-4.6-4.6-1.9 0-3.5-1.1-4.3-2.8-1-2.4-3.7-3.5-6-2.5-1.7.7-3.7.3-5-1-1.8-1.8-4.7-1.8-6.5 0-1.3 1.3-3.3 1.7-5 1-2.4-1-5 .1-6 2.5-.7 1.7-2.4 2.8-4.3 2.8-2.5 0-4.6 2.1-4.6 4.6 0 1.9-1.1 3.5-2.8 4.3-2.4 1-3.5 3.7-2.5 6 .7 1.7.3 3.7-1 5-1.8 1.8-1.8 4.7 0 6.5 1.3 1.3 1.7 3.3 1 5-1 2.4.1 5 2.5 6 1.7.7 2.8 2.4 2.8 4.3 0 2.5 2.1 4.6 4.6 4.6 1.9 0 3.5 1.1 4.3 2.8 1 2.4 3.7 3.5 6 2.5 1.7-.7 3.7-.3 5 1 1.8 1.8 4.7 1.8 6.5 0 1.3-1.3 3.3-1.7 5-1 2.4 1 5-.1 6-2.5.7-1.7 2.4-2.8 4.3-2.8 2.5 0 4.6-2.1 4.6-4.6 0-1.9 1.1-3.5 2.8-4.3 2.4-1 3.5-3.7 2.5-6-.7-1.7-.3-3.7 1-5z"></path><path fill="#FFCD0A" d="M64 70.8c-12.2 0-22.1-9.9-22.1-22.1 0-12.2 9.9-22.1 22.1-22.1 12.2 0 22.1 9.9 22.1 22.1 0 12.2-9.9 22.1-22.1 22.1z"></path><path fill="#FFF" d="M59.9 61c-.6 0-1.1-.2-1.5-.7l-8.3-9.2c-.7-.8-.7-2.1.1-2.8.8-.7 2.1-.7 2.8.1l6.7 7.5 15.1-18.8c.7-.9 2-1 2.8-.3.9.7 1 2 .3 2.8L61.4 60.2c-.3.5-.9.8-1.5.8z"></path></svg> 
                                        </div> 
                                        <div> 
                                            <h5 class="fw-bold">Quality &amp; Clean Code</h5> 
                                            <p class="mb-0">The Valex admin code is maintained very cleanly and well-structured with proper comments. </p>
                                        </div> 
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                                    <div class="card features main-features main-features-2 wow p-4"> 
                                        <div class="bg-img mb-2"> 
                                            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 128 128" viewBox="0 0 128 128">
                                            <circle cx="64" cy="64" r="63.5" fill="#54C0EB"></circle><path fill="#84DBFF" d="M19.2,109c11.5,11.4,27.3,18.5,44.8,18.5c17.5,0,33.3-7.1,44.8-18.5H19.2z"></path>
                                            <rect width="19.6" height="10.4" x="54.2" y="92.7" fill="#FFF"></rect><rect width="19.6" height="2.3" x="54.2" y="92.7" fill="#E6E9EE"></rect>
                                            <path fill="#E6E9EE" d="M82.2,109H45.8l0,0c0-3.3,2.7-6,6-6h24.4C79.5,103.1,82.2,105.7,82.2,109L82.2,109z"></path><path fill="#324A5E" d="M103,92.7H25c-2.4,0-4.4-2-4.4-4.4V34.7c0-2.4,2-4.4,4.4-4.4h78c2.4,0,4.4,2,4.4,4.4v53.7   C107.4,90.7,105.4,92.7,103,92.7z"></path><path fill="#FFF" d="M20.6,84v4.4c0,2.4,1.9,4.3,4.3,4.3H103c2.4,0,4.3-1.9,4.3-4.3V84H20.6z"></path><rect width="80.3" height="46.9" x="23.9" y="33.4" fill="#FFF"></rect><circle cx="100.3" cy="88.3" r="2" fill="#FF7058"></circle><circle cx="94.7" cy="88.3" r="2" fill="#4CDBC4"></circle><circle cx="89.1" cy="88.3" r="2" fill="#54C0EB"></circle><rect width="9.7" height="27.7" x="32.3" y="46.7" fill="#ACB3BA"></rect><rect width="9.7" height="15.8" x="45.7" y="58.7" fill="#4CDBC4"></rect><rect width="9.7" height="23.1" x="59.1" y="51.3" fill="#FFD05B"></rect><rect width="9.7" height="35.7" x="72.6" y="38.7" fill="#84DBFF"></rect><rect width="9.7" height="8.1" x="86" y="66.3" fill="#FF7058"></rect>
                                            </svg> 
                                        </div> 
                                        <div> 
                                            <h5 class="fw-bold">Multiple Demos</h5> 
                                            <p class="mb-0"> We included multiple demos, preview video, and screen shots to give a quick overview of our Valex admin template.</p>
                                        </div> 
                                    </div> 
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                                    <div class="card features main-features main-features-3 wow p-4"> 
                                        <div class="bg-img mb-2"> 
                                            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 128 128" viewBox="0 0 128 128"><circle cx="64" cy="64" r="63.5" fill="#54C0EB"></circle><path fill="#FFF" d="M42.2,96H23.6c-1.6,0-2.8-1.3-2.8-2.8V34.8c0-1.6,1.3-2.8,2.8-2.8h18.6c1.6,0,2.8,1.3,2.8,2.8v58.3   C45.1,94.7,43.8,96,42.2,96z"></path><rect width="18.7" height="36.8" x="23.6" y="35.8" fill="#4CDBC4"></rect><circle cx="32.9" cy="83.9" r="7.2" fill="#E6E9EE"></circle><circle cx="32.9" cy="83.9" r="5" fill="#324A5E"></circle><path fill="#FFF" d="M68.8,96H50.2c-1.6,0-2.8-1.3-2.8-2.8V34.8c0-1.6,1.3-2.8,2.8-2.8h18.6c1.6,0,2.8,1.3,2.8,2.8v58.3   C71.6,94.7,70.4,96,68.8,96z"></path><rect width="18.7" height="36.8" x="50.1" y="35.8" fill="#FF7058"></rect><circle cx="59.5" cy="83.9" r="7.2" fill="#E6E9EE"></circle><circle cx="59.5" cy="83.9" r="5" fill="#324A5E"></circle><path fill="#FFF" d="M109,92.7l-18,4.6c-1.5,0.4-3.1-0.5-3.5-2.1L73.2,38.7c-0.4-1.5,0.5-3.1,2.1-3.5l18-4.6   c1.5-0.4,3.1,0.5,3.5,2.1l14.3,56.5C111.5,90.8,110.6,92.4,109,92.7z"></path><rect width="18.7" height="36.8" x="80.4" y="36.1" fill="#FFD05B" transform="rotate(-14.193 89.778 54.551)"></rect><circle cx="97" cy="83.2" r="7.2" fill="#E6E9EE"></circle><circle cx="97" cy="83.2" r="5" fill="#324A5E"></circle>
                                            </svg> 
                                        </div> 
                                        <div> 
                                            <h5 class="fw-bold">Widgets</h5> 
                                            <p class="mb-0"> 30+ widgets are included in this template. Please check out the best option that suits you. </p>
                                        </div> 
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                                    <div class="card features main-features main-features-4 wow fadeInUp reveal revealleft p-4 active"> 
                                        <div class="bg-img mb-2"> 
                                            <svg width="50" height="50" xmlns="http://www.w3.org/2000/svg" enable-background="new 0 0 128 128" viewBox="0 0 128 128"><circle cx="64" cy="64" r="63.5" fill="#FFD05B"></circle><path fill="#FFF" d="M30,103.8l0-79.7c0-1.8,1.5-3.3,3.3-3.3h50.1l0,11.4c0,1.8,1.5,3.3,3.3,3.3H98l0,68.3   c0,1.8-1.5,3.3-3.3,3.3H33.3C31.5,107.1,30,105.6,30,103.8z"></path><path fill="#E6E9EE" d="M83.3,20.9h11.4c1.8,0,3.3,1.5,3.3,3.3l0,11.4H86.6c-1.8,0-3.3-1.5-3.3-3.3L83.3,20.9z"></path><path fill="#CED5E0" d="M83.3,20.9h11.4c1.8,0,3.3,1.5,3.3,3.3l0,11.4L83.3,20.9z"></path><rect width="54.6" height="2.4" x="36.7" y="50.7" fill="#E6E9EE"></rect><rect width="54.6" height="2.4" x="36.7" y="58.2" fill="#E6E9EE"></rect><rect width="54.6" height="2.4" x="36.7" y="65.8" fill="#E6E9EE"></rect><rect width="54.6" height="2.4" x="36.7" y="73.4" fill="#E6E9EE"></rect><rect width="23.5" height="2.4" x="67.8" y="80.9" fill="#84DBFF"></rect><rect width="23.5" height="2.4" x="67.8" y="88.5" fill="#84DBFF"></rect><rect width="54.6" height="2.4" x="36.7" y="43.1" fill="#E6E9EE"></rect><rect width="29.6" height="2.4" x="36.7" y="35.6" fill="#84DBFF"></rect><path fill="#FF7058" d="M41.1,83.3c-4.4,4.4-4.4,11.5,0,15.9s11.5,4.4,15.9,0c4.4-4.4,4.4-11.5,0-15.9   C52.6,78.9,45.5,78.9,41.1,83.3z M41.9,84.1c3.4-3.4,8.7-3.8,12.6-1.3l-1.6,1.6c-3-1.7-6.9-1.3-9.5,1.2c-2.6,2.6-3,6.5-1.2,9.5   l-1.6,1.6C38.1,92.8,38.5,87.5,41.9,84.1z M43.1,94.3c-1.3-2.5-0.9-5.7,1.2-7.7c2.1-2.1,5.2-2.5,7.7-1.2L43.1,94.3z M54.9,88.2   c1.3,2.5,0.9,5.7-1.2,7.7c-2.1,2.1-5.2,2.5-7.7,1.2L54.9,88.2z M56.1,98.3c-3.4,3.4-8.7,3.8-12.6,1.3l1.6-1.6   c3,1.7,6.9,1.3,9.5-1.2c2.6-2.6,3-6.5,1.2-9.5l1.6-1.6C60,89.6,59.5,94.9,56.1,98.3z"></path>
                                            </svg> 
                                        </div> 
                                        <div> 
                                            <h5 class="fw-bold">Validation Forms</h5> 
                                            <p class="mb-0"> Different types of “Form Validation” are implemented in this Valex admin template and used strict validation rules. </p>
                                        </div> 
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                </section>
                <section class="section " id="about">
                    <div class="container text-center">
                        <p class="fs-12 fw-semibold text-success mb-1"><span class="landing-section-heading">Our Mission</span>
                        </p>
                        <div class="landing-title"></div>
                        <h3 class="fw-semibold mb-2"> Our mission is to make work meaningful. </h3>
                        <div class="row justify-content-center">
                            <div class="col-xl-7">
                                <p class="text-muted fs-15 mb-3 fw-normal">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut est dui, rutrum in nulla eu,</p>
                            </div>
                        </div> 
                        <div class="row justify-content-center align-items-center mx-0">
                            <div class="col-xxl-4 col-xl-5 col-lg-5 text-center text-lg-start">
                                <img src="../assets/images/dai_dien2.png" alt="" class="img-fluid"/>
                            </div>
                            <div class="col-xxl-8 col-xl-7 col-lg-7 pt-5 pb-0 px-lg-2 px-5 text-start">
                                <h4 class="text-lg-start fw-medium mb-4">We are a creative agency with a passion for design. </h4>
                                <div class="row">
                                    <div class="col-12 col-md-12">
                                        <div class="d-flex mb-2">
                                            <span>
                                                <i class="bx bxs-badge-check text-primary fs-18"></i>
                                            </span>
                                            <div class="ms-2">
                                                <h6 class="fw-medium mb-0">Quality &amp; Clean Code </h6>
                                                <p class=" text-muted mb-3"> The Valex admin code is maintained very cleanly and well-structured with proper comments. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-12">
                                        <div class="d-flex mb-2">
                                            <span>
                                                <i class="bx bxs-badge-check text-primary fs-18"></i>
                                            </span>
                                            <div class="ms-2">
                                                <h6 class="fw-medium mb-0">Well Documented</h6>
                                                <p class=" text-muted mb-3"> The documentation provides clear-cut material for the Valex admin template. The documentation is explained or instructed in such a way that every user can understand. </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 col-md-12">
                                        <div class="d-flex mb-2">
                                            <span>
                                                <i class="bx bxs-badge-check text-primary fs-18"></i>
                                            </span>
                                            <div class="ms-2">
                                                <h6 class="fw-medium mb-0">Switch Easily From One Color to Another Color style</h6>
                                                <p class=" text-muted">lorem ipsum, dolor sit var ameto condesetrat aiatel varen or damsenlel verman code Lorem ipsum, dolor sit amet consectetur </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> 
                        </div>
                    </div>
                </section>
                <section class="section section-bg " id="statistics">
                <div class="container text-center">
                    <p class="fs-12 fw-semibold text-success mb-1"><span class="landing-section-heading">Statistics</span>
                    </p>
                    <div class="landing-title"></div>
                    <h3 class="fw-semibold mb-2">More than 120+ projects completed.</h3>
                    <div class="row justify-content-center mb-5">
                        <div class="col-xl-7">
                            <p class="text-muted fs-15mb-0 fw-normal">We are proud to have top class clients and customers,which motivates us to work more on projects.</p>
                        </div>
                    </div>
                    <div class="row  g-2 justify-content-center">
                        <div class="col-xl-12">
                            <div class="row justify-content-evenly">
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                                    <div class="p-3 text-center rounded-2 bg-white border">
                                        <span class="mb-3 avatar avatar-lg rounded-2 bg-primary-transparent">
                                            <i class="fs-20 fe fe-grid"></i>
                                          </span>
                                          <h3 class="fw-semibold mb-0 text-dark">120+</h3>
                                        <p class="mb-1 fs-14 op-7 text-muted ">
                                            Projects
                                        </p>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                                    <div class="p-3 text-center rounded-2 bg-white border">
                                        <span class="mb-3 avatar avatar-lg rounded-2 bg-primary-transparent">
                                            <i class="fs-20 fe fe-user-plus"></i>
                                          </span>
                                          <h3 class="fw-semibold mb-0 text-dark">20K+</h3>
                                        <p class="mb-1 fs-14 op-7 text-muted ">
                                            Clients
                                        </p>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                                    <div class="p-3 text-center rounded-2 bg-white border">
                                        <span class="mb-3 avatar avatar-lg rounded-2 bg-primary-transparent">
                                            <i class="fs-20 fe fe-users"></i>
                                          </span>
                                          <h3 class="fw-semibold mb-0 text-dark">854</h3>
                                        <p class="mb-1 fs-14 op-7 text-muted ">
                                            Employees
                                        </p>
                                    </div>
                                </div>
                                <div class="col-xl-3 col-lg-4 col-md-6 col-sm-6 col-12 mb-3">
                                    <div class="p-3 text-center rounded-2 bg-white border">
                                        <span class="mb-3 avatar avatar-lg rounded-2 bg-primary-transparent">
                                            <i class="fs-20 fe fe-calendar"></i>
                                          </span>
                                          <h3 class="fw-semibold mb-0 text-dark">5+</h3>
                                        <p class="mb-1 fs-14 op-7 text-muted ">
                                            Years of Experience
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </section>
        
     </div>
  )
}
