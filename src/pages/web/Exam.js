import React, { useEffect, useState } from 'react'
import DetailExam from '../../components/web/details/DetailExam'
import { useNavigate, useParams } from 'react-router-dom';
import { getAllExamByCategoryByIdAndStatus } from '../../api/ExamApi';
import Empty from '../../Utils/Empty';

export default function Exam() {
    const [selectedQuestion, setSelectedQuestion] = useState(0);
    const [listQuestion, setListQuestion] = useState([])
    const [listAnswer, setListAnswer] = useState({});
    const {id} = useParams()
    const navigate = useNavigate();
    useEffect(() => {
        const fetchCategories = async () => {

            try {
                const data = await getAllExamByCategoryByIdAndStatus(id);
                if (data) {
                    setListQuestion(data);
                }
            } catch (error) {
                console.log(error);
            } 
        };

        fetchCategories();
    }, [id]);
    const handleNextQuestion = () => {
        if (selectedQuestion < listQuestion.length - 1) {
            setSelectedQuestion(prev => prev + 1);
        }
    };
    const handlePrevQuestion = () => {
        if (selectedQuestion > 0) {
            setSelectedQuestion(prev => prev - 1);
        }
    };
  return (
    <div className='container'>
        {listQuestion.length ? (
            <div className='row text-start'>
                <div class="col-xl-9">
                    <DetailExam  listQuestion={listQuestion} selectedQuestion={selectedQuestion} onNextQuestion={handleNextQuestion}
                            onPrevQuestion={handlePrevQuestion} setListAnswer={setListAnswer}/>
                </div>
                <div class="col-xl-3">
                    <div class="card custom-card">
                        <div class="card-header d-flex justify-content-between">
                            <div class="card-title">Question</div>
                            <div>{listQuestion.length} question</div>
                        </div>
                        <div class="card-body">
                            {listQuestion.map((item, index) => (
                                <button
                                key={index}
                                type="button"
                                className={`btn mx-1 my-1 btn-outline-dark btn-wave waves-effect waves-light ${
                                selectedQuestion === index ? 'active' : ''
                                    }`}
                                onClick={() => {
                                    setSelectedQuestion(index)
                                }}
                                >
                                {index + 1}
                                </button>
                            ))}
                        </div>
                        <button
                            onClick={() => navigate('/study/result', {
                                state: { answers: listAnswer, id: id, listQuestion: listQuestion }
                            })}
                            className="btn btn-primary"
                            >
                            Nộp bài
                            </button>
                    </div>
                </div>
          </div>
            ): (
                <div className='row d-flex justify-content-center'>
                    <Empty/>
                </div>
            )}
    </div>
  )
}
