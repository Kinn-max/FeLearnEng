import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemVocabulary() {
  return (
        <div class="col-xl-3 text-start">
            <div class="card custom-card">
                <div class="card-body">
                    <img src="https://tse3.mm.bing.net/th?id=OIP.C9aMhBLFN8-2KhuI6_5XzAHaFj&pid=Api&P=0&h=180" class="card-img mb-3" alt="..."/>
                    <h6 class="card-title fw-semibold">Job</h6>
                    <p class="card-text">With supporting text below as a natural
                        lead-in to additional content.</p>
                    <div class="btn-list d-flex justify-content-center">
                        <Link to={"/study/study-vocabulary"}>
                            <button  class="btn btn-primary">Learning</button>
                         </Link>
                         <Link to={"/study/practice-vocabulary"}>
                            <button type="button" class="btn btn-success btn-wave waves-effect waves-light">Practice</button>
                         </Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

