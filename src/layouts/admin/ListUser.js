import React, { useEffect, useState } from 'react';
import { deleteUser, getAllUser, getItemUserSearch, setRoleOfUser, statusUser } from '../../api/UserApi';
import ShowNotification from '../../Utils/Notification';

export default function ListUser() {
    const [listUser, setListUser] = useState([]);
    const [reload, setReload] = useState(false);
    const [nameSearch, setNameSearch] = useState("");

    useEffect(() => {
        const fetchData = async () => {
            try {
                const list = await getAllUser();
                if (list) {
                    setListUser(list);
                }
            } catch (error) {
                console.log(error);
            } 
        };

        fetchData();
    }, [reload]);

    // Handle status update
    const handleStatusUser = async (id) => {
        try {
            await statusUser(id);  
            ShowNotification("success", "Thành công");
            setReload(prev => !prev);    
        } catch (error) {
            console.error('Error:', error);
            ShowNotification("error", "Lỗi", "Đã có lỗi xảy ra");
        }
    };

    // Handle delete
    const handleDelete = async (id) => {
        try {
            await deleteUser(id);  
            ShowNotification("success", "Thành công");
            setReload(prev => !prev);    
        } catch (error) {
            console.error('Error:', error);
            ShowNotification("error", "Lỗi", "Đã có lỗi xảy ra");
        }
    };

    // Handle search
    const handleSearchUser = async (name) => {
        setNameSearch(name);
        if (name.trim()) {
            try {
                const data = await getItemUserSearch(name); 
                setListUser(data);
            } catch (error) {
                console.error('Error:', error);
                ShowNotification("error", "Lỗi", "Đã có lỗi xảy ra");
            }
        } else {
            const data = await getAllUser();
            setListUser(data);
        }
    };
    const handleAccessControl= async(role,id)=>{
        try {
            await setRoleOfUser(role,id)
            ShowNotification("success", "Thành công","Cấp quyền thành công");
            setReload(true)
        } catch (error) {
            console.log(error)
        }
    }
    
    return (
        <>
                <div className="card custom-card">
                    <div className="card-header px-5 pt-5 pb-3 justify-content-between">
                        <div className="card-title">
                            Danh sách người dùng
                        </div>
                        <div className="card-title d-flex">
                            <div className="card-body p-2" style={{ width: "380px" }}>
                                <div className="input-group">
                                    <input 
                                        type="text" 
                                        className="form-control" 
                                        placeholder="Tìm kiếm theo tên hoặc email"
                                        value={nameSearch}
                                        onChange={(e) => handleSearchUser(e.target.value)}
                                        />
                                    <button className="btn btn-primary" type="button">Tìm kiếm</button>
                                </div>
                            </div>
                        </div>
                    </div>     
           {listUser.length > 0 ? (
                    <div className="card-body">
                        <div className="row">
                            <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 grid-margin">
                                <div className="table-responsive border border-bottom-0 userlist-table">
                                    <table className="table card-table table-vcenter text-nowrap mb-0">
                                        <thead>
                                            <tr>
                                                <th><span>Stt</span></th>
                                                <th><span>Ảnh</span></th>
                                                <th><span>Tên</span></th>
                                                <th><span>Ngày tạo</span></th>
                                                <th><span>Trạng thái</span></th>
                                                <th><span>Email</span></th>
                                                <th><span>Khóa</span></th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {listUser.map((item, index) => (
                                                <tr key={item.id}>
                                                    <td>{index + 1}</td>
                                                    <td>
                                                        <img alt="avatar" className="rounded-circle avatar-md avatar" src="../assets/images/faces/1.jpg" />
                                                    </td>
                                                    <td>{item.fullName}</td>
                                                    <td>{item.createdAt}</td>
                                                    <td>
                                                        {item.active ? (
                                                            <span className="badge bg-success-transparent">Active</span>
                                                        ) : (
                                                            <span className="badge bg-danger-transparent">Not Active</span>
                                                        )}
                                                    </td>
                                                    <td>{item.email}</td>
                                                    <td>
                                                        <label className="form-switch float-end mb-0" style={{ cursor: 'pointer' }}>
                                                            <input 
                                                                type="checkbox"
                                                                name="form-switch-checkbox3" 
                                                                checked={!item.active} 
                                                                value={item.id}
                                                                className="form-switch-input"
                                                                onChange={() => handleStatusUser(item.id)}
                                                            />
                                                            <span className="form-switch-indicator custom-radius"></span>
                                                        </label>
                                                    </td>
                                                    <td>
                                                        <a href="javascript:void(0);" className="btn btn-sm btn-primary" data-bs-toggle="tooltip" title="Tùy chỉnh">
                                                            <i className="las la-search"></i>
                                                        </a>
                                                        <button 
                                                            onClick={() => handleDelete(item.id)} 
                                                            className="btn mx-1 btn-sm btn-danger" 
                                                            data-bs-toggle="tooltip" 
                                                            title="Delete"
                                                        >
                                                            <i className="las la-trash"></i>
                                                        </button>
                                                            <div class="btn btn-sm btn-success">
                                                                <button type="button" class="btn btn-success p-0 m-0 dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" fdprocessedid="fmntw7">
                                                                    <span class="visually-hidden"></span>
                                                                </button>
                                                                <ul className="dropdown-menu p-0">
                                                                    <li>
                                                                        <button className="dropdown-item bg-danger-transparent" 
                                                                            onClick={() => handleAccessControl(3, item.id)}>
                                                                            Nhân viên
                                                                        </button>
                                                                        <button className="dropdown-item bg-success-transparent" 
                                                                            onClick={() => handleAccessControl(2, item.id)}>
                                                                            Khách hàng
                                                                        </button>
                                                                    </li>
                                                                </ul>
                                                            </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                        <div className="card-footer border border-0 d-flex justify-content-end">
                            <nav aria-label="Page navigation" className="pagination-style-3">
                                <ul className="pagination mb-0 flex-wrap">
                                    <li className="page-item disabled">
                                        <a className="page-link" href="javascript:void(0);">Prev</a>
                                    </li>
                                    <li className="page-item active"><a className="page-link" href="javascript:void(0);">1</a></li>
                                    <li className="page-item"><a className="page-link" href="javascript:void(0);">2</a></li>
                                    <li className="page-item">
                                        <a className="page-link" href="javascript:void(0);">
                                            <i className="bi bi-three-dots"></i>
                                        </a>
                                    </li>
                                    <li className="page-item"><a className="page-link" href="javascript:void(0);">16</a></li>
                                    <li className="page-item">
                                        <a className="page-link text-primary" href="javascript:void(0);">next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
            ) : (
                <div>Chưa có tài khoản nào được đăng ký!</div> 
            )}
                </div>
        </>
    );
}
