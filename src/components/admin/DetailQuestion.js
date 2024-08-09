import React from 'react'

export default function DetailQuestion() {
  return (
    <div className="card custom-card">
    <div class="card-header pb-3 justify-content-between">
      <div class="card-title">
      Chỉnh sửa câu hỏi
      </div>
    </div>
    <div className="card-body">
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
    <div className="card-footer d-none border-top-0"></div>
  </div>
  )
}
