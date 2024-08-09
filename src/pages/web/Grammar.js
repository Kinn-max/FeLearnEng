import React from 'react'
import ItemCategory from '../../components/web/items/ItemCategory'
import { Link } from 'react-router-dom'

export default function Grammar() {
  return (
    <div className='container text-start'>
            <div class="row">
                <div class="col-xxl-3 col-xl-6 col-lg-6  col-sm-6">
                    <div class="card">
                        <div class="card-header pb-0">
                            <h3 class="card-title">Latest Posts</h3>
                        </div>
                        <div class="card-body pt-1">
                            <div class="list-catergory1">
                                <div class="item-list">
                                    <ul class="list-group mb-0">
                                        <ItemCategory/>
                                        <ItemCategory/>
                                        <ItemCategory/>
                                        <ItemCategory/>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Link to={"/grammar/detail"}>
                    <div class="col-xxl-4 col-xl-6 col-lg-12 col-md-12">
                        <div class="card custom-card">
                            <a href="blog-details.html">
                                <img class="card-img-top w-100 w-100" src="../assets/images/media/media-85.jpg" alt=""/>
                            </a>
                            <div class="card-body">
                                <a href="javascript:void(0);" class="mt-4"><h5 class="font-weight-semibold text-dark">Best Place To visit For a Holiday idea of denouncing pleasure?</h5></a>
                                <p class="mb-0 mt-3">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.</p>

                            </div>
                            <div class="card-footer p-3">
                                <div class="item7-card-desc d-sm-flex mt-0">
                                    <a href="javascript:void(0);" class="d-flex"><span class="fe fe-user text-muted me-2 fs-17"></span><div class="mt-0 mt-0  font-weight-semibold text-muted">Anna Ogden</div></a>
                                    <div class="d-flex ms-auto">
                                        <a href="javascript:void(0);" class="d-flex me-3"><span class="fe fe-calendar text-muted me-2 fs-17"></span><div class="mt-0 mt-0  font-weight-semibold text-muted">Jan-18-2020</div></a>
                                        <a class="me-0 d-flex" href="javascript:void(0);"><span class="fe fe-message-square text-muted me-2 fs-17"></span><div class="mt-0 mt-0  font-weight-semibold text-muted">12 Comments</div></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </Link>
                <div class="col-xxl-4 col-xl-6 col-lg-12 col-md-12">
                    <div class="card custom-card">
                        <a href="blog-details.html">
                            <img class="card-img-top w-100 w-100" src="../assets/images/media/media-85.jpg" alt=""/>
                        </a>
                        <div class="card-body">
                            <a href="javascript:void(0);" class="mt-4"><h5 class="font-weight-semibold text-dark">Best Place To visit For a Holiday idea of denouncing pleasure?</h5></a>
                            <p class="mb-0 mt-3">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.</p>

                        </div>
                        <div class="card-footer p-3">
                            <div class="item7-card-desc d-sm-flex mt-0">
                                <a href="javascript:void(0);" class="d-flex"><span class="fe fe-user text-muted me-2 fs-17"></span><div class="mt-0 mt-0  font-weight-semibold text-muted">Anna Ogden</div></a>
                                <div class="d-flex ms-auto">
                                    <a href="javascript:void(0);" class="d-flex me-3"><span class="fe fe-calendar text-muted me-2 fs-17"></span><div class="mt-0 mt-0  font-weight-semibold text-muted">Jan-18-2020</div></a>
                                    <a class="me-0 d-flex" href="javascript:void(0);"><span class="fe fe-message-square text-muted me-2 fs-17"></span><div class="mt-0 mt-0  font-weight-semibold text-muted">12 Comments</div></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
            <div class="col-xxl-4 col-xl-6 col-lg-12 col-md-12">
                    <div class="card custom-card">
                        <a href="blog-details.html">
                            <img class="card-img-top w-100 w-100" src="../assets/images/media/media-85.jpg" alt=""/>
                        </a>
                        <div class="card-body">
                            <a href="javascript:void(0);" class="mt-4"><h5 class="font-weight-semibold text-dark">Best Place To visit For a Holiday idea of denouncing pleasure?</h5></a>
                            <p class="mb-0 mt-3">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.</p>

                        </div>
                        <div class="card-footer p-3">
                            <div class="item7-card-desc d-sm-flex mt-0">
                                <a href="javascript:void(0);" class="d-flex"><span class="fe fe-user text-muted me-2 fs-17"></span><div class="mt-0 mt-0  font-weight-semibold text-muted">Anna Ogden</div></a>
                                <div class="d-flex ms-auto">
                                    <a href="javascript:void(0);" class="d-flex me-3"><span class="fe fe-calendar text-muted me-2 fs-17"></span><div class="mt-0 mt-0  font-weight-semibold text-muted">Jan-18-2020</div></a>
                                    <a class="me-0 d-flex" href="javascript:void(0);"><span class="fe fe-message-square text-muted me-2 fs-17"></span><div class="mt-0 mt-0  font-weight-semibold text-muted">12 Comments</div></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-4 col-xl-6 col-lg-12 col-md-12">
                    <div class="card custom-card">
                        <a href="blog-details.html">
                            <img class="card-img-top w-100 w-100" src="../assets/images/media/media-85.jpg" alt=""/>
                        </a>
                        <div class="card-body">
                            <a href="javascript:void(0);" class="mt-4"><h5 class="font-weight-semibold text-dark">Best Place To visit For a Holiday idea of denouncing pleasure?</h5></a>
                            <p class="mb-0 mt-3">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.</p>

                        </div>
                        <div class="card-footer p-3">
                            <div class="item7-card-desc d-sm-flex mt-0">
                                <a href="javascript:void(0);" class="d-flex"><span class="fe fe-user text-muted me-2 fs-17"></span><div class="mt-0 mt-0  font-weight-semibold text-muted">Anna Ogden</div></a>
                                <div class="d-flex ms-auto">
                                    <a href="javascript:void(0);" class="d-flex me-3"><span class="fe fe-calendar text-muted me-2 fs-17"></span><div class="mt-0 mt-0  font-weight-semibold text-muted">Jan-18-2020</div></a>
                                    <a class="me-0 d-flex" href="javascript:void(0);"><span class="fe fe-message-square text-muted me-2 fs-17"></span><div class="mt-0 mt-0  font-weight-semibold text-muted">12 Comments</div></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xxl-4 col-xl-6 col-lg-12 col-md-12">
                    <div class="card custom-card">
                        <a href="blog-details.html">
                            <img class="card-img-top w-100 w-100" src="../assets/images/media/media-85.jpg" alt=""/>
                        </a>
                        <div class="card-body">
                            <a href="javascript:void(0);" class="mt-4"><h5 class="font-weight-semibold text-dark">Best Place To visit For a Holiday idea of denouncing pleasure?</h5></a>
                            <p class="mb-0 mt-3">I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure.</p>

                        </div>
                        <div class="card-footer p-3">
                            <div class="item7-card-desc d-sm-flex mt-0">
                                <a href="javascript:void(0);" class="d-flex"><span class="fe fe-user text-muted me-2 fs-17"></span><div class="mt-0 mt-0  font-weight-semibold text-muted">Anna Ogden</div></a>
                                <div class="d-flex ms-auto">
                                    <a href="javascript:void(0);" class="d-flex me-3"><span class="fe fe-calendar text-muted me-2 fs-17"></span><div class="mt-0 mt-0  font-weight-semibold text-muted">Jan-18-2020</div></a>
                                    <a class="me-0 d-flex" href="javascript:void(0);"><span class="fe fe-message-square text-muted me-2 fs-17"></span><div class="mt-0 mt-0  font-weight-semibold text-muted">12 Comments</div></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
