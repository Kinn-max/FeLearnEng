import React from 'react'

export default function DetailVocabulary() {
  return (
    <div className="card custom-card">
      <div class="card-header pb-3 justify-content-between">
        <div class="card-title">
        Chỉnh sửa từ vựng
        </div>
      </div>
      <div className="card-body">
          <form method="post">
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
      <div className="card-footer d-none border-top-0"></div>
    </div>
  );
}  