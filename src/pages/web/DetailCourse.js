import React, { useEffect, useState } from 'react'
import OtherCourse from '../../components/OtherCourse'
import { useParams } from 'react-router-dom';
import { getProductById, getRanDomProduct } from '../../api/ProductApi';
import Empty from '../../Utils/Empty';
import ShowNotification from '../../Utils/Notification';
import { addCartApi } from '../../api/AddCartApi';

export default function DetailCourse() {
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(null);
    const [listProduct,setListProduct] =useState([]);
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const data = await getProductById(id);
                if (data) {
                    setProduct(data);
                    setPrice(data.price); 
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]); 

    const handlePlus = () => {
        setQuantity(prevQuantity => prevQuantity + 1);
    };

    const handleMinus = () => {
        setQuantity(prevQuantity => Math.max(prevQuantity - 1, 1)); 
    };

    const handleAddCart = async (e) => {
        e.preventDefault();
        if (!product || !price) {
            ShowNotification("error", "Lỗi", "Thông tin sản phẩm không hợp lệ");
            return;
        }

        const data = {
            idProduct: id,
            price: price,
            numberOfProducts: quantity,
            totalMoney: price * quantity
        };
        try {
            const response = await addCartApi(data);
            if (response) {
                ShowNotification("success", "Thành công", "Sản phẩm đã được thêm vào giỏ hàng");
            }
        } catch (error) {
            console.error('Error:', error);
            ShowNotification("error", "Lỗi", "Đã có lỗi xảy ra khi thêm sản phẩm vào giỏ hàng");
        }
    };
    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const data = await getRanDomProduct();
                console.log(data)
                if (data) {
                    setListProduct(data);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchData();
    }, []);
    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <>
        {product ? ( 
            <div className='container'>
                <div className="row">
                    <div className="col-xl-12">
                        <div className="card">
                            <div className="card-body h-100">
                                <div className="row text-start ">
                                    <div className="col-xl-5 col-lg-12 col-md-12">
                                        <div className="product-carousel  border br-5">
                                            <div id="Slider" className="carousel slide" data-bs-ride="false">
                                                <div className="carousel-inner py-3">
                                                    <div className="carousel-item active">
                                                        <img src={`data:image/jpeg;base64,${product.image}`} alt="img" className="img-fluid mx-auto d-block" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="details col-xl-7 col-lg-12 col-md-12 mt-4 mt-xl-0">
                                        <h5 className="product-title mb-1">{product.name}</h5>
                                        <h6 className="price fs-14">Giá bán: 
                                            <span className="h4 ms-2 d-inline-block text-danger">
                                                {price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                                            </span>
                                        </h6>
                                        <p className="product-description">{product.description}</p>
                                         <div className="col-xl-2">
                                            <div className="handle-counter input-group rounded flex-nowrap">
                                                <button className="btn btn-icon btn-light input-group-text product-quantity-minus"
                                                    onClick={handleMinus}>
                                                    <i className="ri-subtract-line"></i>
                                                </button>
                                                <input type="text" className="form-control form-control-sm text-center" aria-label="quantity" id="product-quantity2" value={quantity} readOnly/>
                                                <button className="btn btn-icon btn-light input-group-text product-quantity-plus"
                                                    onClick={handlePlus}>
                                                    <i className="ri-add-line"></i>
                                                </button>
                                             </div>
                                         </div>
                                        <div className="action mt-4">
                                            <button onClick={handleAddCart} className="add-to-cart btn btn-primary">Thêm vào giỏ hàng</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <h3 className='text-title'>KHÓA HỌC GỢI Ý</h3>
                <div className="row related-products-ltr-l">
                    {listProduct.map((item,index)=>(
                          <OtherCourse key={index} item={item} />
                    ))}
                </div>
            </div>
        ) : (
            <div className='container d-flex '>
                <div className='row justify-content-center'>
                     <Empty/>
                </div>
            </div>
        )}
        </>
    );
}
