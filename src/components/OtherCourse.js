import React from 'react'
import { Link } from 'react-router-dom'

export default function OtherCourse({item}) {
  return (
    <div class="col-xl-3 col-md-6 my-2">
       <div class="card  item-card " style={{ height: "370px"}}>
        <div class="card-body pb-0">
            <div class="d-flex justify-content-center align-items-center" style={{ width: "150px", height: "150px", margin: "0 auto" }}>
            <img src={`data:image/jpeg;base64,${item.image}`} alt="img" class="w-100 h-100" />
            </div>
            <div class="card-body p-0 pt-4">
            <div class="cardtitle text-start">
                <span className='fs-6'>{item.name}</span>
            </div>
            <div class="cardprice text-end">
                <span className='fs-5 text-danger fw-semibold'>{item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span>
            </div>
            </div>
        </div>
        <div class="text-center border-top py-3 px-2">
            <Link to={"/book-detail/" + item.id} class="btn btn-primary my-1">
            <i class="fe fe-eye me-1"></i> View More
            </Link>
        </div>
        </div>

    </div>
  )
}
