import React, { useState } from 'react'
import DetailExam from '../../components/web/details/DetailExam'

export default function Exam() {
    const [selectedQuestion, setSelectedQuestion] = useState(0);
    const listQuestion = [
        {id: 1, question:"Quốc gia nào có diện tích lớn nhất thế giới?",a:"Trung Quốc",b:"Nga",c:"Canada",d:"Hoa Kỳ",answer:"B"},
        {id: 2, question:"Nguyên tử được cấu tạo từ bao nhiêu loại hạt cơ bản?",a:"1",b:"2",c:"3",d:"4",answer:"C"},
        {id: 3, question:"Trong bảng tuần hoàn hóa học, ký hiệu của nguyên tố Oxy là gì?",a:"O",b:"Ox",c:"O2",d:"H",answer:"A"},
        {id: 4, question:"Tác phẩm 'Truyện Kiều' là của nhà thơ nào?",a:"Nguyễn Du",b:"Hồ Xuân Hương",c:"Nguyễn Trãi",d:"Lê Thánh Tông",answer:"A"},
    ]
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
        <div className='row text-start'>
            <div class="col-xl-9">
                <DetailExam listQuestion={listQuestion} selectedQuestion={selectedQuestion} onNextQuestion={handleNextQuestion}
                        onPrevQuestion={handlePrevQuestion}/>
            </div>
            <div class="col-xl-3">
                <div class="card custom-card">
                    <div class="card-header d-flex justify-content-between">
                        <div class="card-title">Question</div>
                        <div>15 question</div>
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
                        <a href="javascript:void(0);" class="btn btn-primary">Nộp bài</a>
                </div>
            </div>
        </div>
    </div>
  )
}
