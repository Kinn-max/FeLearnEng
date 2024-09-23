import React, { useState, useEffect, useCallback } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link } from 'react-router-dom';
import SoundAnswer from '../../../Utils/SoundAnswer';

const cards = [
  {
    english: { name: "Sound", image: "sound.jpg", transcription: "/sound/", part: "N", example: "The sound of the waves crashing on the shore was very soothing.", sound: "sound.mp3" },
    vietnamese: { name: "Âm thanh", part: "Danh từ" }
  },
  {
    english: { name: "Note", image: "note.jpg", transcription: "/nōt/", part: "N", example: "In the A minor scale, the notes are A, B, C, D, E, F, G, A.", sound: "note.mp3" },
    vietnamese: { name: "Nốt", part: "Danh từ" }
  },
  {
    english: { name: "Lyric", image: "lyric.jpg", transcription: "/ˈlirik/", part: "N", example: "The lyrics of the song were very touching.", sound: "lyric.mp3" },
    vietnamese: { name: "Lời bài hát", part: "Danh từ" }
  },
  {
    english: { name: "Music", image: "music.jpg", transcription: "/ˈmyo͞ozik/", part: "N", example: "Classical music helps me concentrate while studying.", sound: "music.mp3" },
    vietnamese: { name: "Âm nhạc", part: "Danh từ" }
  },
];

const DetailVocabularyPractice = () => {
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState({ message: '', isCorrect: null });
  const [isTransformed, setIsTransformed] = useState(false); 
  const [isAnswerShown, setIsAnswerShown] = useState(false);
  const progress = ((currentIndex + 1) / cards.length) * 100;

  const playAudio = useCallback((sound) => {
    const audio = new Audio(`/assets/sound/music/${sound}`);
    audio.play();
  }, []);

  const handleSlideChange = useCallback((swiper) => {
    setCurrentIndex(swiper.activeIndex);
    setIsFlipped(false);
    setUserAnswer('');
    setFeedback({ message: '', isCorrect: null });
    setIsAnswerShown(false);
  }, []);

  const handleFlip = useCallback(() => {
    setIsFlipped(prev => !prev);
  }, []);

  const handleSubmit = useCallback(() => {
    const correctAnswer = cards[currentIndex].english.name.toLowerCase();
    const isCorrect = userAnswer.trim().toLowerCase() === correctAnswer;
    setFeedback({
      message: isCorrect ? 'Correct Answer!' : 'Incorrect Answer! Try again.',
      isCorrect
    });
    if (isCorrect) {
      SoundAnswer(`pew-pew-vo-tay.mp3`)
      setTimeout(() => {
        swiperInstance?.slideNext();
      }, 1000);
    }else{
      SoundAnswer(`thay-huan-oi-gioi-oi.mp3`)
    }
  }, [currentIndex, swiperInstance, userAnswer]);

  const handleSkip = useCallback(() => {
    swiperInstance?.slideNext();
  }, [swiperInstance]);

  const handleShowAnswer = () => {
    setIsAnswerShown(true);
    setUserAnswer("")
  };

  const transformCardStyle = isTransformed
    ? { transform: 'rotateY(180deg)' }
    : {};

  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
        <div className="col-xl-6">
          <div className="card custom-card">
            <div className="card-header d-flex align-items-center justify-content-between">
              <div className="card-title mb-0">Topic: Music</div>
              <button type="button" className="btn btn-primary-light rounded-pill btn-wave waves-effect waves-light">{cards.length} Vocabulary</button>
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
                              <img src={`/assets/images/music/${card.english.image}`} className="card-img mb-3" alt={card.english.name}/>  
                            </div>
                            <div className="col-md-8">
                              <div className="card-body">
                                <h6 className="card-subtitle fw-medium mb-2">{card.english.transcription} ({card.english.part})</h6>
                                <p className="card-text fs-5">{card.english.example}</p>
                              </div>
                              <div className="card-footer card-footer-front">
                                <button className="btn btn-link" onClick={() => playAudio(card.english.sound)}>
                                  <i className="bx bx-volume-full fs-2"></i>
                                </button>
                                <p className=""><small className="text-muted"
                                onClick={() => setIsTransformed(true)}>Click here for explanation</small></p>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flip-card-back">
                          <div className="row text-start g-0">
                            <div className="col-md-4">
                              <img src={`/assets/images/music/${card.english.image}`} className="img-fluid rounded-start h-100 w-100" alt={card.vietnamese.name}/>
                            </div>
                            <div className="col-md-8">
                              <div className="card-header">
                                <div className="card-title fs-2">{card.vietnamese.name}</div>
                              </div>
                              <div className="card-body">
                                <p className="card-text">{card.vietnamese.part}</p>
                              </div>
                              <div className="card-footer card-footer-back">
                                <p className="card-text"><small className="text-muted"
                                onClick={() => setIsTransformed(false)}>Click here for explanation</small></p>
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
                placeholder={isAnswerShown ? cards[currentIndex].english.name : "Enter answer here!"}
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
            {feedback.message && (
              <div className={`feedback-message ${feedback.isCorrect ? 'text-success' : 'text-danger'}`}>
                {feedback.message}
              </div>
            )}
            <div className="card-footer d-flex justify-content-center px-5">
              {currentIndex === cards.length - 1 ? (
                <Link to="/study/practice/result" className="btn btn-outline-success rounded-pill btn-wave waves-effect waves-light">
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailVocabularyPractice;