import React, { useState, useEffect } from 'react';
import { getByToken, updateUser } from '../../api/UserApi';
import ShowNotification from '../../Utils/Notification';

export default function Profile() {
    const [user, setUser] = useState({});
    const [province, setProvince] = useState("");
    const [district, setDistrict] = useState("");
    const [ward, setWard] = useState("");
    const [fullName, setFullName] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getByToken();
                if (data) {
                    setUser(data);
                    setFullName(data.fullName || "");
                    setPhoneNumber(data.phoneNumber || "");
                    setProvince(data.province || "");
                    setDistrict(data.district || "");
                    setWard(data.ward || "");
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);

    const handleSubmit = async () => {
        const data = {
            fullName: fullName,
            phoneNumber: phoneNumber,
            address: `${province}, ${district}, ${ward}`
        };
        
        if (data.fullName && data.phoneNumber && data.address) {
            try {
                await updateUser(data);
                ShowNotification("success", "Thành Công", "Cập nhật thông tin thành công");
            } catch (error) {
                console.log(error);
                ShowNotification("error", "Thất Bại", "Có lỗi xảy ra, vui lòng thử lại!");
            }
        } else {
            ShowNotification("error", "Thất Bại", "Vui lòng nhập đầy đủ thông tin");
        }
    };

    return (
        <div className='container'>
            <div className="row text-start">
                <div className="col-xl-4 col-lg-5">
                    <div className="card mb-4">
                        <div className="card-body">
                            <div className="ps-0">
                                <div className="main-profile-overview">
                                    <div className="main-img-user profile-user">
                                        <img alt="" src="../assets/images/faces/6.jpg" />
                                    </div>
                                    <div className="d-flex justify-content-between mb-4">
                                        <div>
                                            <h5 className="main-profile-name">{user.fullName}</h5>
                                            <p className="main-profile-name-text">Web Designer</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card-body">
                            <div className="main-content-label tx-13 mg-b-25">
                                Contact
                            </div>
                            <div className="main-profile-contact-list">
                                <div className="media">
                                    <div className="media-icon bg-primary-transparent text-primary">
                                        <i className="icon ion-md-phone-portrait"></i>
                                    </div>
                                    <div className="media-body">
                                        <span>Mobile</span>
                                        <div>{user.phoneNumber ? user.phoneNumber : "Chưa được cập nhật!"}</div>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-icon bg-success-transparent text-success">
                                        <i className="icon ion-md"></i>
                                    </div>
                                    <div className="media-body">
                                        <span>Email</span>
                                        <div>{user.email ? user.email : "Chưa được cập nhật!"}</div>
                                    </div>
                                </div>
                                <div className="media">
                                    <div className="media-icon bg-info-transparent text-info">
                                        <i className="icon ion-md-locate"></i>
                                    </div>
                                    <div className="media-body">
                                        <span>Current Address</span>
                                        <div>{`${user.province}, ${user.district}, ${user.ward}`}</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-xl-8 col-lg-7">
                    <div className="card">
                        <div className="card-body">
                            <div className="mb-4 main-content-label">Personal Information</div>
                            <div className="form-group mb-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label className="form-label">Full Name</label>
                                    </div>
                                    <div className="col-md-9">
                                        <input type="text" className="form-control" 
                                            value={fullName}
                                            onChange={(e) => setFullName(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label className="form-label">Email</label>
                                    </div>
                                    <div className="col-md-9">
                                        <input type="text" className="form-control" placeholder={user.email} disabled />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label className="form-label">Phone</label>
                                    </div>
                                    <div className="col-md-9">
                                        <input type="text" className="form-control" 
                                            value={phoneNumber}
                                            onChange={(e) => setPhoneNumber(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label className="form-label">Tỉnh</label>
                                    </div>
                                    <div className="col-md-9">
                                        <input type="text" className="form-control" 
                                            value={province}
                                            onChange={(e) => setProvince(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label className="form-label">Huyện</label>
                                    </div>
                                    <div className="col-md-9">
                                        <input type="text" className="form-control"
                                            value={district}
                                            onChange={(e) => setDistrict(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                            <div className="form-group mb-3">
                                <div className="row">
                                    <div className="col-md-3">
                                        <label className="form-label">Xã</label>
                                    </div>
                                    <div className="col-md-9">
                                        <input type="text" className="form-control" 
                                            value={ward}
                                            onChange={(e) => setWard(e.target.value)} />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" onClick={handleSubmit} className="btn btn-primary waves-effect waves-light">Update Profile</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
