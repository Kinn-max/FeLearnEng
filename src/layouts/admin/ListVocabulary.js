import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'

import Empty from '../../Utils/Empty';
import { createVocabulary, deleteVocabulary, getAllVocabularyByCategoryById, getVocabularyId } from '../../api/VocabularyApi';
import ShowNotification from '../../Utils/Notification';

export default function ListVocabulary() {
    const [formAddTopic,setFormAddTopic] = useState(false)
    const [vocabulary, setVocabulary] = useState([]);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false);
    // data
    const [image, setImage] = useState(null);
    const [name, setName] = useState("");
    const [idItem, setIdItem] = useState(null);
    const [nameVietnamese, setNameVietnamese] = useState("");
    const [transcription, setTranscription] = useState("");
    const [part, setPart] = useState("");
    const [sound, setsound] = useState("");
    const [description, setDescription] = useState("");


    const handleForm = ()=>{
        setFormAddTopic(!formAddTopic)
    }
    const { id } = useParams();
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getAllVocabularyByCategoryById(id);
                if (data) {
                    setVocabulary(data);
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
    const handleImage = (e) => {
        if (e.target.files && e.target.files[0]) {
            setImage(e.target.files[0]);
        }
    };
    const handleAudioUpload = (e) => {
        if (e.target.files && e.target.files[0]) {
            setsound(e.target.files[0]); 
        }
    };
    //image
    const getBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result ? reader.result.split(',')[1] : null);
            reader.onerror = (error) => reject(error);
        });
    };
    //audio
    const getBase64Audio = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result);
            reader.onerror = (error) => reject(error);
        });
    };
    //submit
    const handleSubmit = async (e) => {
        e.preventDefault();
 
        let base64Image = null;
        let base64Audio = null;
        if (image instanceof File) {
            base64Image = await getBase64(image);
        } else {
            base64Image = image; 
        }
    
        if (sound instanceof File) {
            base64Audio = await getBase64Audio(sound);
        } else {
            base64Audio = sound; 
        }
        const data = {
            id: idItem,
            idTopic: id,
            nameVietnamese: nameVietnamese,
            name: name,
            transcription: transcription,
            image: base64Image,
            part: part,
            sound: base64Audio,
            description: description
        };
        try {
            const errorMessages = await createVocabulary(data);
            if (Array.isArray(errorMessages.message)) {
                let messageError = "";
                errorMessages.message.forEach((error, index) => {
                    messageError += `- ${error}${index < errorMessages.message.length - 1 ? '<br>' : ''}`;
                });
                ShowNotification("error", "Lỗi thiếu dữ liệu", messageError);
            }else {
                setReload(prev => !prev); 
                setName("");
                setDescription("");
                setIdItem(null);
                setImage(null);
                setsound(null)
                setPart("")
                setTranscription("")
                setNameVietnamese("")
                ShowNotification("success", "Thành công", "Đã thêm/cập nhật từ vựng thành công");
            }
            
        } catch (error) {
            console.error('Error:', error);
            ShowNotification("error", "Lỗi", "Đã có lỗi xảy ra");
        }
    };
    //delete
    const handleDelete = async (idItem) => {
        try {
            await deleteVocabulary(idItem);  
            setReload(prev => !prev);    
        } catch (error) {
            console.error('Error:', error);
            ShowNotification("error", "Lỗi", "Đã có lỗi xảy ra");
        }
    };
    //edit
    const handleEdit = async (id) => {
        try {
            const response = await getVocabularyId(id);  
            console.log(response)
            setName(response.name);
            setDescription(response.description);
            setIdItem(response.id);
            setImage(response.image);
            setsound(response.sound)
            setPart(response.part)
            setTranscription(response.transcription)
            setNameVietnamese(response.nameVietnamese)
            setFormAddTopic(true);
        } catch (error) {
            console.error('Error:', error);
            ShowNotification("error", "Lỗi", "Đã có lỗi xảy ra");
        }
    };
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
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="mb-3 col-xl-3">
                            <label htmlFor="english-name" className="form-label fs-14 text-dark">Tên tiếng Anh</label>
                            <input type="text" 
                                className="form-control" 
                                id="english-name" 
                                placeholder="Enter here!"
                                value={name}
                                onChange={(e) => setName(e.target.value)}  />
                        </div>
                        <div className="mb-3 col-xl-3">
                            <label htmlFor="vietnamese-name" className="form-label fs-14 text-dark">Tên tiếng Việt</label>
                            <input type="text"
                             className="form-control"
                              id="vietnamese-name" 
                              placeholder="Enter here"
                              value={nameVietnamese}
                              onChange={(e) => setNameVietnamese(e.target.value)} />
                        </div>
                        <div className="mb-3 col-xl-3">
                            <label htmlFor="pronunciation" className="form-label fs-14 text-dark">Phiên âm</label>
                            <input type="text" 
                            className="form-control"
                                id="pronunciation"
                              placeholder="Enter here!"
                              value={transcription}
                              onChange={(e) => setTranscription(e.target.value)}  />
                        </div>
                        <div className="mb-3 col-xl-3">
                            <label htmlFor="word-type" className="form-label fs-14 text-dark">Thuộc từ loại</label>
                            <select
                                className="form-select"
                                id="word-type"
                                aria-label="Default select example"
                                onChange={(e) => setPart(e.target.value)}
                                value={part}
                                defaultValue=""  
                                >
                                <option value="" disabled>Chọn từ loại</option>
                                <option value="N">Danh từ</option>
                                <option value="V">Động từ</option>
                                <option value="Adv">Trạng từ</option>
                                <option value="Adj">Tính từ</option>
                            </select>
                        </div>
                        <div className="mb-3 col-xl-3">
                            <label htmlFor="text-area" className="form-label">Ví dụ về tiếng anh</label>
                            <textarea className="form-control"
                                id="text-area"
                                rows="1"
                                onChange={(e) => setDescription(e.target.value)}
                                value={description}
                                >
                              </textarea>
                        </div>
                        <div className="mb-3 col-xl-3">
                            <label htmlFor="audio-file" className="form-label fs-14 text-dark">Tải lên tệp MP3</label>
                            <input type="file"
                                 className="form-control"
                                 id="audio-file" 
                                 accept="audio/*"
                                 onChange={handleAudioUpload}
                             />
                        </div>
                        <div className="col-xl-3 mb-3">
                            <label className="form-label fs-14 text-dark" htmlFor="image-file">File ảnh</label>
                            <input type="file"
                                className="form-control"
                                id="image-file"
                                onChange={handleImage}
                               />
                        </div>
                            <div className="d-flex justify-content-center">
                            <button className="btn btn-primary" type="submit">Thêm mới</button>
                        </div>
                    </div>
                </form>
            </div>
        )}         
        <div class="card-body d-flex justify-content-center text-start">
            {vocabulary.length > 0 ? (
                <div class="table-responsive" style={{width: "100%"}}>
                        <table class="table">
                            <thead class="table-primary text-center">
                                <tr>
                                    <th>Stt</th>
                                    <th scope="col">Tên tiếng anh</th>
                                    <th scope="col">Tên tiếng việt</th>
                                    <th scope="col">Phiên âm</th>
                                    <th scope="col">Thuộc từ loại</th>
                                    <th scope="col" className='col-xl-3'>Ví dụ</th>
                                    <th scope="col">Link âm thanh</th>
                                    <th scope="col">Hình ảnh</th>
                                    <th scope="col">Tùy chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                            {vocabulary.map((vocab, index) => (
                                <tr key={index}>
                                    <td>{index + 1}</td>
                                    <td>{vocab.name}</td>
                                    <td>{vocab.nameVietnamese}</td>
                                    <td>{vocab.transcription}</td>
                                    <td>{vocab.part}</td>
                                    <td>{vocab.description}</td>
                                    <td>
                                        <audio controls  style={{ width: '100px', borderRadius: '10px', backgroundColor: '#f0f0f0' }}>
                                            <source src={vocab.sound} type="audio/mpeg" />
                                        
                                        </audio>
                                    </td>
                                    <td>
                                        <img  style={{ maxWidth: '150px'}} src={`data:image/jpeg;base64,${vocab.image}`} class="bd-placeholder-img bd-placeholder-img rounded-0" alt="..." />
                                    </td>
                                    <td>
                                        <div class="hstack gap-2 fs-15">
                                            <button class="btn btn-icon btn-sm btn-success-transparent rounded-pill" 
                                            onClick={()=>handleEdit(vocab.id)}>
                                                <i class="ri-edit-line"></i>
                                            </button>
                                            <button  class="btn btn-icon btn-sm btn-danger-transparent rounded-pill"
                                                 onClick={() => handleDelete(vocab.id)}>
                                                <i class="ri-delete-bin-line"></i>
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
