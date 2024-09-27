import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteItemApi, getItemsInCartApi } from '../../api/AddCartApi';
import Empty from '../../Utils/Empty';
import { getAllOrderedByUserId, orderStatusConfirm } from '../../api/OrderApi';

export default function Cart() {
    const [data, setData] = useState(null);
    const [purchaseHistory, setPurchaseHistory] = useState(null);
    const [reload, setReload] = useState(false);
    const [showModel,setShowModel] = useState(false)
    const [selectedOrder, setSelectedOrder] = useState(null);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await getItemsInCartApi();
                setData(responseData.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [reload]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await getAllOrderedByUserId();
                setPurchaseHistory(responseData);
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, [reload]);
    const handleDeleteItem = async (id)=>{
        try {
            console.log(id)
             await deleteItemApi(id);
            setReload(prev => !prev); 
        } catch (error) {
            console.log(error);
        }

    }
    const handleShowOrderDetails = (order) => {
        setSelectedOrder(order); 
        setShowModel(true); 
    };


    const handleCloseModal = () => {
        setShowModel(false);
        setSelectedOrder(null); 
    };
    const handleConfirmOrder = async(method,id)=>{
        try {
            console.log(method,id)
            await orderStatusConfirm(method,id)
            setReload(true)
        } catch (error) {
            
        }
    }
    return (
        <>
            {data && data.length > 0 ? (
                <div className="container">
                    <div className="card custom-card">
                        <div className="card-title fs-5 pt-5">Danh sách sản phẩm trong giỏ hàng</div>
                        <div className="card-body text-start d-flex justify-content-center">
                            <div className="table-responsive" style={{ width: "100%" }}>
                                <table className="table text-nowrap">
                                    <thead className="table-primary">
                                        <tr>
                                            <th scope="col">Stt</th>
                                            <th scope="col">Ảnh</th>
                                            <th scope="col" style={{ width: '10%' }}>Tên sách</th>
                                            <th scope="col">Số lượng</th>
                                            <th scope="col">Giá</th>
                                            <th scope="col">Tùy chỉnh</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data.map((item, index) => (
                                            <tr key={item.id}>
                                                <td>{index + 1}</td>
                                                <td>
                                                    <img
                                                        style={{ width: "100px" }}
                                                        src={`data:image/jpeg;base64,${item.image}`}
                                                        alt={item.name}
                                                        className="bd-placeholder-img rounded-0"
                                                    />
                                                </td>
                                                <td>{item.name}</td>
                                                <td >
                                                    {item.numberOfProducts}
                                                </td>
                                                <td>{item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                                <td>
                                                    <button  class="btn btn-icon btn-sm btn-danger-transparent rounded-pill"
                                                        onClick={() => handleDeleteItem(item.id)}>
                                                        <i class="ri-delete-bin-line"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                        <div className="d-flex justify-content-end pb-5 pe-5">
                            <Link to="/check-out" style={{ maxWidth: "200px" }} className="btn btn-danger w-50">
                                Đặt hàng
                            </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <div className='container'>
                    <div className="card custom-card">  
                        <div className='row d-flex justify-content-center ' style={{backgroundColor:"#fff",boxShadow:"rgba(17, 17, 26, 0.1) 0px 1px 0px"}}><Empty/></div>
                    </div>
                </div>
            )}
            {purchaseHistory && purchaseHistory.length > 0 ? (
              <div className='container'>
                <div className="card custom-card">
                    <div className="card-header px-5 pt-5 pb-3 justify-content-between">
                        <div className="card-title">
                            Lịch sử mua hàng
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
                                            {purchaseHistory.map((item,index)=>{
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
                                                                <button className="btn mx-1 btn-sm btn-primary"
                                                                    onClick={() => handleShowOrderDetails(item)} 
                                                                    data-bs-toggle="tooltip"
                                                                    title="Xem chi tiết"
                                                                >
                                                                    <i className="las la-search"></i>
                                                                </button>
                                                                { item.status === "Chờ xác nhận" &&(
                                                                   <div class="btn btn-sm btn-success">
                                                                       <button type="button" class="btn btn-success p-0 m-0 dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" fdprocessedid="fmntw7">
                                                                           <span class="visually-hidden"></span>
                                                                       </button>
                                                                       <ul className="dropdown-menu p-0">
                                                                           <li>
                                                                               <button className="dropdown-item bg-danger-transparent" 
                                                                                   onClick={() => handleConfirmOrder("CANCELED", item.id)}>
                                                                                   Hủy đơn hàng
                                                                               </button>
                                                                           </li>
                                                                       </ul>
                                                                   </div>
                                                                )}
                                                            </td>
                                                        </tr>
                                            )})}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </div>
            ):(
                <div>Mày chưa mua hàng</div>
            )}
                {showModel && selectedOrder && (
                <div className="modal fade show" style={{ display: "block" }}>
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h1 className="modal-title fs-5">Chi tiết đơn hàng</h1>
                                <button type="button" className="btn-close" onClick={handleCloseModal}></button>
                            </div>
                            <div className="modal-body text-start">
                                <div className='d-flex callout callout-warning justify-content-between'>
                                    <div>
                                        <p>Người đặt:{selectedOrder.fullName}</p>
                                        <p>Email: {selectedOrder.email}</p>
                                    </div>
                                    <div>

                                    <p>Số điện thoại: {selectedOrder.phoneNumber}</p>
                                    <p>Ngày đặt: {new Date(selectedOrder.orderDate).toLocaleString()}</p>
                                    </div>
                                </div>
                                <p>Giao tới: {selectedOrder.shippingAddress}</p>
                                <p>Phương thức thanh toán: {selectedOrder.paymentMethod}</p>
                                <p>Phương thức giao hàng: {selectedOrder.shippingMethod}</p>
                                <p>Sản phẩm gồm:
                                <ul>
                                    {
                                        selectedOrder.orderDetailEntityList && selectedOrder.orderDetailEntityList.map((item, index) => (
                                            <li key={index}>{item.name} ({item.numberOfProducts} x {item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}) = {item.totalMoney.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</li>
                                        ))
                                    }
                                </ul>
                                </p>
                                <p>Tổng: {selectedOrder.totalMoney.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</p>
                                <p>Trạng thái: {selectedOrder.status}</p>
                                
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" onClick={handleCloseModal}>Đóng</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
