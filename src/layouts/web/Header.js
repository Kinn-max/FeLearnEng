import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getItemSearch } from "../../api/SearchApi";
import { jwtDecode } from "jwt-decode";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [inputValue, setInputValue] = useState('');
  const [data, setData] = useState([]);
  const [fullName,setFullName]=useState('');
  const handleInput =()=>{
    setIsOpen(false)
    setData([])
    setInputValue("")
  }
  const token = localStorage.getItem('jwtToken');
  //get fullName token
  useEffect(() => {
    if (token && typeof token === 'string') {
      const userData = jwtDecode(token);
      if (userData && userData.fullName) {
        setFullName(userData.fullName); 
      }
    }
  }, []);
  const handleLogout = () => {
    localStorage.removeItem('jwtToken');
    setTimeout(() => {
      window.location.href = '/'; 
  }, 1000);
  }
  const handleChange = async(e) => {
    (inputValue.trim().length > 0)?setIsOpen(true):setIsOpen(false)
    const value = e.target.value;
    setInputValue(value);
    let data;
    if(inputValue !== ""){
       data= await getItemSearch(inputValue);
    }
    setData(data)
};
  return (
    <nav className="navbar back-ground-custom navbar-expand-lg bg-light mb-4">
      <div className="container">
        <Link className="navbar-brand" to={"/"}>
          <img src="../assets/images/logo.png" alt="" className="d-inline-block align-text-top" />
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to={"/"}>Trang chủ</Link>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/book"}>Sách</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/study"}>Luyện tập</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/grammar"}>Lý thuyết ngữ pháp</NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to={"/about"}>Về chúng tôi</NavLink>
            </li>
          </ul>
          <form className="d-flex px-5 position-relative" role="search">
            <input className="form-control me-2" type="search" placeholder="Search" 
                value={inputValue}
                onChange={handleChange} aria-label="Search" />
            <button className="btn btn-primary w-50" onClick={handleChange}>Tìm kiếm</button>
            {isOpen && data && (
              <div className="list-group py-2 position-absolute w-100" style={{ top: '100%', zIndex: 5000 }}>
                <div className="card bg-body">
                  <div className="overflow-hidden">
                    <div className="rating-scroll">
                      {data.map((item, index) => (
                        <Link
                            key={index}
                            to={
                              item.type === "PRODUCT" ? "/book-detail/" + item.id :
                              item.type === "VOCABULARY" ? "/study-learn/" + item.id :
                              item.type === "EXAM" ? "/study-exam/" + item.id :
                              item.type === "GRAMMAR" ? "/grammar/"+item.id :
                              "#"  
                            }
                            onClick={handleInput}
                         >
                          <div key={index} className="px-3 py-3 border-bottom">
                            <div className="media mt-0">
                              <div className="d-flex me-3">
                                  <img
                                    className="media-object avatar rounded-circle w-7 h-7"
                                    alt="64x64"
                                    src={`data:image/jpeg;base64,${item.image}`}
                                  />
                              </div>
                              <div className="media-body text-start">
                                <div className="d-flex">
                                  <h6 className="mt-0 mb-0 fw-medium fs-14">{item.name}</h6>
                                </div>
                                <div className="d-flex">
                                  <p className="fs-12 text-muted mb-0">{item.source}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </form>
          <div className="btn-list fs-2 d-flex align-items-center">
            <Link to={"/cart"}>
              <i className="bx bx-cart px-2"></i>
            </Link>
            <Link to={"/profile"} className="fs-3">
              <i className="bx bx-user"></i>
            </Link>
           
            {fullName?(
                <div className="pt-2 d-flex align-items-center">
                  <span className="fs-6">Xin chào, {fullName}</span>
                  <div class="dropdown">
                    <button class="btn   p-0 m-0 dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    </button>
                    <ul class="dropdown-menu">
                      <li><button class="dropdown-item"
                          onClick={handleLogout} >Đăng xuất</button></li>
                    </ul>
                  </div>
                </div>
            ):(  <Link to={"/login"}>
                   <button type="button" className="btn btn-danger fs-6 rounded-pill btn-wave waves-effect waves-light">Sign in</button>
                 </Link> )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
