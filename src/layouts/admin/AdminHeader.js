import React from 'react'

export default function AdminHeader() {
  return (
    <nav class="navbar navbar-expand-lg background-header-main bg-light ">
        <div class="container">
            <a class="navbar-brand" href="javascript:void(0);">
                <img src="../assets/images/brand-logos/toggle-logo.png" alt="" class="d-inline-block align-text-top"/>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarSupportedContent">
                <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                <li className='fs-4 fw-semibold'>CHÀO MỪNG TRỞ LẠI</li>
                </ul>
                <form class="d-flex px-5" role="search">
                    <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                    <button class="btn btn-primary w-50 " type="submit">Tìm kiếm</button>
                </form>
                <div class="btn-list d-flex align-items-center">
                    <h3 className='fs-5 fw-normal'>Xin chào, Admin!</h3>
                    <div>
                        <i class="bx bx-user fs-4"></i> 
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}
