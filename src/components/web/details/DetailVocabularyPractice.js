import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link, useParams } from 'react-router-dom';
import { getAllVocabularyByCategoryByIdAndStatus } from '../../../api/VocabularyApi';
import Empty from '../../../Utils/Empty';

const DetailVocabularyPractice = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isTransformed, setIsTransformed] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState({ message: '', isCorrect: null });
  const [isAnswerShown, setIsAnswerShown] = useState(false);
  const { id } = useParams();
  const [cards, setCard] = useState([]);
  const [loading, setLoading] = useState(false);

  const progress = useMemo(() => ((currentIndex + 1) / cards.length) * 100, [currentIndex, cards.length]);

  const handleFlip = useCallback(() => setIsFlipped(prev => !prev), []);

  const playAudio = useCallback((sound, event) => {
    const audio = new Audio(sound);
    console.log(audio)
    audio.play();
  }, []);

  const handleSlideChange = useCallback((swiper) => {
    setCurrentIndex(swiper.activeIndex);
    setIsFlipped(false);
  }, []);

  const transformCardStyle = isTransformed ? { transform: 'rotateY(180deg)' } : {};

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const data = await getAllVocabularyByCategoryByIdAndStatus(id);
        console.log(data)
        if (data) {
          setCard(data);
        }
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, [id]);

  const handleSubmit = useCallback(() => {
    const correctAnswer = cards[currentIndex].name.toLowerCase();
    const isCorrect = userAnswer.trim().toLowerCase() === correctAnswer;
    setFeedback({
      message: isCorrect ? 'Correct Answer!' : 'Incorrect Answer! Try again.',
      isCorrect
    });
    setTimeout(() => {
      setFeedback({
        message: '',
        isCorrect: null,
      });
    }, 2000); 
    if (isCorrect) {
      playAudio('/assets/sound/pew-pew-vo-tay.mp3');
      setTimeout(() => {
        swiperInstance?.slideNext();
      }, 1000);
    } else {
      playAudio('/assets/sound/thay-huan-oi-gioi-oi.mp3');
    }
  }, [currentIndex, swiperInstance, userAnswer, cards, playAudio]);

  const handleShowAnswer = () => {
    setIsAnswerShown(true);
    setUserAnswer('');
  };
  const handleSkip = useCallback(() => {
    swiperInstance?.slideNext();
  }, [swiperInstance]);
  if (loading) {
    return <div className="text-center mt-5">Đang tải...</div>;
  }

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        {cards.length ? (
          <div className="col-xl-6">
            <div className="card custom-card">
              <div className="card-header d-flex align-items-center justify-content-between">
                <div className="card-title mb-0">Topic: Music</div>
                <button type="button" className="btn btn-primary-light rounded-pill btn-wave waves-effect waves-light">
                  {cards.length} Vocabulary
                </button>
              </div>
              <div className="card-body">
                <div className="progress progress-sm progress-custom mb-5 progress-animate" role="progressbar" aria-valuenow={progress} aria-valuemin="0" aria-valuemax="100">
                  <h6 className="progress-bar-title">Complete</h6>
                  <div className="progress-bar" style={{ width: `${progress}%` }}>
                    <div className="progress-bar-value">{Math.round(progress)}%</div>
                  </div>
                </div>
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={50}
                  slidesPerView={1}
                  onSwiper={setSwiperInstance}
                  onSlideChange={handleSlideChange}
                >
                  {cards.map((card, index) => (
                    <SwiperSlide key={index}>
                      <div className={`flip-card ${isFlipped ? 'flipped' : ''}`} onClick={handleFlip}>
                        <div className="flip-card-inner" style={transformCardStyle}>
                          <div className="flip-card-front">
                            <div className="row g-0 format-cart text-start">
                              <div className="col-md-4">
                                <img src={`data:image/jpeg;base64,${card.image}`} className="card-img mb-3 rounded" alt={card.name} />
                              </div>
                              <div className="col-md-8">
                                <div className="card-body">
                                  <h6 className="card-subtitle fw-medium mb-2">/ {card.transcription} / ({card.part})</h6>
                                  <p className="card-text fs-5">{card.description}</p>
                                </div>
                                <div className="card-footer card-footer-front">
                                  <button className="btn btn-link" onClick={(e) => playAudio(card.sound, e)}>
                                    <i className="bx bx-volume-full fs-2"></i>
                                  </button>
                                  <p><small className="text-muted" onClick={() => setIsTransformed(true)}>Click here for explanation</small></p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flip-card-back">
                            <div className="row text-start g-0 px-3">
                              <div className="col-md-4">
                                <img src={`data:image/jpeg;base64,${card.image}`} className="img-fluid rounded h-100 w-100" alt={card.vietnamese} />
                              </div>
                              <div className="col-md-8">
                                <div className="card-header">
                                  <div className="card-title fs-2">{card.nameVietnamese}</div>
                                </div>
                                <div className="card-body">
                                  <p className="card-text">{card.vietnamese}</p>
                                </div>
                                <div className="card-footer card-footer-back">
                                  <p><small className="text-muted" onClick={() => setIsTransformed(false)}>Click here for explanation</small></p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              <div className="col-xl-4 col-lg-6 d-flex w-100 px-5 py-3 justify-content-between col-md-6 col-sm-12">
              <input 
                type="text" 
                className="form-control format-input-custom w-75" 
                placeholder={isAnswerShown ? cards[currentIndex].name : "Enter answer here!"}
                value={userAnswer}
                onChange={(e) => setUserAnswer(e.target.value)}
              />
              <div class="btn-list">
                <button 
                  type="button" 
                  className="btn btn-outline-warning rounded-pill btn-wave waves-effect waves-light"
                  onClick={handleSubmit}
                >
                  Submit
                </button>
                <button 
                  type="button" 
                  className="btn btn-dark rounded-pill btn-wave text-white waves-effect waves-light"
                  onClick={handleShowAnswer}
                >
                  Show Answer
                </button>

              </div>  
            </div>
            <div className="card-footer d-flex justify-content-center px-5">
              {currentIndex === cards.length - 1 ? (
                <Link to="/study" className="btn btn-outline-success rounded-pill btn-wave waves-effect waves-light">
                  Xong
                </Link>
              ) : (
                <button 
                  type="button" 
                  className="btn btn-outline-success rounded-pill btn-wave waves-effect waves-light"
                  onClick={handleSkip}
                >
                  Bỏ qua
                </button>
              )}
            </div>
              <div className={`feedback-message ${feedback.isCorrect !== null ? (feedback.isCorrect ? 'text-success' : 'text-danger') : ''}`}>
                {feedback.message}
              </div>
            </div>
          </div>
        ) : (
          <Empty />
        )}
      </div>
    </div>
  );
};

export default DetailVocabularyPractice;
