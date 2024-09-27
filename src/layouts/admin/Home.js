import React, { useEffect, useState } from 'react'
import { getOrderOfWaiting, orderStatusConfirm } from '../../api/OrderApi';

export default function Home() {
    const [listOrder,setListOrder] = useState([])
    const [change,setChange] = useState(false)

    useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getOrderOfWaiting();
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
            console.log(method,id)
            const response = await orderStatusConfirm(method,id)
            setChange(pre=>!pre)
        } catch (error) {
            
        }
    }
    return (
        <div class="row row-sm">
            <div class="col-sm-12 col-xl-3 col-lg-12 col-md-12">
                <div class="card ">
                    <div class="card-body">
                        <div class="counter-status d-flex md-mb-0">
                            <div class="counter-icon bg-primary-transparent">
                                <i class="icon-layers text-primary"></i>
                            </div>
                            <div class="ms-auto pe-5">
                                <h5 class="fs-13">TOPIC</h5>
                                <h2 class="mb-0 fs-22 mb-1 mt-1">12</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-xl-3 col-lg-12 col-md-12">
                <div class="card ">
                    <div class="card-body">
                        <div class="counter-status d-flex md-mb-0">
                            <div class="counter-icon bg-danger-transparent">
                                <i class="icon-paypal text-danger"></i>
                            </div>
                            <div class="ms-auto">
                                <h5 class="fs-13 pe-5">EXAM</h5>
                                <h2 class="mb-0 fs-22 mb-1 mt-1">2</h2>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-xl-3 col-lg-12 col-md-12">
                <div class="card ">
                    <div class="card-body">
                        <div class="counter-status d-flex md-mb-0">
                            <div class="counter-icon bg-success-transparent">
                                <i class="icon-rocket text-success"></i>
                            </div>
                            <div class="ms-auto ">
                                <h5 class="fs-13 pe-5">PARAGRAPH</h5>
                                <h2 class="mb-0 fs-22 mb-1 mt-1">6</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="col-sm-12 col-xl-3 col-lg-12 col-md-12">
                <div class="card ">
                    <div class="card-body">
                        <div class="counter-status d-flex md-mb-0">
                            <div class="counter-icon bg-success-transparent">
                                <i class="icon-user text-success"></i>
                            </div>
                            <div class="ms-auto ">
                                <h5 class="fs-13 pe-5">USER</h5>
                                <h2 class="mb-0 fs-22 mb-1 mt-1">1,890</h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="card custom-card">
                    <div className="card-title fs-6 px-5 pt-3">Danh sách đơn hàng chờ xác nhận</div>
                    {listOrder.length > 0?(
                         <div className="card-body text-start d-flex justify-content-center">
                         <div className="table-responsive" style={{ width: "100%" }}>
                             <table className="table text-nowrap">
                                 <thead className="table-primary">
                                     <tr>
                                         <th scope="col">Stt</th>
                                         <th scope="col">Tên người đặt</th>
                                         <th scope="col" style={{ width: '10%' }}>Email</th>
                                         <th scope="col">Sđt
                                         </th>
                                         <th scope="col">Ngày đặt
                                         </th>
                                         <th scope="col">Trạng thái</th>
                                         <th scope="col">Tùy chỉnh</th>
                                     </tr>
                                 </thead>
                                 <tbody>
                                     {listOrder.map((item,index)=>{
                                         const date = new Date(item.orderDate)
                                         const formattedDate = date.toLocaleString();
                                        return(
                                         <tr>
                                             <td>{index+1}</td>
                                             <td>
                                                 {item.fullName}
                                             </td>
                                             <td>{item.email}</td>
                                             <td >
                                                 {item.phoneNumber}  
                                             </td>
                                             <td >
                                                 {formattedDate}  
                                             </td>
                                             <td><td><span class="badge bg-success-transparent">{item.status}</span></td></td>
                                             <td> 
                                                 <button class="btn mx-1 btn-sm btn-primary" data-bs-toggle="tooltip" title="Tùy chỉnh" fdprocessedid="py0mg8"><i class="las la-search"></i></button>
                                                 <div class="btn btn-sm btn-success">
                                                     <button type="button" class="btn btn-success p-0 m-0 dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-expanded="false" fdprocessedid="fmntw7">
                                                         <span class="visually-hidden"></span>
                                                     </button>
                                                     <ul className="dropdown-menu p-0">
                                                         <li>
                                                             <button className="dropdown-item bg-success-transparent" 
                                                                 onClick={() => handleConfirmOrder("DELIVERING", item.id)}>
                                                                 Đang giao hàng
                                                             </button>
                                                         </li>
                                                         <li>
                                                             <button className="dropdown-item bg-danger-transparent" 
                                                                 onClick={() => handleConfirmOrder("CANCELED", item.id)}>
                                                                 Hủy đơn hàng
                                                             </button>
                                                         </li>
                                                     </ul>
                                                 </div>
                                             </td>
                                         </tr>

                                        )
                                     })}       
                                 </tbody>
                             </table>
                         </div>
                        </div>
                    ):(
                        <div className='card-body text-start d-flex justify-content-center'>Chưa có đơn hàng nào cần xác nhận cả :v! </div>
                    )}
                </div>
            </div>
        </div>
    )
}
