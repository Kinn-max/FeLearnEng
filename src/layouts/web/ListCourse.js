import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { getAllItemOfCategory, getAllItemOfCategoryAndStatus } from '../../api/CategoryApi';
import { getAllProductByCategoryStatus } from '../../api/ProductApi';

export default function ListCourse() {
    const [listCategory, setListCategory] = useState([]);
    const [loading, setLoading] = useState(false);
    const [listProduct, setListProduct] = useState({}); 

    useEffect(() => {
        const fetchCategories = async () => {
            setLoading(true);
            try {
                const data = await getAllItemOfCategoryAndStatus("product");
                if (data) {
                    setListCategory(data);
                }
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
        const fetchProductsForAllCategories = async () => {
            setLoading(true);
            try {
                const productData = {};
                for (let category of listCategory) {
                    const products = await getAllProductByCategoryStatus(category.id);
                    productData[category.id] = products || [];
                }
                setListProduct(productData);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        };

        if (listCategory.length > 0) {
            fetchProductsForAllCategories();
        }
    }, [listCategory]);

    if (loading) {
        return <div className="text-center mt-5">Đang tải...</div>; 
    }
    return (
        <div className="card custom-card">
            {listCategory.map((item, index) => (
                <div key={index} className="row d-flex row-sm">
                    <div className="card-header px-3 pb-3 justify-content-between">
                        <div className="card-title fs-6">
                            {item.name}
                        </div>
                    </div>
                    {listProduct[item.id]?.map((product, idx) => (
                       <div key={idx} className="col-md-4 col-lg-3 col-xl-3 col-sm-3" style={{height: "320px"}}>
						   <div className="border">
							   <div className="card-body  h-100" >
								   <div className="pro-img-box">
								  		<Link to={`/book/detail/${product.id}`}>
										   <img className="w-100 rounded-3"style={{ maxWidth: '150px' ,height:"150px"}}  src={`data:image/jpeg;base64,${product.image}`} alt="product-image" />
									  	</Link>
									   <div href="product-cart.html" className="adtocart">
										   <i className="las la-shopping-cart"></i>
									   </div>
								   </div>
								   <div className="text-center pt-3 ">
									   <h3 style={{ maxHeight: '150px'}} className="h6 two-lines mb-2  mt-4 fw-bold text-uppercase">{product.name}</h3>
									   <span className="fs-15 ms-auto">
										   <i className="ion ion-md-star text-warning"></i>
										   <i className="ion ion-md-star text-warning"></i>
										   <i className="ion ion-md-star text-warning"></i>
										   <i className="ion ion-md-star-half text-warning"></i>
										   <i className="ion ion-md-star-outline text-warning"></i>
									   </span>
									   <h4 className="h5 mb-0 mt-2 text-center fw-bold text-danger">{product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })} </h4>
								   </div>
							   </div>
						   </div>
				   </div>
                    ))}
                    
                </div>
            ))}
        </div>
    );
}
