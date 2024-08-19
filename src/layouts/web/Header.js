
import { Link, NavLink } from "react-router-dom";



const Header = ()=>{


    return(
        <nav class="navbar back-ground-custom navbar-expand-lg bg-light mb-4">
            <div class="container">
                <a class="navbar-brand" href="javascript:void(0);">
                    <img src="../assets/images/logo.png" alt="" class="d-inline-block align-text-top"/>
                </a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <Link class="nav-link active" aria-current="page" to={"/"}>Trang chủ</Link>
                        </li>
                        <li class="nav-item">
                        <NavLink className="nav-link" to={"/book"}>Sách</NavLink>
                        </li>
                        <li class="nav-item">
                        <NavLink className="nav-link" to={"/study"}>Luyện tập</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to={"/grammar"}>Lý thuyết ngữ pháp</NavLink>
                        </li>
                        <li class="nav-item">
                            <NavLink className="nav-link" to={"/about"}>Về chúng tôi</NavLink>
                        </li>
                    </ul>
                    <form class="d-flex px-5" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button class="btn btn-primary w-50 " type="submit">Tìm kiếm</button>
                    </form>
                    <div class="btn-list fs-2 d-flex align-items-center">
                         <i class="bx bx-cart px-2"></i>
                         <Link to={"/login"}>
                             <button type="button" class="btn btn-danger fs-6 rounded-pill btn-wave waves-effect waves-light">Sign in</button>
                         </Link>
                    </div>
                </div>
            </div>
         </nav>
    )
}
export default Header;