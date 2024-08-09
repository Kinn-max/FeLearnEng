import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ListQuestion() {
    const [formAddTopic,setFormAddTopic] = useState(false)
    const handleForm = ()=>{
        setFormAddTopic(!formAddTopic)
    }
  return (
    <div class="card custom-card">
        <div class="card-header px-5 pt-5 pb-3 justify-content-between">
            <div class="card-title">
            Danh sách câu hỏi
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
                        <div className="mb-3 col-xl-8">
                            <label htmlFor="text-area" className="form-label">Câu hỏi</label>
                            <textarea className="form-control border border-dark border-opacity-25" id="text-area" rows="1"></textarea>
                        </div>
                        <div className="mb-3 col-xl-4">
                            <label htmlFor="word-type" className="form-label fs-14 text-dark">Câu trả lời đúng</label>
                            <select className="form-select" id="word-type" aria-label="Default select example">
                                <option selected>Chọn 1 đáp án</option>
                                <option value="1">A</option>
                                <option value="2">B</option>
                            </select>
                        </div>
                        <div className="mb-3 col-xl-6">
                            <label htmlFor="vietnamese-name" className="form-label fs-14 text-dark">Đáp án A</label>
                            <input type="text" className="form-control border border-dark border-opacity-25" id="vietnamese-name" placeholder="Enter here" />
                        </div>
                        <div className="mb-3 col-xl-6">
                            <label htmlFor="vietnamese-name" className="form-label fs-14 text-dark">Đáp án B</label>
                            <input type="text" className="form-control border border-dark border-opacity-25" id="vietnamese-name" placeholder="Enter here" />
                        </div>
                        <div className="mb-3 col-xl-6">
                            <label htmlFor="vietnamese-name" className="form-label fs-14 text-dark">Đáp án C</label>
                            <input type="text" className="form-control border border-dark border-opacity-25" id="vietnamese-name" placeholder="Enter here" />
                        </div>
                        <div className="mb-3 col-xl-6">
                            <label htmlFor="vietnamese-name" className="form-label fs-14 text-dark">Đáp án D</label>
                            <input type="text" className="form-control border border-dark border-opacity-25" id="vietnamese-name" placeholder="Enter here" />
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
                            <th scope="col">Stt</th>
                            <th scope="col" className="table-question-column">Câu hỏi</th>
                            <th scope="col" className="table-answer-column">Đáp án A</th>
                            <th scope="col" className="table-answer-column">Đáp án B</th>
                            <th scope="col" className="table-answer-column">Đáp án C</th>
                            <th scope="col" className="table-answer-column">Đáp án D</th>
                            <th scope="col" className="table-answer-column">Đáp án đúng</th>
                            <th scope="col" className="table-image-column">Hình ảnh</th>
                            <th scope="col" className="table-action-column">Tùy chọn</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <td>1</td>
                            <td  className="table-question-column">Quốc gia nào có diện tích lớn nhất thế giới?Quốc gia nào có diện tích lớn nhất thế giới?</td>
                            <td className="table-answer-column">Trung Quốc</td>
                            <td>Việt Nam</td>
                            <td>Nga</td>
                            <td>Lào</td>
                            <td>C</td>
                            <td>
                                <img src="../../assets/images/media/media-58.jpg" class="bd-placeholder-img bd-placeholder-img rounded-0" alt="..."/>
                                </td>
                            <td>
                                <div class="hstack gap-2 fs-15">
                                    <Link to={"/admin/exam/1/question/1"} class="btn btn-icon btn-sm btn-success-transparent rounded-pill"><i class="ri-edit-line"></i></Link>
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-danger-transparent rounded-pill"><i class="ri-delete-bin-line"></i></a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>Quốc gia nào có diện tích lớn nhất thế giới?</td>
                            <td>Trung Quốc</td>
                            <td>Việt Nam</td>
                            <td>Nga</td>
                            <td>Lào</td>
                            <td>C</td>
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
