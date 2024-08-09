
import React from 'react'
import { Link } from 'react-router-dom'

export default function ItemParagraph() {
  return (
        <div class="col-xl-3">
            <Link to={"/study/paragraph-practice"}>
                <div class="card text-center custom-card">
                    <div class="card-body">
                        <div class="mb-2">
                            <span class="">
                                <img src="../assets/images/faces/3.jpg"  alt="img"/>
                            </span>
                        </div>
                        <h6 class="card-title fw-semibold">Why do we use it?</h6>
                        <p class="card-text">Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.</p>
                        <a href="javascript:void(0);" class="btn btn-primary">Go somewhere</a>
                    </div>
                    <div className='card-footer'>
                        <div class="btn-list">
                            Level:
                             <button type="button" class="btn btn-info rounded-pill btn-wave waves-effect waves-light">A2</button>
                             <button type="button" class="btn btn-warning rounded-pill btn-wave waves-effect waves-light">B</button>
                        </div>
                    </div>
                </div>
            </Link>
        </div>
  )
}
