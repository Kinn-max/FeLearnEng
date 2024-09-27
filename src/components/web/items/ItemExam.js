import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemExam({exam}) {

  return (
      <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <Link to={"/study-exam/"+exam.id}>
            <div class="card  d-flex justify-content-center py-3" style={{boxShadow:"none"}}>
                <div className='d-flex justify-content-center'>
                    <img src={`data:image/jpeg;base64,${exam.image}`} style={{ width: '200px' ,height:"150px"}}  class="" alt="..."/>
                </div>
                <div class="card-body">
                    <h6 class="card-title fw-semibold">{exam.name}</h6>
                    <p class="card-text text-muted">{exam.description}</p>
                </div>
                <div class="card-footer">
                    <span class="card-text">Cập nhật ngày cuối: {exam.createdAt}</span>
                </div>
            </div>
             </Link>
        </div>
  )
}
