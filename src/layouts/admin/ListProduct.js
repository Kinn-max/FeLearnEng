import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom';
import { createProduct, deleteProduct, getAllProductByCategoryById, updateProduct } from '../../api/ProductApi';
import Empty from '../../Utils/Empty';
import ShowNotification from '../../Utils/Notification';

export default function ListProduct() {
    const [formAddProduct, setFormAddProduct] = useState(false)
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false);
    const { id } = useParams();
    // data
    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("")
    const [idProduct, setIdProduct] = useState(null)

    const handleForm = () => {
        setFormAddProduct(!formAddProduct)
        if (!formAddProduct) {
            resetForm();
        }
    }

    const resetForm = () => {
        setName("");
        setDescription("");
        setPrice(0);
        setIdProduct(null);
        setImage(null);
    }

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const data = await getAllProductByCategoryById(id);
                if (data) {
                    setProductList(data);
                }
            } catch (error) {
                console.log(error)
                ShowNotification("error", "Lỗi", "Không thể tải danh sách sản phẩm");
            } finally {
                setLoading(false);
            }
        };

        fetchProducts();
    }, [id, reload]);

    if (loading) {
        return <div className="text-center mt-5">Đang tải...</div>; 
    }

    const handleImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };

    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result ? reader.result.split(',')[1] : null);
            reader.onerror = (error) => reject(error);
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        let base64Image = null;
        if (image instanceof File) {
            base64Image = await getBase64(image);
        } else {
            base64Image = image; 
        }
        const data = {
            id: idProduct,
            categoryId: id,
            name: name,
            description: description,
            price: price,
            image: base64Image
        };
        try {
            let response;
            if (idProduct == null) {
                response = await createProduct(data);
            } else {
                response = await updateProduct(data, idProduct);
            }
            if (Array.isArray(response.message)) {
                ShowNotification("error", "Lỗi", response.message || "Đã có lỗi xảy ra");
            } else {
                ShowNotification("success", "Thành công", idProduct ? "Cập nhật sản phẩm thành công" : "Thêm sản phẩm mới thành công");
                setReload(prev => !prev);
                resetForm();
                setFormAddProduct(false);
            }
        } catch (error) {
            console.error('Error:', error);
            ShowNotification("error", "Lỗi", "Đã có lỗi xảy ra");
        }
    };
    const handleEdit = (product) => {
        setIdProduct(product.id);
        setName(product.name);
        setDescription(product.description);
        setPrice(product.price);
        setImage(product.image); 
        setFormAddProduct(true);
    };
    // delete
    const handleDelete = async (productId) => {

        try {   
                await deleteProduct(productId);
            ShowNotification("success", "Thành công", "Xóa sản phẩm thành công");
            setReload(prev => !prev);
        } catch (error) {
            console.error('Error:', error);
            ShowNotification("error", "Lỗi", "Không thể xóa sản phẩm");
        }

    };

    return (
        <div className="card custom-card">
            <div className="card-header px-5 pt-5 pb-3 justify-content-between">
                <div className="card-title">
                    Danh sách sản phẩm
                </div>
                <div className="card-title d-flex">
                    <button type="button" title='Thêm sản phẩm mới' className="btn btn-outline-primary rounded-pill btn-wave waves-effect waves-light"
                    onClick={handleForm}>
                        <i className="bx bx-plus fs-6"></i>
                    </button>
                </div>
            </div>
            {formAddProduct && (
                <div className='mx-4 p-3 border border-dark border-opacity-50 rounded' id='formAddProduct'>
                    <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="mb-3 col-xl-8">
                                <label htmlFor="text-area" className="form-label">Tên sản phẩm</label>
                                <input type='text'
                                     className="form-control border border-dark border-opacity-25"
                                     id="text-area"
                                     rows="1"
                                     value={name}
                                     onChange={(e) => setName(e.target.value)}
                                 />

                            </div>
                            <div className="col-xl-4 mb-3">
                                <label className="form-label fs-14 text-dark" htmlFor="image-file">File ảnh</label>
                                <input type="file"
                                 className="form-control"
                                  id="image-file"
                                  onChange={handleImage}
                                />
                            </div>
                            <div className="mb-3 col-xl-6">
                                <label htmlFor="vietnamese-name" className="form-label fs-14 text-dark">Giá sản phẩm</label>
                                <input type="number"
                                 className="form-control border border-dark border-opacity-25"
                                  id="vietnamese-name"
                                   placeholder="Enter here"
                                   value={price}
                                   onChange={(e) => setPrice(e.target.value)}
                                 />
                            </div>
                            <div className="mb-3 col-xl-6">
                                <label htmlFor="vietnamese-name" className="form-label fs-14 text-dark">Mô tả sản phẩm</label>
                                <textarea  
                                    className="form-control border border-dark border-opacity-25"
                                    id="vietnamese-name" 
                                    placeholder="Enter here"
                                    value={description}
                                    onChange={(e) => setDescription(e.target.value)}
                                 />
                            </div>
                            <div className="d-flex justify-content-center">
                            <button className="btn btn-primary" type="submit">Thêm mới</button>
                            </div>
                        </div>
                    </form>
            </div>
            )}         
            <div className="card-body text-start">
            {productList.length > 0 ? (
                    <div className="table-responsive">
                            <table className="table text-center">
                                <thead className="table-primary">
                                    <tr>
                                        <th scope="col">STT</th>
                                        <th scope="col">Ảnh</th>
                                        <th scope='col'>Tên sản phẩm</th>
                                        <th scope="col">Giá</th>
                                        <th scope="col">Mô tả</th>
                                        <th scope="col">Tùy chọn</th>
                                    </tr>
                                </thead>
                                <tbody className='text-start'>
                                {productList.map((product, index) => (
                                    <tr key={product.id}>
                                        <td>{index+1}</td>
                                        <td>
                                        <img   style={{ maxWidth: '150px'}} src={`data:image/jpeg;base64,${product.image}`} class="bd-placeholder-img bd-placeholder-img rounded-0" alt="..." />
                                        </td>
                                        <td>{product.name}</td>
                                        <td>{product.price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</td>
                                        <td>{product.description}</td>
                                        <td>
                                            <div className="hstack gap-2 fs-15">
                                                <button onClick={() => handleEdit(product)} className="btn btn-icon btn-sm btn-success-transparent rounded-pill"><i className="ri-edit-line"></i></button>
                                                <button onClick={() => handleDelete(product.id)} className="btn btn-icon btn-sm btn-danger-transparent rounded-pill"><i className="ri-delete-bin-line"></i></button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                                </tbody>
                            </table>
                    </div>
                    ) : (
                    <Empty />
                    )}
            </div>
            {/* Pagination component should be implemented separately */}
        </div>
    )
}