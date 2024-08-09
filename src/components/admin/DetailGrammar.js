import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

const modules = {
  toolbar: [
    [{ 'header': [1, 2, false] }],
    ['bold', 'italic', 'underline', 'strike', 'blockquote'],
    [{'list': 'ordered'}, {'list': 'bullet'}, {'indent': '-1'}, {'indent': '+1'}],
    ['link', 'image'],
    ['clean']
  ],
};

const formats = [
  'header',
  'bold', 'italic', 'underline', 'strike', 'blockquote',
  'list', 'bullet', 'indent',
  'link', 'image'
];

export default function DetailGrammar() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Blog post:', { title, content });
  };

  return (
    <div className="card custom-card">
      <div className="card-header px-5 pt-5 pb-3 justify-content-between">
        <div className="card-title">
          Tạo bài viết mới
        </div>
      </div>
      <div className="card-body text-start">
        <div className="table-responsive">
          <form onSubmit={handleSubmit}>
            <div className='row'>
              <div className="mb-3 col-xl-6">
                  <label htmlFor="vietnamese-name" className="form-label fs-14 text-dark">Tiêu đề bài</label>
                  <input  type="text"
                    value={title}
                    onChange={handleTitleChange}
                    placeholder="Nhập tiêu đề bài viết" className="form-control border border-dark border-opacity-25" id="vietnamese-name" 
                    />
              </div>
              <div className="mb-3 col-xl-4">
                  <label htmlFor="word-type" className="form-label fs-14 text-dark">Thuộc ngữ pháp</label>
                  <select className="form-select border-dark border-opacity-25" id="word-type" aria-label="Default select example">
                      <option selected>Chọn 1</option>
                      <option value="1">Danh từ</option>
                      <option value="2">Động từ</option>
                  </select>
              </div>
              <ReactQuill
                value={content}
                onChange={handleContentChange}
                modules={modules}
                formats={formats}
                placeholder="Viết nội dung bài viết của bạn ở đây..."
                style={{ height: '300px', marginBottom: '10px' }}
              />
                <div className="d-flex justify-content-center">
                  <button className="btn btn-primary" type="submit"
                  >Thêm mới</button>
                </div>
            </div>
          </form>
        </div>             
      </div>
    </div>
  );
}
