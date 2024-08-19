import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { deleteBlog, getAllGrammarByCategoryId } from '../../api/GrammarApi';
import Empty from '../../Utils/Empty';
import ShowNotification from '../../Utils/Notification';

export default function ListGrammar() {
    const [listGrammar, setListGrammar] = useState([]);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false);

    const { id } = useParams();
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getAllGrammarByCategoryId(id);
                if (data) {
                    setListGrammar(data);
                }
            } catch (error) {
              console.log(error)
            } finally {
                setLoading(false);
            }
        };

        fetchCategories();
    }, [id,reload]);

    if (loading) {
        return <div className="text-center mt-5">Loading...</div>; 
    }
    const handleDelete = async (id) => {
        try {
            await deleteBlog(id);  
            ShowNotification("success", "Thành công", "Xóa blog thành công");
            setReload(prev => !prev);    
        } catch (error) {
            console.error('Error:', error);
            ShowNotification("error", "Lỗi", "Đã có lỗi xảy ra");
        }
    };
  return (
    <div class="card custom-card">
        <div class="card-header px-5 pt-5 pb-3 justify-content-between">
            <div class="card-title">
                Danh sách bài ngữ pháp
            </div>
            <div class="card-title d-flex">
                <Link to={`/admin/grammar/${id}/edit-grammar`}>
                    <button type="button" title='Thêm topic mới' class="btn btn-outline-primary rounded-pill btn-wave waves-effect waves-light">
                        <i class="bx bx-plus fs-6"></i>
                    </button>
                </Link>
            </div>
        </div>     
        <div class="card-body text-start">
        {listGrammar.length > 0 ? (
                <div class="table-responsive">
                        <table class="table ">
                            <thead class="table-primary">
                                <tr>
                                    <th scope="col">Stt</th>
                                    <th scope="col">Hình ảnh</th>
                                    <th scope="col">Tên bài ngữ pháp</th>
                                    <th scope="col">Tùy chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                            {listGrammar.map((qs, index) => (
                                 <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>
                                    <img 
                                            style={{ width: "100px" }} 
                                            src={`data:image/jpeg;base64,${qs.image}`} 
                                            className="bd-placeholder-img bd-placeholder-img rounded-0" 
                                            alt={qs.name} 
                                        />
                                    </td>
                                    <td>{qs.name}</td>
                                    <td>
                                        <div class="hstack gap-2 fs-15">
                                        <Link to={`/admin/grammar/${id}/edit-grammar/${qs.id}`} class="btn btn-icon btn-sm btn-success-transparent rounded-pill"><i class="ri-edit-line"></i></Link>
                                            <button   onClick={() => handleDelete(qs.id)} 
                                                class="btn btn-icon btn-sm btn-danger-transparent rounded-pill">
                                                    <i class="ri-delete-bin-line">
                                                    </i>
                                            </button>
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
        <div class="card-footer border border-0 d-flex justify-content-end">
                <nav aria-label="Page navigation" class="pagination-style-3">
                    <ul class="pagination mb-0 flex-wrap">
                        <li class="page-item disabled">
                            <a class="page-link" href="javascript:void(0);">
                                Prev
                            </a>
                        </li>
                        <li class="page-item active"><a class="page-link" href="javascript:void(0);">1</a></li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">2</a></li>
                        <li class="page-item">
                            <a class="page-link" href="javascript:void(0);">
                                <i class="bi bi-three-dots"></i>
                            </a>
                        </li>
                        <li class="page-item"><a class="page-link" href="javascript:void(0);">16</a></li>
                        <li class="page-item">
                            <a class="page-link text-primary" href="javascript:void(0);">
                                next
                            </a>
                        </li>
                    </ul>
                </nav>
        </div>
    </div>
  )
}
