import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { deleteItemApi, getItemsInCartApi } from '../../api/AddCartApi';

export default function Cart() {
    const [data, setData] = useState(null);
    const [reload, setReload] = useState(false);
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
    const handleDeleteItem = async (id)=>{
        try {
            console.log(id)
            const response = await deleteItemApi(id);
            setReload(prev => !prev); 
        } catch (error) {
            console.log(error);
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
                <div>Bạn chưa có sản phẩm nào</div>
            )}
        </>
    );
}
