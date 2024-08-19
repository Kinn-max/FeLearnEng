import React, { useEffect, useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { useParams } from 'react-router-dom';
import ShowNotification from '../../Utils/Notification';
import { createBlog, getBlogById, updateBlog } from '../../api/GrammarApi';

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
  //data
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [id, setId] = useState(null);
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(true);
  const { idCate ,idEdit} = useParams();
    useEffect(() => {
      const fetchCategories = async () => {
          try {
              if(idEdit){
                const data = await getBlogById(idEdit);
                setId(data.id)
                setTitle(data.name)
                setContent(data.content)
                setImage(data.image)
              }
          } catch (error) {
            console.log(error)
          } finally {
              setLoading(false);
          }
      };

      fetchCategories();
  }, [idEdit]);
  if (loading) {
    return <div className="text-center mt-5">Loading...</div>; 
  }
  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (value) => {
    setContent(value);
  };

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
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    let base64Image;
    if (image instanceof File) {
        base64Image = await getBase64(image);
    }
    const data = {
        id: id,
        categoryId: idCate,
        name: title,
        content: content,
        image: base64Image
    };
    try {
      let response;
      if (id == null) {
          response = await createBlog(data); 
      } else {
          response = await updateBlog(data, id); 
      }
      if (Array.isArray(response.message)) {
          let messageError = "";
          response.message.forEach((error, index) => {
              messageError += `${error}${index < response.message.length - 1 ? ', ' : ''}`;
          });
          ShowNotification("error", "Lỗi thiếu dữ liệu", messageError); 
      } else {
          setTitle("");
          setContent("");
          setId(null);
          setImage(null);
          ShowNotification("success", "Thành công", id ? "Cập nhật thành công" : "Thêm mới thành công"); // Hàm này cần được định nghĩa
      }
    } catch (error) {
      console.error("Error submitting the form", error);
    }
  };

  return (
    <div className="card custom-card">
      <div className="card-header px-5 pt-5 pb-3 justify-content-between">
        <div className="card-title">
          Tạo bài viết mới
        </div>
      </div>
      <div className="card-body text-start">
      <ReactQuill
        value={content}
        onChange={handleContentChange}
        modules={modules}
        formats={formats}
        placeholder="Viết nội dung bài viết của bạn ở đây..."
        style={{ height: '', marginBottom: '10px' }}
      />
        <div className="table-responsive">
          <form onSubmit={handleSubmit}>
            <div className='row'>
              <div className="mb-3 col-xl-6">
                <label htmlFor="vietnamese-name" className="form-label fs-14 text-dark">Tiêu đề bài</label>
                <input 
                  type="text"
                  value={title}
                  onChange={handleTitleChange}
                  placeholder="Nhập tiêu đề bài viết" 
                  className="form-control border border-dark border-opacity-25" 
                  id="vietnamese-name"
                />
              </div>
              <div className="mb-3 col-xl-6">
                <label htmlFor="image-upload" className="form-label fs-14 text-dark">Ảnh Đại diện</label>
                <input 
                    type="file" 
                    className="form-control border border-dark border-opacity-25" 
                    id="image-upload" 
                    placeholder="Enter here!" 
                    onChange={handleImage}
                />
            </div>
            </div>
            <div className="d-flex justify-content-center">
              <button className="btn btn-primary mb-5" type="submit">Thêm mới</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
