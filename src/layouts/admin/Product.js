
import React, { useEffect, useState } from 'react'
import { deleteCategory, getAllItemOfCategory, getCategoryById, postCategory, statusCategory, updateCategory } from '../../api/CategoryApi';
import { Link } from 'react-router-dom';
import ShowNotification from '../../Utils/Notification';

export default function Product() {
    const [formAddTopic, setFormAddTopic] = useState(false);
    const [topic, setTopic] = useState([]);
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState(null);
    const [name, setName] = useState("");
    const [description, setDescription] = useState("");
    const [image, setImage] = useState(null);
    const [reload, setReload] = useState(false);
    const handleForm = () => {
        setFormAddTopic(!formAddTopic);
    };

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getAllItemOfCategory("product");
                if (data) {
                    setTopic(data);
                }
            } catch (error) {
              console.log(error)
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, [reload]);

    if (loading) {
        return <div className="text-center mt-5">Loading...</div>; 
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
    // status
    const handleCheckboxChange =async (id) => {
        try {
            const statusMessages = await statusCategory(id);  
            setReload(prev => !prev);    
        } catch (error) {
            console.error('Error:', error);
            ShowNotification("error", "Lỗi", "Đã có lỗi xảy ra");
        }
    };
    // submit form
    const handleSubmit = async (e) => {
        e.preventDefault();
        let base64Image = null;
        if (image instanceof File) {
            base64Image = await getBase64(image);
        }
        const data = {
            id:id,
            name_category: name,
            description: description,
            code_name: "PRODUCT",
            image: base64Image
        };
    
        try {
            let response;
            if (id == null) {
                response = await postCategory(data);
            } else {
                response = await updateCategory(data, id);
            }
            if (Array.isArray(response.message)) {
                var messageError = "";
                response.message.forEach((error, index) => {
                    messageError += `${error}${index < response.message.length - 1 ? ', ' : ''}`;
                });
                ShowNotification("error", "Lỗi thiếu dữ liệu", messageError);                
            } else {
                setReload(prev => !prev); 
                setName("")
                setDescription("")
                setId(null)
                setImage(null)
            }
            
        } catch (error) {
            console.error('Error:', error);
            ShowNotification("error", "Lỗi", "Đã có lỗi xảy ra");
        }
    };
    //delete
    const handleDelete = async (id)=>{
        try {
            const errorMessages = await deleteCategory(id);  
            setReload(prev => !prev);    
        } catch (error) {
            console.error('Error:', error);
            ShowNotification("error", "Lỗi", "Đã có lỗi xảy ra");
        }
    }
    //edit
    const handleEdit = async (id)=>{
        try {
            const response = await getCategoryById(id);  
            setName(response.name)
            setDescription(response.description)
            setId(response.id)
            setImage(response.image)
            setFormAddTopic(true)

        } catch (error) {
            console.error('Error:', error);
            ShowNotification("error", "Lỗi", "Đã có lỗi xảy ra");
        }
    }
  return (
    <div className="card custom-card">
    <div className="card-header px-5 pt-5 pb-3 justify-content-between">
        <div className="card-title">Danh sách mục sản phẩm</div>
        <div className="card-title d-flex">
            <button
                type="button"
                title='Thêm topic mới'
                className="btn btn-outline-primary rounded-pill btn-wave waves-effect waves-light"
                onClick={handleForm}
            >
                <i className="bx bx-plus fs-6"></i>
            </button>
        </div>
    </div>
    {formAddTopic && (
        <div className='mx-4 p-3 border border-dark border-opacity-50 rounded' id='formAddTopic'>
            <form onSubmit={handleSubmit}>
                        <div className="row">
                            <div className="mb-3 col-xl-6">
                                <label htmlFor="english-name" className="form-label fs-14 text-dark">Tên chủ đề</label>
                                <input 
                                    type="text" 
                                    name="name" 
                                    className="form-control border border-dark border-opacity-25" 
                                    id="english-name" 
                                    placeholder="Enter here!" 
                                    value={name}
                                    onChange={(e) => setName(e.target.value)} 
                                />
                            </div>
                            <div className="mb-3 col-xl-6">
                                <label htmlFor="image-upload" className="form-label fs-14 text-dark">Ảnh</label>
                                <input 
                                    type="file" 
                                    className="form-control border border-dark border-opacity-25" 
                                    id="image-upload" 
                                    placeholder="Enter here!" 
                                    onChange={handleImage}
                                />
                            </div>
                            <div className="mb-3 col-xl-6">
                                <label htmlFor="description" className="form-label fs-14 text-dark">Mô tả</label>
                                <textarea 
                                    type="text" 
                                    className="form-control border border-dark border-opacity-25" 
                                    id="description" 
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
        <div className="table-responsive">
            <table className="table  text-nowrap">
                <thead className="table-primary">
                    <tr>
                        <th>Stt</th>
                        <th>Ảnh</th>
                        <th scope="col">Tên danh sách sản phẩm</th>
                        <th scope="col">Ngày tạo</th>
                        <th scope="col">Số sản phẩm</th>
                        <th scope="col">Mô tả</th>
                        <th scope="col">Trạng thái</th>
                        <th scope="col">Tùy chỉnh</th>
                    </tr>
                </thead>
                <tbody>
                    {topic.map((item, index) => (
                        <tr key={item.id}> 
                            <td>{index + 1}</td>
                            <td>
                                <img style={{width: "100px"}}  src={`data:image/jpeg;base64,${item.image}`}  class="bd-placeholder-img bd-placeholder-img rounded-0" alt={item.name}/>
                            </td>
                            <td>{item.name}</td>
                            <td>{item.createdAt}</td>
                            <td>{ item.quantity}</td>
                            <td>{item.description}</td>
                            <td className='text-start'>
                                <label className="form-switch float-end mb-0">
                                    <span>Hiện/Ẩn</span> 
                                    <input type="checkbox" name="form-switch-checkbox3"   checked={item.status} onChange={() => handleCheckboxChange(item.id)} className="form-switch-input"/>
                                    <span className="form-switch-indicator custom-radius"></span>
                                </label>
                            </td>
                            <td>
                                <div className="hstack gap-2 fs-15">
                                    <Link to={`/admin/category/${item.id}`}
                                     className="btn btn-icon btn-sm btn-success-transparent rounded-pill">
                                        <i className="ri-search-line"></i>
                                    </Link>
                                    <button class="btn btn-icon btn-sm btn-success-transparent rounded-pill" onClick={() => handleEdit(item.id)}>
                                                <i class="ri-edit-line"></i>
                                    </button>
                                    <button  className="btn btn-icon btn-sm btn-danger-transparent rounded-pill"
                                        onClick={()=>{handleDelete(item.id)}}>
                                        <i className="ri-delete-bin-line"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
    <div className="card-footer d-none border-top-0"></div>
</div>
  )
}
