import React, { useEffect, useState } from 'react'
import OtherCourse from '../../components/OtherCourse'
import { useParams } from 'react-router-dom';
import { getProductById } from '../../api/ProductApi';

export default function DetailCourse() {
    const [loading, setLoading] = useState(false);
    const [product, setProduct] = useState(null); // Initialize as null
    const { id } = useParams();

    useEffect(() => {
        const fetchProduct = async () => {
            setLoading(true);
            try {
                const data = await getProductById(id);
                if (data) {
                    setProduct(data);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]); // Add `id` to the dependency array

    if (loading) {
        return <div>Loading...</div>; // Display a loading state
    }

    if (!product) {
        return <div>Product not found</div>; // Handle case where product is not yet loaded or doesn't exist
    }

    return (
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
                                                {/* Additional carousel items */}
                                            </div>
                                        </div>
                                    </div>
                                    {/* Carousel controls */}
                                </div>
                                <div className="details col-xl-7 col-lg-12 col-md-12 mt-4 mt-xl-0">
                                    <h5 className="product-title mb-1">{product.name}</h5>
                                    <h6 className="price fs-14">Giá bán: <span className="h4 ms-2 d-inline-block text-danger">{product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</span></h6>
                                    <p className="product-description">{product.description}</p>

                                    <div className="action mt-4">
                                        <a href="wish-list.html" className="add-to-cart btn btn-danger my-1 me-1">ADD TO WISHLIST</a>
                                        <a href="product-cart.html" className="add-to-cart btn btn-success">ADD TO CART</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <h3 className='text-title'>KHÓA HỌC GỢI Ý</h3>
            <div className="row related-products-ltr-l">
                <OtherCourse />
                <OtherCourse />
                <OtherCourse />
                <OtherCourse />
                <OtherCourse />
            </div>
        </div>
    );
}
