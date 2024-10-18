import React from 'react'
import { Link } from 'react-router-dom'

export default function Menu() {
  return (
    <div class="col-lg-4 col-xl-2 pe-0 h-100">
        <div class="card">
            <div class="card-header">
                <div class="card-title">Danh sách tùy chọn</div>
            </div>
            <div class="main-content-left main-content-left-mail card-body pt-0 ">
                <div class="main-settings-menu">
                    <nav class="nav main-nav-column">
                        <Link className="nav-link thumb active mb-2" to="/admin/home"><i className="fe fe-home"></i> Main </Link>
                        <Link class="nav-link border-top-0 thumb mb-2" to={"/admin/order"}><i class="fe fe-grid"></i>Orders</Link>
                        <Link class="nav-link border-top-0 thumb mb-2" to={"/admin/topic"}><i class="fe fe-grid"></i> Topic</Link>
                        <Link class="nav-link border-top-0 thumb mb-2" to={"/admin/category"}><i class="fe fe-bell"></i>Catalog</Link>
                        <Link class="nav-link border-top-0 thumb mb-2" to={"/admin/exam"}><i class="fe fe-globe"></i>Exam</Link>
                        <Link class="nav-link border-top-0 thumb mb-2" to={"/admin/grammar"}><i class="fe fe-layers"></i>Grammar</Link>
                        <Link class="nav-link border-top-0 thumb mb-2" to={"/admin/user-list"}><i class="fe fe-user"></i>User</Link>
                    </nav>
                    <div class="btn-list">
                        <Link class="btn btn-outline-primary" to={"/"}><i class="fe fe-log-in me-2"></i>Checkout</Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
