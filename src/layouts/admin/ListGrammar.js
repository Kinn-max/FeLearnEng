import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function ListGrammar() {

  return (
    <div class="card custom-card">
        <div class="card-header px-5 pt-5 pb-3 justify-content-between">
            <div class="card-title">
                Danh sách bài ngữ pháp
            </div>
            <div class="card-title d-flex">
                <Link to={"/admin/grammar/edit-grammar"}>
                    <button type="button" title='Thêm topic mới' class="btn btn-outline-primary rounded-pill btn-wave waves-effect waves-light">
                        <i class="bx bx-plus fs-6"></i>
                    </button>
                </Link>
            </div>
        </div>     
        <div class="card-body text-start">
            <div class="table-responsive">
                <table class="table text-nowrap">
                    <thead class="table-primary">
                        <tr>
                            <th scope="col">Stt</th>
                            <th scope="col">Hình ảnh</th>
                            <th scope="col">Tên bài</th>
                            <th scope="col">Nộp dung</th>
                            <th scope="col">Số người bình luận</th>
                            <th scope="col">Tùy chọn</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <td>1</td>
                            <td>
                                <img src="../../assets/images/media/media-58.jpg" class="bd-placeholder-img bd-placeholder-img rounded-0" alt="..."/>
                            </td>
                            <td>So sánh tính từ với danh từ</td>
                            <td>Bài viết đây</td>
                            <td>1</td>
                            <td>
                                <div class="hstack gap-2 fs-15">
                                    <Link to={"/admin/exam/1/question/1"} class="btn btn-icon btn-sm btn-success-transparent rounded-pill"><i class="ri-edit-line"></i></Link>
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-danger-transparent rounded-pill"><i class="ri-delete-bin-line"></i></a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>
                                <img src="../../assets/images/media/media-58.jpg" class="bd-placeholder-img bd-placeholder-img rounded-0" alt="..."/>
                            </td>
                            <td  className="table-question-column">So sánh tính từ với danh từ</td>
                            <td>Bài viết đây</td>
                            <td className="table-answer-column">1</td>
                            <td>
                                <div class="hstack gap-2 fs-15">
                                    <Link to={"/admin/exam/1/question/1"} class="btn btn-icon btn-sm btn-success-transparent rounded-pill"><i class="ri-edit-line"></i></Link>
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
