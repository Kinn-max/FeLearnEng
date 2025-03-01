import React, { useState, useCallback, useMemo, useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { Link, useParams } from 'react-router-dom';
import { getAllVocabularyByCategoryById, getAllVocabularyByCategoryByIdAndStatus } from '../../../api/VocabularyApi';
import Empty from '../../../Utils/Empty';


const DetailVocabulary = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [swiperInstance, setSwiperInstance] = useState(null);
  const [isTransformed, setIsTransformed] = useState(false); 
  const {id} = useParams()
  const [cards,setCard] = useState([])
  const [loading, setLoading] = useState(false);

  const progress = useMemo(() => ((currentIndex + 1) / cards.length) * 100, [currentIndex, cards.length]);

  const handleFlip = useCallback(() => setIsFlipped(prev => !prev), []);

  const playAudio = useCallback((sound, event) => {
    event.stopPropagation();
    const audio = new Audio(`${sound}`);
    audio.play();
  }, []);

  const handleSlideChange = useCallback((swiper) => {
    setCurrentIndex(swiper.activeIndex);
    setIsFlipped(false);
  }, []);
  const transformCardStyle = isTransformed
    ? { transform: 'rotateY(180deg)' }
    : {};
  const handleNavigation = useCallback((direction) => {
    if (swiperInstance) {
      direction === 'prev' ? swiperInstance.slidePrev() : swiperInstance.slideNext();
    }
  }, [swiperInstance]);
  useEffect(() => {
    const fetchCategories = async () => {
        setLoading(true);
        try {
            const data = await getAllVocabularyByCategoryByIdAndStatus(id);
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

if (loading) {
  return <div className="text-center mt-5">Đang tải...</div>; 
}
  return (
    <div className="container">
      <div className="row justify-content-center align-items-center">
          {cards.length ?
           ( <div className="col-xl-6">
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
                                <img  src={`data:image/jpeg;base64,${card.image}`} className="card-img mb-3 rounded" alt={card.name} />
                              </div>
                              <div className="col-md-8">
                                <div className="card-header">
                                  <div className="card-title fs-2">{card.name}</div>
                                </div>
                                <div className="card-body">
                                  <h6 className="card-subtitle fw-medium mb-2">/ {card.transcription} / ({card.part})</h6>
                                  <p className="card-text fs-5">{card.description}</p>
                                </div>
                                <div className="card-footer card-footer-front">
                                  <button className="btn btn-link" onClick={(e) => playAudio(card.sound, e)}>
                                    <i className="bx bx-volume-full fs-2"></i>
                                  </button>
                                  <p><small className="text-muted"
                                  onClick={() => setIsTransformed(true)}>Click here for explanation</small></p>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="flip-card-back">
                            <div className="row text-start g-0 px-3">
                              <div className="col-md-4">
                                <img  src={`data:image/jpeg;base64,${card.image}`} className="img-fluid  rounded h-100 w-100" alt={card.vietnamese} />
                              </div>
                              <div className="col-md-8">
                                <div className="card-header">
                                  <div className="card-title fs-2">{card.nameVietnamese}</div>
                                </div>
                                <div className="card-body">
                                  <p className="card-text">{card.vietnamese}</p>
                                </div>
                                <div className="card-footer card-footer-back">
                                  <p><small className="text-muted"
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
              <div className="card-footer d-flex justify-content-between px-5">
                <button type="button" 
                  className="btn btn-outline-warning rounded-pill btn-wave waves-effect waves-light"
                  onClick={() => handleNavigation('prev')}>Quay lại</button>
                {currentIndex === cards.length - 1 ? (
                  <Link to="/study" className="btn btn-outline-success rounded-pill btn-wave waves-effect waves-light">
                    Xong
                  </Link>
                ) : (
                  <button type="button" 
                    className="btn btn-outline-success rounded-pill btn-wave waves-effect waves-light"
                    onClick={() => handleNavigation('next')}>
                    Học tiếp
                  </button>
                )}
              </div>
            </div>
         </div>) :(<Empty/>)}
      </div>
    </div>
  );
};

export default DetailVocabulary;