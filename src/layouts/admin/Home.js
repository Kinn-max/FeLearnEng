import React from 'react'

export default function Home() {
  return (
    <div class="row row-sm">
        <div class="col-sm-12 col-xl-3 col-lg-12 col-md-12">
            <div class="card ">
                <div class="card-body">
                    <div class="counter-status d-flex md-mb-0">
                        <div class="counter-icon bg-primary-transparent">
                            <i class="icon-layers text-primary"></i>
                        </div>
                        <div class="ms-auto pe-5">
                            <h5 class="fs-13">TOPIC</h5>
                            <h2 class="mb-0 fs-22 mb-1 mt-1">12</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-xl-3 col-lg-12 col-md-12">
            <div class="card ">
                <div class="card-body">
                    <div class="counter-status d-flex md-mb-0">
                        <div class="counter-icon bg-danger-transparent">
                            <i class="icon-paypal text-danger"></i>
                        </div>
                        <div class="ms-auto">
                            <h5 class="fs-13 pe-5">EXAM</h5>
                            <h2 class="mb-0 fs-22 mb-1 mt-1">2</h2>
                            
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-xl-3 col-lg-12 col-md-12">
            <div class="card ">
                <div class="card-body">
                    <div class="counter-status d-flex md-mb-0">
                        <div class="counter-icon bg-success-transparent">
                            <i class="icon-rocket text-success"></i>
                        </div>
                        <div class="ms-auto ">
                            <h5 class="fs-13 pe-5">PARAGRAPH</h5>
                            <h2 class="mb-0 fs-22 mb-1 mt-1">6</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-sm-12 col-xl-3 col-lg-12 col-md-12">
            <div class="card ">
                <div class="card-body">
                    <div class="counter-status d-flex md-mb-0">
                        <div class="counter-icon bg-success-transparent">
                            <i class="icon-user text-success"></i>
                        </div>
                        <div class="ms-auto ">
                            <h5 class="fs-13 pe-5">USER</h5>
                            <h2 class="mb-0 fs-22 mb-1 mt-1">1,890</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
