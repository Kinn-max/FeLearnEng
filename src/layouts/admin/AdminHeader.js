import React from 'react';
import { Link } from 'react-router-dom';


export default function AdminHeader() {

    return (
        <nav class="navbar back-ground-custom navbar-expand-lg bg-light mb-4">
            <div class="container">
                <a class="navbar-brand" href="javascript:void(0);">
                    <img src="../assets/images/logo.png" alt="" class="d-inline-block align-text-top"/>
                </a>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item fs-5">
                            <Link class="nav-link" aria-current="page" to={"#"}>Quản lý website của bạn</Link>
                        </li>
                    </ul>
                    <div class="btn-list fs-3 d-flex align-items-center">
                           <span className='fs-6'> Xin chào, Admin</span>
                             <i class="bx bx-user px-2"></i>   
                    </div>
                </div>
            </div>
         </nav>
    );
}
