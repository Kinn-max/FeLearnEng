import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemExam() {
  return (
      <div class="col-xxl-3 col-xl-6 col-lg-6 col-md-6 col-sm-12">
            <Link to={"/study/exam"}>
            <div class="card custom-card">
                <img src="../assets/images/media/media-22.jpg" class="card-img-top" alt="..."/>
                <div class="card-body">
                    <h6 class="card-title fw-semibold">25 câu hỏi về thì</h6>
                    <p class="card-text text-muted">when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                </div>
                <div class="card-footer">
                    <span class="card-text">Last updated 3 mins ago</span>
                </div>
            </div>
             </Link>
        </div>
  )
}
