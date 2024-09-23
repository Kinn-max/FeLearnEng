import React, { useState } from 'react'
import { useEffect } from 'react'
import { getByUser } from '../../api/UserApi';
import { jwtDecode } from 'jwt-decode';

export default function Profile() {
    const [user,setUser] = useState([])
    const [userId,setUserId] = useState(null)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getByUser(userId);
                if (data) {
                    setUser(data);
                }
            } catch (error) {
                console.log(error);
            } 
        };

        fetchData();
    }, [userId]);
    try {
        const token = localStorage.getItem('jwtToken');
        const jwt = jwtDecode(token)
        setUserId(jwt.userId)
    } catch (error) {
        return(
            <div>Bạn phải đăng nhập trước</div>
        )
    }
    

  return (
       <div className='container'>
            <div class="row text-start">
                <div class="col-xl-4 col-lg-5">
                    <div class="card mb-4">
                        <div class="card-body">
                            <div class="ps-0">
                                <div class="main-profile-overview">
                                    <div class="main-img-user profile-user">
                                        <img alt="" src="../assets/images/faces/6.jpg"/>
                                    </div>
                                    <div class="d-flex justify-content-between mb-4">
                                        <div>
                                            <h5 class="main-profile-name">Petey Cruiser</h5>
                                            <p class="main-profile-name-text">Web Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card">
                        <div class="card-body">
                            <div class="main-content-label tx-13 mg-b-25">
                                contact
                            </div>
                            <div class="main-profile-contact-list">
                                <div class="media">
                                    <div class="media-icon bg-primary-transparent text-primary">
                                        <i class="icon ion-md-phone-portrait"></i>
                                    </div>
                                    <div class="media-body">
                                        <span>Mobile</span>
                                        <div>
                                            +245 354 654
                                        </div>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="media-icon bg-success-transparent text-success">
                                        <i class="icon ion-logo-slack"></i>
                                    </div>
                                    <div class="media-body">
                                        <span>Slack</span>
                                        <div>
                                            @spruko.w
                                        </div>
                                    </div>
                                </div>
                                <div class="media">
                                    <div class="media-icon bg-info-transparent text-info">
                                        <i class="icon ion-md-locate"></i>
                                    </div>
                                    <div class="media-body">
                                        <span>Current Address</span>
                                        <div>
                                            San Francisco, CA
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-xl-8 col-lg-7">
                    <div class="card">
                        <div class="card-body">
                            <div class="mb-4 main-content-label">Personal Information</div>
                            <form class="form-horizontal">
                                <div class="form-group mb-3">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label class="form-label">Full Name</label>
                                        </div>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" placeholder="User Name" value=""/>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group mb-3">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label class="form-label">Email</label>
                                        </div>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" placeholder="Email" value="info@Valex.in"/>
                                        </div>
                                    </div>
                                </div>
                                <div class="form-group mb-3">
                                    <div class="row">
                                        <div class="col-md-3">
                                            <label class="form-label">Phone</label>
                                        </div>
                                        <div class="col-md-9">
                                            <input type="text" class="form-control" placeholder="phone number" value="+245 354 654"/>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div class="mb-3 col-xl-4">
                                        <label for="word-type" class="form-label fs-14 text-dark">Tỉnh</label>
                                        <select class="form-select" id="word-type" aria-label="Default select example" fdprocessedid="cilsbn">
                                            <option value="" disabled="">Chọn từ loại</option>
                                            <option value="N">Danh từ</option>
                                            <option value="V">Động từ</option>
                                            <option value="Adv">Trạng từ</option>
                                            <option value="Adj">Tính từ</option>
                                        </select>
                                    </div>
                                    <div class="mb-3 col-xl-4">
                                        <label for="word-type" class="form-label fs-14 text-dark">Huyện/Quận</label>
                                        <select class="form-select" id="word-type" aria-label="Default select example" fdprocessedid="cilsbn">
                                            <option value="" disabled="">Chọn từ loại</option>
                                            <option value="N">Danh từ</option>
                                            <option value="V">Động từ</option>
                                            <option value="Adv">Trạng từ</option>
                                            <option value="Adj">Tính từ</option>
                                        </select>
                                    </div>
                                    <div class="mb-3 col-xl-4">
                                        <label for="word-type" class="form-label fs-14 text-dark">Xã</label>
                                        <select class="form-select" id="word-type" aria-label="Default select example" fdprocessedid="cilsbn">
                                            <option value="" disabled="">Chọn từ loại</option>
                                            <option value="N">Danh từ</option>
                                            <option value="V">Động từ</option>
                                            <option value="Adv">Trạng từ</option>
                                            <option value="Adj">Tính từ</option>
                                        </select>
                                    </div>
                                     </div>
                                     <div class="form-group mb-3">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <label class="form-label">Ngõ, hẻm, xóm,...</label>
                                            </div>
                                            <div class="col-md-9">
                                                <input type="text" class="form-control" placeholder="phone number" value="Nhập đây"/>
                                            </div>
                                        </div>
                                    </div>
                            </form>
                        </div>
                        <div class="card-footer">
                            <button type="submit" class="btn btn-primary waves-effect waves-light">Update Profile</button>
                        </div>
                    </div>
                </div>
            </div>
       </div>
  )
}
