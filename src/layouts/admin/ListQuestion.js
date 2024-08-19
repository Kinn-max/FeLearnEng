import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { createQuestion, deleteQuestion, getAllQuestionByCategoryById, updateQuestion } from '../../api/ExamApi';
import Empty from '../../Utils/Empty';
import ShowNotification from '../../Utils/Notification';


export default function ListQuestion() {
    const [formAddTopic,setFormAddTopic] = useState(false)
    const [question, setQuestion] = useState([]);
    const [loading, setLoading] = useState(true);
    const [reload, setReload] = useState(false);
    const handleForm = ()=>{
        setFormAddTopic(!formAddTopic)
    }
    const { id } = useParams();
     // data
     const [contentQuestion, setContentQuestion] = useState("");
     const [idItem, setIdItem] = useState(null);
     const [answerA, setAnswerA] = useState("");
     const [answerB, setAnswerB] = useState("");
     const [answerC, setAnswerC] = useState("");
     const [answerD, setAnswerD] = useState("");
     const [answer, setAnswer] = useState("");
     const [image, setImage] = useState(null);
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getAllQuestionByCategoryById(id);
                if (data) {
                    setQuestion(data);
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
    //image
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
    // reset
    const resetForm = () => {
        setIdItem(null);
        setContentQuestion("");
        setAnswer("");
        setAnswerA("")
        setAnswerB("")
        setAnswerC("")
        setAnswerD("")
        setImage(null);
    }
     //submit
    const handleSubmit = async (e) => {
        e.preventDefault();
 
        let base64Image = null;
        if (image instanceof File) {
            base64Image = await getBase64(image);
        } else {
            base64Image = image; 
        }
        const data = {
            id: idItem,
            categoryId: id,
            question: contentQuestion,
            answerA: answerA,
            answerB: answerB,
            answerC: answerC,
            answerD: answerD,
            answer: answer,
            image: base64Image
        };
        try {
            let response;
            if (idItem == null) {
                response = await createQuestion(data);
            } else {
                response = await updateQuestion(data, idItem);
            }
            if (Array.isArray(response.message)) {
                let messageError = "";
                response.message.forEach((error, index) => {
                    messageError += `- ${error}${index < response.message.length - 1 ? '<br>' : ''}`;
                });
                ShowNotification("error", "Lỗi thiếu dữ liệu", messageError);
            }else {
                setReload(prev => !prev); 
                resetForm()
                ShowNotification("success", "Thành công", idItem? "Cập nhật câu hỏi thành công":"Thêm câu hỏi thành công");
            }
            
        } catch (error) {
            console.error('Error:', error);
            ShowNotification("error", "Lỗi", "Đã có lỗi xảy ra");
        }
    };
    //edit
    const handleEdit = (qs) => {
        setIdItem(qs.id);
        setContentQuestion(qs.question);
        setAnswer(qs.answer);
        setAnswerA(qs.answerA)
        setAnswerB(qs.answerB)
        setAnswerC(qs.answerC)
        setAnswerD(qs.answerD)
        setImage(qs.image);
        setFormAddTopic(true);
    };
    //delete
    const handleDelete = async (id) => {
        try {   
                await deleteQuestion(id);
                ShowNotification("success", "Thành công", "Xóa câu hỏi thành công");
             setReload(prev => !prev);
        } catch (error) {
            console.error('Error:', error);
            ShowNotification("error", "Lỗi", "Không thể xóa câu hỏi");
        }

    };

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
                <form onSubmit={handleSubmit}>
                    <div className="row">
                        <div className="mb-3 col-xl-8">
                            <label htmlFor="text-area" className="form-label">Câu hỏi</label>
                            <textarea 
                                className="form-control border border-dark border-opacity-25"
                                id="text-area" rows="1"
                                value={contentQuestion}
                                onChange={(e) => setContentQuestion(e.target.value)} 
                                ></textarea>
                        </div>
                        <div className="mb-3 col-xl-4">
                            <label htmlFor="word-type" className="form-label fs-14 text-dark">Câu trả lời đúng</label>
                            <select onChange={(e) => setAnswer(e.target.value)} 
                                  value={answer}  defaultValue=""   className="form-select" id="word-type" aria-label="Default select example">
                                <option value=""disabled>Chọn 1 đáp án</option>
                                <option value="A">A</option>
                                <option value="B">B</option>
                                <option value="C">C</option>
                                <option value="D">D</option>
                            </select>
                        </div>
                        <div className="mb-3 col-xl-6">
                            <label htmlFor="vietnamese-name" className="form-label fs-14 text-dark">Đáp án A</label>
                            <input type="text"
                                className="form-control border border-dark border-opacity-25"
                                id="vietnamese-name"
                                placeholder="Enter here"
                                value={answerA}
                                onChange={(e) => setAnswerA(e.target.value)} 
                            />
                        </div>
                        <div className="mb-3 col-xl-6">
                            <label htmlFor="vietnamese-name" className="form-label fs-14 text-dark">Đáp án B</label>
                            <input type="text"
                                className="form-control border border-dark border-opacity-25"
                                id="vietnamese-name"
                                placeholder="Enter here"
                                value={answerB}
                                onChange={(e) => setAnswerB(e.target.value)} 
                                />
                        </div>
                        <div className="mb-3 col-xl-6">
                            <label htmlFor="vietnamese-name" className="form-label fs-14 text-dark">Đáp án C</label>
                            <input type="text"
                                className="form-control border border-dark border-opacity-25"
                                id="vietnamese-name"
                                placeholder="Enter here"
                                value={answerC}
                                onChange={(e) => setAnswerC(e.target.value)} 
                            />
                        </div>
                        <div className="mb-3 col-xl-6">
                            <label htmlFor="vietnamese-name" className="form-label fs-14 text-dark">Đáp án D</label>
                            <input type="text"
                             className="form-control border border-dark border-opacity-25"
                              id="vietnamese-name" 
                              placeholder="Enter here" 
                              value={answerD}
                                onChange={(e) => setAnswerD(e.target.value)} 
                              />
                        </div>
                        <div className="col-xl-6 mb-3">
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
        <div class="card-body text-start">
        {question.length > 0 ? (
                <div class="table-responsive">
                        <table class="table ">
                            <thead class="table-primary">
                                <tr>
                                    <th scope="col">Stt</th>
                                    <th  className="table-question-column">Câu hỏi</th>
                                    <th scope="col" className="table-answer-column">Đáp án A</th>
                                    <th scope="col" className="table-answer-column">Đáp án B</th>
                                    <th scope="col" className="table-answer-column">Đáp án C</th>
                                    <th scope="col" className="table-answer-column">Đáp án D</th>
                                    <th scope="col" className="table-answer-column">Đáp án đúng</th>
                                    <th scope="col" className="table-image-column">Hình ảnh</th>
                                    <th scope="col" className="table-action-column">Tùy chọn</th>
                                </tr>
                            </thead>
                            <tbody>
                            {question.map((qs, index) => (
                                 <tr key={index}>
                                    <td>{index+1}</td>
                                    <td>{qs.question}</td>
                                    <td>{qs.answerA}</td>
                                    <td>{qs.answerB}</td>
                                    <td>{qs.answerC}</td>
                                    <td>{qs.answerD}</td>
                                    <td>{qs.answer}</td>
                                    <td>
                                    <img   style={{ maxWidth: '150px'}} src={`data:image/jpeg;base64,${qs.image}`} class="bd-placeholder-img bd-placeholder-img rounded-0" alt="Không có" />
                                        </td>
                                    <td>
                                        <div class="hstack gap-2 fs-15">
                                            <button onClick={() => handleEdit(qs)} class="btn btn-icon btn-sm btn-success-transparent rounded-pill"><i class="ri-edit-line"></i></button>
                                            <button onClick={() => handleDelete(qs.id)} className="btn btn-icon btn-sm btn-danger-transparent rounded-pill"><i className="ri-delete-bin-line"></i></button>
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
