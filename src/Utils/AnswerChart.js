import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useLocation } from 'react-router-dom';
import { SwiperSlide } from 'swiper/react';
import Empty from './Empty';

ChartJS.register(ArcElement, Tooltip, Legend);

const AnswerChart = () => {
  const location = useLocation();
  const { answers, id, listQuestion ,timeElapsed} = location.state || {};  
  if (!answers || !id || !listQuestion) {
    return <div className='row d-flex justify-content-center'><Empty/></div>;
  }

  let correct = 0;
  let inCorrect = 0;
  let skip = 0;

  listQuestion.forEach((item, index) => {
    if (answers[index] !== undefined) { 
      if (answers[index] === item.answer) {
        correct++;
      } else {
        inCorrect++;
      }
    } else {
      skip++;
    }
  });

  const data = {
    labels: ['Correct Answers', 'Incorrect Answers', 'Skip Answers'],
    datasets: [
      {
        label: 'Answers',
        data: [correct, inCorrect, skip],
        backgroundColor: ['#27ae60', '#ee335e', '#5d6d7e'],
        borderColor: ['#27ae60', '#ee335e', '#5d6d7e'],
        borderWidth: 1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'bottom',
      },
    },
  };

  const formatTime = () => {
    const minutes = Math.floor(timeElapsed / 60);
    const seconds = timeElapsed % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
};
  return (
    <div className='container'>
      <div className='row text-start'>
        <div className='col-xl-9'>
          <div className="card custom-card">
            <div className="card-header justify-content-between">
              <div className="card-title">Tổng số câu hỏi: {listQuestion.length}</div>
              <div className="prism-toggle">
                <button className="btn block-hover btn-primary-light">Correct: {correct}/{listQuestion.length}</button>
                <button className="btn block-hover border-start mx-1 btn-primary-light">Thời gian làm bài: {formatTime()}</button>
              </div>
            </div>
            <div className="card-body">
              {listQuestion.map((item, index) => (
                <SwiperSlide key={index}>
                  <div className='list-group px-5 pb-3'> {index+1}. {item.question}</div>
                  <div className='list-group d-flex justify-content-between w-100 px-5'>
                    {[item.answerA, item.answerB, item.answerC, item.answerD].map((answer, answerIndex) => {
                      const answerKey = String.fromCharCode(65 + answerIndex);
                      const isCorrect = item.answer === answerKey;
                      const isUserAnswer = answers[index] === answerKey;

                      return (
                        <React.Fragment key={answerIndex}>
                          <input 
                            type="radio" 
                            className="btn-check" 
                            id={`answer-${index}-${answerIndex}`} 
                            name={`question-${index}`} 
                            readOnly 
                            checked={isUserAnswer}
                          />
                          <label 
                            className={`text-start border btn my-1 btn-wave waves-effect waves-light ${isUserAnswer ? (isCorrect ? 'btn-outline-success' : 'btn-outline-danger') : ''}`}
                            htmlFor={`answer-${index}-${answerIndex}`}
                          >
                            {answerKey+". "+answer}
                          </label>
                        </React.Fragment>
                      );
                    })}
                  </div>
                </SwiperSlide>
              ))}
            </div>
          </div>
        </div>
        <div className='col-xl-3'>
          <div className='card custom-card'>
            <div className='card-header d-flex justify-content-between'>
              <div className='card-title'>Correct details</div>
            </div>
            <div className='card-body'>
              <Pie data={data} className='text-start' options={options} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AnswerChart;
