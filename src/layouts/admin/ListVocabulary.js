import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ListVocabulary() {
    const [formAddTopic,setFormAddTopic] = useState(false)
    const handleForm = ()=>{
        setFormAddTopic(!formAddTopic)
    }
  return (
    <div class="card custom-card">
        <div class="card-header px-5 pt-5 pb-3 justify-content-between">
                            <div class="card-title">
                            Danh sách từ vựng
                            </div>
                            <div class="card-title d-flex">
                                <button type="button" title='Thêm topic mới' class="btn btn-outline-primary rounded-pill btn-wave waves-effect waves-light"
                                onClick={()=>handleForm()}>
                                    <i class="bx bx-plus fs-6"></i>
                                </button>
                            </div>
                        </div>
                        {formAddTopic && (
                            <div className='mx-4 p-3 border border-dark border-opacity-50 rounded' id='formAddTopic'>
                                <form>
                                <div className="row">
                        <div className="mb-3 col-xl-3">
                            <label htmlFor="english-name" className="form-label fs-14 text-dark">Tên tiếng Anh</label>
                            <input type="text" className="form-control" id="english-name" placeholder="Enter here!" />
                        </div>
                        <div className="mb-3 col-xl-3">
                            <label htmlFor="vietnamese-name" className="form-label fs-14 text-dark">Tên tiếng Việt</label>
                            <input type="text" className="form-control" id="vietnamese-name" placeholder="Enter here" />
                        </div>
                        <div className="mb-3 col-xl-3">
                            <label htmlFor="pronunciation" className="form-label fs-14 text-dark">Phiên âm</label>
                            <input type="text" className="form-control" id="pronunciation" placeholder="Enter here!" />
                        </div>
                        <div className="mb-3 col-xl-3">
                            <label htmlFor="word-type" className="form-label fs-14 text-dark">Thuộc từ loại</label>
                            <select className="form-select" id="word-type" aria-label="Default select example">
                                <option selected>Chọn từ loại</option>
                                <option value="1">One</option>
                                <option value="2">Two</option>
                            </select>
                        </div>
                        <div className="mb-3 col-xl-3">
                            <label htmlFor="text-area" className="form-label">Ví dụ về tiếng anh</label>
                            <textarea className="form-control" id="text-area" rows="1"></textarea>
                        </div>
                        <div className="mb-3 col-xl-3">
                            <label htmlFor="audio-file" className="form-label fs-14 text-dark">Tải lên tệp MP3</label>
                            <input type="file" className="form-control" id="audio-file" accept=".mp3" />
                        </div>
                        <div className="col-xl-3 mb-3">
                            <label className="form-label fs-14 text-dark" htmlFor="image-file">File ảnh</label>
                            <input type="file" className="form-control" id="image-file" />
                        </div>
                            <div className="d-flex justify-content-center">
                            <button className="btn btn-primary" type="submit">Thêm mới</button>
                        </div>
                    </div>
                                </form>
                        </div>
                        )}         
        <div class="card-body text-start">
            <div class="table-responsive">
                <table class="table text-nowrap">
                    <thead class="table-primary">
                        <tr>
                            <th>Stt</th>
                            <th scope="col">Tên tiếng anh</th>
                            <th scope="col">Tên tiếng việt</th>
                            <th scope="col">Phiên âm</th>
                            <th scope="col">Thuộc từ loại</th>
                            <th scope="col" className='col-xl-3'>Mô tả</th>
                            <th scope="col">Link âm thanh</th>
                            <th scope="col">Hình ảnh</th>
                            <th scope="col">Tùy chọn</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <td>1</td>
                            <td>Music</td>
                            <td>Âm nhạc</td>
                            <td>/milzic/</td>
                            <td>N</td>
                            <td>Classical music helps me concentrate while studying.</td>
                            <td>music.mp3</td>
                            <td>
                                <img src="../../assets/images/media/media-58.jpg" class="bd-placeholder-img bd-placeholder-img rounded-0" alt="..."/>
                                </td>
                            <td>
                                <div class="hstack gap-2 fs-15">
                                    <Link to={"/admin/topic/1/vocabulary/1"} class="btn btn-icon btn-sm btn-success-transparent rounded-pill"><i class="ri-edit-line"></i></Link>
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-danger-transparent rounded-pill"><i class="ri-delete-bin-line"></i></a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Music</td>
                            <td>Âm nhạc</td>
                            <td>/milzic/</td>
                            <td>N</td>
                            <td>Classical music helps me concentrate while studying.</td>
                            <td>music.mp3</td>
                            <td>
                                <img src="../../assets/images/media/media-58.jpg" class="bd-placeholder-img bd-placeholder-img rounded-0" alt="..."/>
                                </td>
                            <td>
                                <div class="hstack gap-2 fs-15">
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-success-transparent rounded-pill"><i class="ri-edit-line"></i></a>
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-danger-transparent rounded-pill"><i class="ri-delete-bin-line"></i></a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
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
