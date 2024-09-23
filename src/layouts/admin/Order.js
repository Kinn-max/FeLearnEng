import React, { useEffect, useState } from 'react'
import { getAllOrder, orderStatusConfirm } from '../../api/OrderApi';

export default function Order() {
    const [listOrder,setListOrder] = useState([])
    const [change,setChange] = useState(false)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getAllOrder();
                console.log(data)
                if (data) {
                    setListOrder(data);
                }
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [change]);
    const handleConfirmOrder = async(method,id)=>{
        try {
            const response = await orderStatusConfirm(method,id)
            setChange(pre=>!pre)
        } catch (error) {
            
        }
    }
  return (
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
                                />
                                <button className="btn btn-primary" type="button">Tìm kiếm</button>
                            </div>
                        </div>
                    </div>
                </div>     
                <div className="card-body">
                    <div className="row">
                        <div className="col-sm-12 col-md-12 col-lg-12 col-xl-12 grid-margin">
                            <div className="table-responsive border border-bottom-0 userlist-table">
                                <table className="table card-table table-vcenter text-nowrap mb-0">
                                    <thead>
                                        <tr>
                                            <th><span>Stt</span></th>
                                            <th><span>Người đặt</span></th>
                                            <th><span>Email</span></th>
                                            <th><span>Sđt</span></th>
                                            <th><span>Ngày đặt</span></th>
                                            <th><span>Trạng thái</span></th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {listOrder.map((item,index)=>{
                                                const date = new Date(item.orderDate)
                                                const formattedDate = date.toLocaleString();
                                            
                                                return (
                                                    <tr>
                                                        <td>{index+1}</td>
                                                        <td>{item.fullName} </td>
                                                        <td>{item.email}</td>
                                                        <td>{item.phoneNumber}</td>
                                                        <td>{formattedDate}</td>
                                                        <td>
                                                        <span
                                                            className={`badge ${
                                                                item.status === "Đã hủy"
                                                                ? "bg-danger-transparent"
                                                                : item.status === "Đã giao hàng"
                                                                ? "bg-warning-transparent"
                                                                : "bg-success-transparent"
                                                            }`}
                                                            >
                                                            {item.status}
                                                            </span>
                                                        </td>
                                                        <td>
                                                            <button  className="btn mx-1 btn-sm btn-primary" data-bs-toggle="tooltip" title="Tùy chỉnh">
                                                                <i className="las la-search"></i>
                                                            </button>
                                                            <div className="btn btn-sm btn-success">
                                                                <button 
                                                                    type="button"   
                                                                    className="btn btn-success p-0 m-0 dropdown-toggle dropdown-toggle-split" 
                                                                    data-bs-toggle="dropdown" 
                                                                    aria-expanded="false"
                                                                >
                                                                    <span className="visually-hidden"></span>
                                                                </button>
                                                                <ul className="dropdown-menu" style={{ width: '50px' }}> 
                                                                    <li><button className="dropdown-item bg-success-transparent"
                                                                    onClick={() => handleConfirmOrder("DELIVERING", item.id)}>Đang giao hàng</button></li>
                                                                    <li><button className="dropdown-item bg-warning-transparent"
                                                                    onClick={() => handleConfirmOrder("DELIVERED", item.id)}>Đã giao hàng</button></li>
                                                                    <li><button className="dropdown-item bg-danger-transparent"
                                                                    onClick={() => handleConfirmOrder("CANCELED", item.id)}>Hủy đơn hàng</button></li>
                                                                </ul>
                                                            </div>
                                                        </td>
                                                    </tr>
                                        )})}
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
        </div>
  )
}
