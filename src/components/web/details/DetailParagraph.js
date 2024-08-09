import React, { useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

const DetailParagraph  = () => {
  const [flippedCards, setFlippedCards] = useState({});
  const [progress, setProgress] = useState(0);
  const [isTransformed, setIsTransformed] = useState(false); 
  const flipCard = (index) => {
    setFlippedCards(prev => ({ ...prev, [index]: !prev[index] }));
  };

  const cards = [
    { front: 'Mặt trước 1', back: 'Mặt sau 1' },
    { front: 'Mặt trước 2', back: 'Mặt sau 2' },
    { front: 'Mặt trước 3', back: 'Mặt sau 3' },
    { front: 'Mặt trước 4', back: 'Mặt sau 4' },
    { front: 'Mặt trước 5', back: 'Mặt sau 5' },
  ];
  const handleButtonClick = (action) => {
    if (action === 'skip') {
      setProgress(prev => Math.min(prev + 10, 100)); 
    } else if (action === 'remember') {
      setProgress(prev => Math.max(prev + 10, 0)); 
    }
  };
  const progressBarStyle = {
      width: `${progress}%`,
    };
  const transformCardStyle = isTransformed
    ? { transform: 'rotateY(180deg)' }
    : {};
  const handleExplanationClick = () => {
    setIsTransformed(true);
    const audio = new Audio('/path-to-your-audio-file/sound.mp3');
    audio.play();
  };



  return (
    <div className=' container'>
      <div className='row justify-content-center align-items-center'>
        <div className='col-xl-6'>
            <div class="card custom-card">
              <div class="card-header d-flex align-items-center justify-content-between">
                  <div class="card-title mb-0">
                        Conversation
                  </div>
                  <button type="button" class="btn btn-primary-light rounded-pill btn-wave waves-effect waves-light">3p</button>
              </div>
              <div class="card-body">
                <div class="progress progress-sm progress-custom mb-5 progress-animate" role="progressbar" aria-valuenow="{progress}" aria-valuemin="0" aria-valuemax="100">
                          <h6 class="progress-bar-title">Complete</h6>
                          <div class="progress-bar" style={progressBarStyle}>
                      <div class="progress-bar-value">{progress}%</div>
                  </div>
                </div>
                <Swiper
                  modules={[Navigation]}
                  spaceBetween={50}
                  slidesPerView={1}
                  navigation={{
                    nextEl: '.btn-outline-success',
                    prevEl: '.btn-outline-warning',
                  }}
                >
                {cards.map((card, index) => (
                  <SwiperSlide key={index}>
                    <div 
                      className={`flip-card ${flippedCards[index] ? 'flipped' : ''}`} 
                      onClick={() => flipCard(index)}
                    >
                      <div className="flip-card-inner" style={transformCardStyle}>
                          <div className="flip-card-front">
                              <div class="row g-0 px-3 text-start">
                                      <div class="col-md-4">
                                         <img src="https://tse3.mm.bing.net/th?id=OIP.Ml1i7W49Uq28RVnamTjKBAHaE8&pid=Api&P=0&h=180" class="card-img mb-3" alt="..."/>  
                                      </div>
                                      <div class="col-md-8">
                                          <div class="card-header">
                                              <div class="card-title">{card.front}</div>
                                          </div>
                                          <div class="card-body">
                                              <h6 class="card-subtitle fw-medium mb-2">Phiên âm (adv,adj,...)</h6>
                                              <p class="card-text">Mô tả</p>
                                          </div>
                                          <div class="card-footer card-footer-front">
                                               <i class="bx bx-volume-full"></i>                                    
                                              <p class=""><small class="text-muted"
                                               onClick={() => setIsTransformed(true)}>Click here for explanation</small></p>
                                          </div>
                                      </div>
                                  </div>
                              </div>
                          <div className="flip-card-back">
                                <div class="row g-0">
                                        <div class="col-md-4">
                                            <img src="../assets/images/media/media-37.jpg" class="img-fluid rounded-start h-100 w-100" alt="..."/>
                                        </div>
                                        <div class="col-md-8">
                                            <div class="card-header">
                                                <div class="card-title">{card.back}</div>
                                            </div>
                                            <div class="card-body">
                                                <h6 class="card-subtitle fw-medium mb-2">Horizontal cards are awesome!</h6>
                                                <p class="card-text">This is a wider card with supporting text below as a natural .</p>
                                            </div>
                                            <div class="card-footer card-footer-back">
                                                <p class="card-text"><small class="text-muted"
                                                 onClick={() => setIsTransformed(false)}
                                                >Last updated 3 mins ago</small></p>
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
            <div class="card-footer d-flex justify-content-between px-5">
               <button type="button" 
                  class="btn btn-outline-warning rounded-pill btn-wave waves-effect waves-light"
                  onClick={() => handleButtonClick('skip')}>Bỏ qua</button>
                <button type="button" 
                  class="btn btn-outline-success rounded-pill btn-wave waves-effect waves-light"
                  onClick={() => handleButtonClick('remember')}
                  >Đã nhớ</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailParagraph;