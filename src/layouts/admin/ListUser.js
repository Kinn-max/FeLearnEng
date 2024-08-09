import React from 'react'

export default function ListUser() {
  return (
    <div class="card custom-card">
        <div class="card-header px-5 pt-5 pb-3 justify-content-between">
            <div class="card-title">
                Danh sách người dùng
            </div>
            <div class="card-title d-flex">

            </div>
        </div>     
        <div class="card-body">
             <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12 col-xl-12 grid-margin">
                    <div class="table-responsive border border-bottom-0 userlist-table">
                        <table class="table card-table table-vcenter text-nowrap mb-0">
                            <thead>
                                <tr>
                                    <th><span>Stt</span></th>
                                    <th><span>Ảnh</span></th>
                                    <th><span>Tên</span></th>
                                    <th><span>Ngày tạo</span></th>
                                    <th><span>Trạng thái</span></th>
                                    <th><span>Email</span></th>
                                    <th><span>Khóa</span></th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>
                                        <img alt="avatar" class="rounded-circle avatar-md avatar" src="../assets/images/faces/1.jpg"/>
                                    </td>
                                    <td>Megan Peters</td>
                                    <td>
                                        08/06/2021
                                    </td>
                                    <td>
                                        <span class="badge bg-success-transparent">Active</span>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);">mila@kunis.com</a>
                                    </td>
                                    <td >
                                        <label class="form-switch float-end mb-0">
                                            <a href="javascript:void(0);" class="fs-14 mb-0 me-2 text-primary">Hiện/Ẩn</a>
                                            <input type="checkbox" name="form-switch-checkbox3" class="form-switch-input"/>
                                            <span class="form-switch-indicator custom-radius"></span>
                                        </label>
                                    </td>
                                    <td>
                                        <a href="javascript:void(0);" class="btn btn-sm btn-primary" data-bs-toggle="tooltip" title="Tùy chỉnh" data-bs-original-title="search">
                                            <i class="las la-search"></i>
                                        </a>
                                        <a href="javascript:void(0);" class="btn btn-sm btn-info btn-b" data-bs-toggle="tooltip" title="Phân quyền" data-bs-original-title="edit">
                                            <i class="las la-pen"></i>
                                        </a>
                                        <a href="javascript:void(0);" class="btn btn-sm btn-danger" data-bs-toggle="tooltip" title="Delete" data-bs-original-title="delete">
                                            <i class="las la-trash"></i>
                                        </a>
                                    </td>
                                </tr>
                                
                            </tbody>
                        </table>
                    </div>
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
    </div>
  )
}
