import { jwtDecode } from 'jwt-decode';
import React, { useEffect, useState } from 'react';
import ShowNotification from '../../Utils/Notification';
import { getUserById } from '../../api/UserApi';
import { getAllDistrict, getAllProvince, getAllWard } from '../../api/AddressApi';
import { getItemsInCartApi } from '../../api/AddCartApi';
import { orderUserApi } from '../../api/OrderApi';

export default function CheckOut() {
    const [stepCheckOut, setStepCheckOut] = useState(0);
    //
    const [userId,setUserId] = useState(null)
    const [fullName,setFullName] = useState("")
    const [phoneNumber,setPhoneNumber] = useState("")
    const [note,setNote] = useState("")
    const [email,setEmail] = useState("")
    const [delivery,setDelivery] = useState("")
    const [payment,setPayment] = useState("")
    const [itemInCart,setItemInCart] = useState([])
    const [total, setTotal] = useState(0)
    //address
    const [province,setProvince]= useState([])
    const [idProvince,setIdProvince]= useState(null)
    const [nameProvince,setNameProvince]= useState("")
    const [district ,setDistrict]= useState([])
    const [idDistrict,setIdDistrict]= useState(null)
    const [nameDistrict,setNameDistrict]= useState("")
    const [ward ,setWard]= useState([])
    const [idWard,setIdWard]= useState(null)
    const [nameWard,setNameWard]= useState("")
    const [street,setStreet] = useState("")

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');
        if (token) {
          const userData = jwtDecode(token);
          if (userData && userData.role) {
            if (userData.role === 'ADMIN') {
                ShowNotification("error","Mày không được đặt hàng thằng ngu!","")
            }else{
                setUserId(userData.userId)
            }
          }else{
            ShowNotification("error","Thất bại","Bạn phải đăng nhập trước")
            return(
                <div>Bạn chưa đăng nhập đm</div>
            )
          }
        }
    }, []);
      useEffect(() => {
        const fetchData = async () => {
            try {
                const data = await getUserById(userId);
                console.log(data)
                setNameProvince(data.province)
                setNameDistrict(data.district)
                setNameWard(data.ward)
                setFullName(data.fullName)
                setEmail(data.email)
                setPhoneNumber(data.phoneNumber)
            } catch (error) {
                console.log(error);
            }
        };

        fetchData();
    }, [userId]);
    useEffect(() => {
        const fetchData = async () => {
            const data = await getAllProvince();
            setProvince(data);
        };
        fetchData();
    }, []);
    
    useEffect(() => {
        if (idProvince) {
            const fetchDistricts = async () => {
                const data = await getAllDistrict(idProvince);
                console.log(data)
                setDistrict(data);
            };
            fetchDistricts();
        }
    }, [idProvince]);
    
    useEffect(() => {
        if (idDistrict) {
            const fetchWards = async () => {
                const data = await getAllWard(idDistrict);
                setWard(data);
            };
            fetchWards();
        }
    }, [idDistrict]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const responseData = await getItemsInCartApi();
                setItemInCart(responseData.data);  
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []); 
    const handleNext = () => {
        if (stepCheckOut < 3) {
            if (fullName && phoneNumber && email && nameProvince && nameDistrict && nameWard && street && delivery) {
                if (stepCheckOut === 2) {
                    const data = {
                        userId: userId,
                        fullName: fullName,
                        phoneNumber: phoneNumber,
                        email: email,
                        shippingAddress: `${nameProvince}, ${nameDistrict}, ${nameWard},${street}`,
                        note: note,
                        paymentMethod: payment,
                        totalMoney: total,
                        shippingMethod:delivery
                    };
                    console.log(data)
                    if (!payment || payment.length === 0) {
                        ShowNotification('warning', 'Thiếu thông tin', 'Vui lòng chọn phương thức thanh toán.');
                    } else {
                        try {
                            const response = orderUserApi(data)
                            
                        } catch (error) {
                            console.log(error)
                        }
                        setStepCheckOut(prevStep => prevStep + 1); 
                    }
    
                    console.log(data); 
                } else {
                    setStepCheckOut(prevStep => prevStep + 1);
                }
            } else {
                ShowNotification('warning', 'Thiếu thông tin', 'Vui lòng điền đầy đủ thông tin vào các trường bắt buộc.');
            }
        }
    };
    
    const handlePrev = () => {
        if (stepCheckOut > 0) {
            setStepCheckOut(prevStep => prevStep - 1);
        }
    };
    const steps = ['Billing', 'Overview', 'Payments', 'Finished'];
    useEffect(() => {
        if (itemInCart.length > 0) {
            const totalValue = itemInCart.reduce((sum, item) => sum + item.totalMoney, 0);
            setTotal(totalValue);
        }
    }, [itemInCart]); 
    const handleDistrictChange = (e) => {
        const selectedDistrictId = e.target.value;
        const selectedDistrict = district.find(item => item.id === selectedDistrictId);
        
        setIdDistrict(selectedDistrictId);
        setNameDistrict(selectedDistrict ? selectedDistrict.name : ''); 
    };
    const handleProvinceChange = (e) => {
        const selectedDistrictId = e.target.value;
        const selectedDistrict = province.find(item => item.id === selectedDistrictId);
        
        setIdProvince(selectedDistrictId);
        setNameProvince(selectedDistrict ? selectedDistrict.name : ''); 
    };
    const handleWardChange = (e) => {
        const selectedDistrictId = e.target.value;
        const selectedDistrict = ward.find(item => item.id === selectedDistrictId);
        
        setIdWard(selectedDistrictId);
        setNameWard(selectedDistrict ? selectedDistrict.name : ''); 
    };
    

    return (
        <div>
            {itemInCart.length > 0 ? (
                   <div className="row">
                        <div className="col-xl-12">
                            <div className="card custom-card">
                                <div className="card-header d-flex justify-content-center bg-transparent border-bottom-0">
                                    <div>
                                        <label className="main-content-label mb-2">Checkout</label>
                                        <span className="d-block fs-12 mb-0 text-muted">The Project Budget is a tool used by project managers to estimate the total cost of a project</span>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <div className="row justify-content-center">
                                        <div className="col-xl-9">
                                            <div className="card shadow-none">
                                                <div className="card-body p-0 product-checkout">
                                                    <ul className="nav nav-tabs tab-style-2 d-sm-flex d-block border-bottom border-block-end-dashed justify-content-center" id="myTab1" role="tablist">
                                                        {steps.map((step, index) => (
                                                            <li className="nav-item" role="presentation" key={index}>
                                                                <button 
                                                                    className={`nav-link ${stepCheckOut === index ? 'active' : ''}`}
                                                                    type="button"
                                                                    role="tab"
                                                                >
                                                                    <i className={`ri-number-${index + 1} me-2 align-middle fs-12 d-inline-flex align-items-center justify-content-center`}></i>
                                                                    {step}
                                                                </button>
                                                            </li>
                                                        ))}
                                                    </ul>
                                                    <div className="row">
                                                        <div className="col-xl-8 mx-auto text-start">
                                                            <div className="tab-content border-lg border-0 m-0 m-lg-4" id="myTabContent">
                                                                {stepCheckOut === 0 && (
                                                                    <div className="tab-pane fade show active border-0 ">
                                                                            <h5 class="text-start mb-2">Billing Information</h5>
                                                                            <p class="mb-4 text-muted fs-13 ms-0 text-start">Recipient information</p>
                                                                            <div class="row">
                                                                                <div class="col-md-6 mb-3">
                                                                                    <label class="form-label" for="firstName">Họ và tên</label>
                                                                                    <input type="text" class="form-control" id="firstName" value={fullName} />
                                                                                    <div class="invalid-feedback">Valid first name is required.</div>
                                                                                </div>
                                                                                <div class="col-md-6 mb-3">
                                                                                    <label class="form-label" for="mobile">Số điện thoại nhận</label>
                                                                                    <input type="number" class="form-control" id="mobile" value={phoneNumber} onChange={(e)=>setPhoneNumber(e.target.value)}/>
                                                                                </div>
                                                                            </div>
                                                                            <div class="mb-3">
                                                                                <label class="form-label" for="address2">Email người nhận
                                                                                </label>
                                                                                <input type="text"
                                                                                    id="input-disabled"
                                                                                    class="form-control" placeholder="Disabled input" disabled=""
                                                                                    value={email}
                                                                                />
                                                                            </div>
                                                                            <div class="row">
                                                                                <div class="mb-3 col-xl-4">
                                                                                    <label class="form-label" for="address">Tỉnh/Thành phố</label>
                                                                                    <select class="form-select" aria-label="Default select example"
                                                                                        value={idProvince}
                                                                                        onChange={handleProvinceChange}
                                                                                    >
                                                                                        <option value="" checked>{nameProvince || "--Chọn--"}</option>
                                                                                        {province.map((item,index)=>(
                                                                                                <option key={index} value={item.id}>{item.name}</option>                                       
                                                                                        ))} 
                                                                                    </select>
                                                                                </div>
                                                                                <div class="mb-3 col-xl-4">
                                                                                    <label class="form-label" for="address">Quận/Huyện</label>
                                                                                    <select class="form-select" aria-label="Default select example"
                                                                                        value={idDistrict}
                                                                                        onChange={handleDistrictChange}
                                                                                       
                                                                                    >
                                                                                            <option value="" checked>{nameDistrict || "--Chọn--"}</option>
                                                                                        {district.map((item,index)=>(
                                                                                                <option key={index} value={item.id}>{item.name}</option>                                       
                                                                                        ))} 
                                                                                    </select>
                                                                                </div>
                                                                                <div class="mb-3 col-xl-4">
                                                                                    <label class="form-label" for="address">Xã/Phường</label>
                                                                                    <select class="form-select" aria-label="Default select example"
                                                                                        value={idWard}
                                                                                        onChange={handleWardChange}
                                                                                    >
                                                                                        <option value="" checked>{nameWard || "--Chọn--"}</option>
                                                                                        {ward.map((item,index)=>(
                                                                                                <option key={index} value={item.id}>{item.name}</option>                                       
                                                                                        ))} 
                                                                                    </select>
                                                                                </div>
                                                                            </div>
                                                                            <div class="mb-3">
                                                                                <label class="form-label" for="address2">Địa chỉ chi tiết hơn
                                                                                </label>
                                                                                <input type="text" class="form-control" id="address2" placeholder="Xóm, ấp,.."
                                                                                    onChange={(e)=>setStreet(e.target.value)}
                                                                                />
                                                                            </div>
                                                                            <div class="mb-3">
                                                                                <label class="form-label" for="address2">Ghi chú
                                                                                </label>
                                                                                <input type="text" class="form-control" id="address2" placeholder="Ghi chú"
                                                                                    onChange={(e)=>setNote(e.target.value)}
                                                                                />
                                                                            </div>
                                                                            <div class="row">
                                                                                <div className="card-body d-flex justify-content-between px-5">
                                                                                    <div className="form-check">
                                                                                        <input
                                                                                            className="form-check-input"
                                                                                            type="radio"
                                                                                            value="Hỏa tốc"
                                                                                            checked={delivery === "Hỏa tốc"}
                                                                                            name="flexRadioDefault"
                                                                                            id="flexRadioDefault1"
                                                                                            onChange={(e) => setDelivery(e.target.value)}
                                                                                        />
                                                                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                                            Giao hàng hỏa tốc
                                                                                        </label>
                                                                                    </div>
                                                                                    <div className="form-check">
                                                                                        <input
                                                                                            className="form-check-input"
                                                                                            type="radio"
                                                                                            value="Nhanh"
                                                                                            checked={delivery === "Nhanh"}
                                                                                            name="flexRadioDefault"
                                                                                            id="flexRadioDefault2"
                                                                                            onChange={(e) => setDelivery(e.target.value)}
                                                                                        />
                                                                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                                            Giao hàng nhanh
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div> 
                                                                    </div>
                                                                )}
                                                                {stepCheckOut === 1 && (
                                                                    <div className="border-0 text-start active show ">
                                                                            <div class="row text-start">
                                                                                <div class="col-md-12 col-xl-12 ">
                                                                                    <div class=" main-content-body-invoice">
                                                                                        <div class=" card-invoice px-3">
                                                                                            <div class="card-body">
                                                                                                <div class="invoice-header">
                                                                                                    <h2 class="invoice-title">Hóa đơn</h2>
                                                                                                    <div class="billed-from">
                                                                                                        <h6>Kiên đẹp trai</h6>
                                                                                                        <p>Q12,Tphcm<br/>
                                                                                                        Số điện thoại: 0000000<br/></p>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="row mt-4">
                                                                                                    <div class="col-md">
                                                                                                        <label class="text-gray-6">Đơn hàng tới</label>
                                                                                                        <div class="billed-to">
                                                                                                            <h6 class="fs-14 fw-semibold">{fullName}</h6>
                                                                                                            <p>{`${nameProvince}, ${nameDistrict} ,${nameWard}, ${street}`}<br/>
                                                                                                            {phoneNumber}<br/>
                                                                                                            {email}</p>
                                                                                                        </div>
                                                                                                    </div>
                                                                                                    <div class="col-md">
                                                                                                        <label class="text-gray-6">Thông tin đơn hàng</label>
                                                                                                        <p class="invoice-info-row"><span>Mã đơn hàng</span> <span>GHT-673-00</span></p>
                                                                                                        <p class="invoice-info-row"><span>Ngày tạo:</span> <span>November 30, 2017</span></p>
                                                                                                    </div>
                                                                                                </div>
                                                                                                <div class="table-responsive mt-4">
                                                                                                    <table class="table table-invoice border text-md-nowrap mb-0">
                                                                                                        <thead>
                                                                                                            <tr>
                                                                                                                <th class="w-20">Stt</th>
                                                                                                                <th class="w-40">Tên sản phẩm</th>
                                                                                                                <th class="text-center">Số lượng</th>
                                                                                                                <th>Giá sản phẩm</th>
                                                                                                                <th>Hết</th>
                                                                                                            </tr>
                                                                                                        </thead>
                                                                                                        <tbody>
                                                                                                            {itemInCart.map((item,index)=>(
                                                                                                                <tr key={index}>
                                                                                                                    <td>{index+1}</td>
                                                                                                                    <td class="fs-12">{item.name}</td>
                                                                                                                    <td class="text-center">{item.numberOfProducts}</td>
                                                                                                                    <td>{item.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                                                                                                    <td>{item.totalMoney.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                                                                                                </tr>
                                                                                                            ))}
                                                                                                            <tr>
                                                                                                                <td class=" text-uppercase tx-inverse">Tổng cộng</td>
                                                                                                                <td colspan="2">
                                                                                                                    <h4 class="text-primary">{total.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</h4>
                                                                                                                </td>
                                                                                                            </tr>
                                                                                                        </tbody>
                                                                                                    </table>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                    </div>
                                                                )}
                                                                {stepCheckOut === 2 && (
                                                                    <div className="tab-pane fade show active border-0 p-0">
                                                                        <div className="p-4">
                                                                            <h5 className="text-start mb-2">Payments</h5>
                                                                            <div class="row">
                                                                                <div className="card-body d-flex justify-content-between px-5">
                                                                                    <div className="form-check">
                                                                                        <input
                                                                                            className="form-check-input"
                                                                                            type="radio"
                                                                                            value="Thanh toán khi nhận hàng"
                                                                                            name="flexRadioDefault"
                                                                                            id="flexRadioDefault1"
                                                                                            onClick={(e) => setPayment(e.target.value)}
                                                                                        />
                                                                                        <label className="form-check-label" htmlFor="flexRadioDefault1">
                                                                                            Thanh toán khi nhận hàng
                                                                                        </label>
                                                                                    </div>
                                                                                    <div className="form-check">
                                                                                        <input
                                                                                            className="form-check-input"
                                                                                            type="radio"
                                                                                            value="Thanh toán ngay"
                                                                                            name="flexRadioDefault"
                                                                                            id="flexRadioDefault2"
                                                                                            onClick={(e) => setPayment(e.target.value)}
                                                                                        />
                                                                                        <label className="form-check-label" htmlFor="flexRadioDefault2">
                                                                                            Thanh toán ngay
                                                                                        </label>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            </div> 
        
                                                                    </div>
                                                                )}
                                                                {stepCheckOut === 3 && (
                                                                    <div className="tab-pane fade show active border-0 p-0">
                                                                        <div class="text-center p-4">
                                                                            <div class="">
                                                                                <h5 class="text-center mb-4">Your order Confirmed!</h5>
                                                                            </div>
                                                                            <svg class="wd-100 ht-100 mx-auto justify-content-center mb-3 text-center" version="1.1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 130.2 130.2">
                                                                                <circle class="path circle" fill="none" stroke="#22c03c" stroke-width="6" stroke-miterlimit="10" cx="65.1" cy="65.1" r="62.1"></circle>
                                                                                <polyline class="path check" fill="none" stroke="#22c03c" stroke-width="6" stroke-linecap="round" stroke-miterlimit="10" points="100.2,40.2 51.5,88.8 29.8,67.5 "></polyline>
                                                                            </svg>
                                                                            <p class="success pl-5 pr-5">Order placed successfully. Your order will be dispacted soon. meanwhile you can track your order in my order section.</p>
                                                                        </div>
                                                                    </div>
                                                                )}
                                                            </div>
                                                            <div className="px-4 py-3 border-top border-block-start-dashed d-sm-flex justify-content-between">
                                                                <button 
                                                                    type="button" 
                                                                    className="btn btn-light m-1" 
                                                                    onClick={handlePrev}
                                                                    disabled={stepCheckOut === 0}
                                                                >
                                                                    Previous
                                                                </button>
                                                                <button 
                                                                    type="button" 
                                                                    className="btn btn-primary m-1" 
                                                                    onClick={handleNext}
                                                                    disabled={stepCheckOut === 3}
                                                                >
                                                                    {stepCheckOut === 3 ? 'Finish' : 'Next'}
                                                                </button>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                 </div>
                ) : (
                    <div>Bạn không thể vào trang khi không có sản phẩm nào trong giỏ hàng</div>
             )}
            
        </div>
    );
}