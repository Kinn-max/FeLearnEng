import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Grammar() {
    const [formAddTopic,setFormAddTopic] = useState(false)
    const handleForm = ()=>{
        setFormAddTopic(!formAddTopic)
    }
  return (
    <div class="card custom-card">
        <div class="card-header px-5 pt-5 pb-3 justify-content-between">
            <div class="card-title">
            Danh sách các ngữ pháp
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
                        <div className="mb-3 col-xl-4">
                            <label htmlFor="english-name" className="form-label fs-14 text-dark">Tên ngữ pháp</label>
                            <input type="text" className="form-control border border-dark border-opacity-25" id="english-name" placeholder="Enter here!" />
                        </div>
                        <div className="mb-3 col-xl-4">
                            <label htmlFor="vietnamese-name" className="form-label fs-14 text-dark ">Mô tả</label>
                            <input type="text" className="form-control border border-dark border-opacity-25 " id="vietnamese-name" placeholder="Enter here" />
                        </div>
                        <div className="col-xl-4 mb-3">
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
                            <th scope="col">Stt</th>
                            <th scope="col" >Ảnh</th>
                            <th scope="col" style={{ width: '10%' }}>Tên ngữ pháp</th>
                            <th scope="col">Ngày tạo</th>
                            <th scope="col">Số bài ngữ pháp</th>
                            <th scope="col" style={{ width: '10%' }}>Mô tả</th>
                            <th scope="col" >Trạng thái</th>
                            <th scope="col">Tùy chỉnh</th>
                        </tr>
                    </thead>
                    <tbody >
                        <tr>
                            <td>1</td>
                            <td>
                                <img src="../../assets/images/media/media-58.jpg" class="bd-placeholder-img bd-placeholder-img rounded-0" alt="..."/>
                            </td>
                            <td>Tính từ</td>
                            <td>10-9-2024</td>
                            <td>3</td>
                            <td style={{ width: '10%' }}>Đây là từ vựng giúp bạn hiểu rõ về âm nhạc</td>
                            <td className='text-start'>
                                <label class="form-switch float-end mb-0">
                                    <a href="javascript:void(0);" class="fs-14 mb-0 me-2 text-primary">Hiện/Ẩn</a>
                                    <input type="checkbox" name="form-switch-checkbox3" class="form-switch-input"/>
                                    <span class="form-switch-indicator custom-radius"></span>
                                </label>
                            </td>
                            <td>
                                <div class="hstack gap-2 fs-15">
                                    <Link to={"/admin/grammar/1"} class="btn btn-icon btn-sm btn-success-transparent rounded-pill"><i class="ri-search-line"></i></Link>
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-danger-transparent rounded-pill"><i class="ri-delete-bin-line"></i></a>
                                </div>
                            </td>
                        </tr>
                        <tr>
                            <td>2</td>
                            <td>
                                <img src="../../assets/images/media/media-58.jpg" class="bd-placeholder-img bd-placeholder-img rounded-0" alt="..."/>
                            </td>
                            <td>Danh từ</td>
                            <td>10-9-2024</td>
                            <td>8</td>
                            <td>Đây là từ vựng giúp bạn hiểu rõ về âm nhạc</td>
                            <td className='text-start'>
                                <label class="form-switch float-end mb-0">
                                    <a href="javascript:void(0);" class="fs-14 mb-0 me-2 text-primary">Hiện/Ẩn</a>
                                    <input type="checkbox" name="form-switch-checkbox3" class="form-switch-input"/>
                                    <span class="form-switch-indicator custom-radius"></span>
                                </label>
                            </td>
                            <td>
                                <div class="hstack gap-2 fs-15">
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-success-transparent rounded-pill"><i class="ri-search-2-line"></i></a>
                                    <a href="javascript:void(0);" class="btn btn-icon btn-sm btn-danger-transparent rounded-pill"><i class="ri-delete-bin-line"></i></a>
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
</div>
  )
}
