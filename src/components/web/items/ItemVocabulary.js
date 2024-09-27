import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemVocabulary({vocabulary}) {
  return (
        <div class="col-xl-3 text-start">
            <div class="border custom-card">
                <div class="card-body">
                    <img style={{width: "200px", height: "120px"}} src={`data:image/jpeg;base64,${vocabulary.image}`}  class="card-img mb-3" alt="..."/>
                    <h6 class="card-title fw-semibold">{vocabulary.name}</h6>
                    <p class="card-text">{vocabulary.description}</p>
                    <div class="btn-list d-flex justify-content-center">
                        <Link to={"/study-learn/"+vocabulary.id}>
                            <button  class="btn btn-primary">Learning</button>
                         </Link>
                         <Link to={"/study-practice/"+vocabulary.id}>
                            <button type="button" class="btn btn-success btn-wave waves-effect waves-light">Practice</button>
                         </Link>
                    </div>
                </div>
            </div>
        </div>
  )
}

