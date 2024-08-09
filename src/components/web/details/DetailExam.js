import React, { useCallback, useEffect, useState } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

export default function DetailExam({ listQuestion, selectedQuestion, onNextQuestion, onPrevQuestion }) {
    const [swiperInstance, setSwiperInstance] = useState(null);

    const handleNavigation = useCallback((direction) => {
        if (swiperInstance) {
            if (direction === 'prev') {
                swiperInstance.slidePrev();
                onPrevQuestion(); 
            } else {
                swiperInstance.slideNext();
                onNextQuestion(); 
            }
        }
    }, [swiperInstance, onNextQuestion, onPrevQuestion]);

    useEffect(() => {
        if (swiperInstance) {
            swiperInstance.slideTo(selectedQuestion);
        }
    }, [swiperInstance, selectedQuestion]);

    return (
        <div className="card custom-card">
            <div className="card-header justify-content-between">
                <div className="card-title">Default Buttons</div>
                <div className="prism-toggle">
                    <button className="btn btn-primary-light">Thời gian làm bài</button>
                </div>
            </div>
            <div className="card-body">
                <Swiper 
                    navigation={false}
                    modules={[Navigation]}
                    allowTouchMove={false}
                    onSwiper={(swiper) => setSwiperInstance(swiper)}
                    className="mySwiper"
                >
                    {listQuestion.map((item, index) => (
                        <SwiperSlide key={index}>
                            <div className='list-group px-5 pb-3'>{item.question}</div>
                            <div className='list-group d-flex justify-content-between w-100 px-5'>
                                <input 
                                    type="radio" 
                                    className="btn-check" 
                                    name={`btnradio${index}`} 
                                    id={`btnradio${index}1`} 
                                    onClick={(e) => console.log(e.target.id)}
                                />
                                <label 
                                    className="text-start btn btn-outline-success my-1 btn-wave waves-effect waves-light" 
                                    htmlFor={`btnradio${index}1`}
                                >
                                    {item.a}
                                </label>

                                <input 
                                    type="radio" 
                                    className="btn-check" 
                                    name={`btnradio${index}`} 
                                    id={`btnradio${index}2`} 
                                    onClick={(e) => console.log(e.target.id)}
                                />
                                <label 
                                    className="text-start btn btn-outline-success my-1 btn-wave waves-effect waves-light" 
                                    htmlFor={`btnradio${index}2`}
                                >
                                    {item.b}
                                </label>

                                <input 
                                    type="radio" 
                                    className="btn-check" 
                                    name={`btnradio${index}`} 
                                    id={`btnradio${index}3`} 
                                />
                                <label 
                                    className="text-start btn btn-outline-success my-1 btn-wave waves-effect waves-light" 
                                    htmlFor={`btnradio${index}3`}
                                >
                                    {item.c}
                                </label>

                                <input 
                                    type="radio" 
                                    className="btn-check" 
                                    name={`btnradio${index}`} 
                                    id={`btnradio${index}4`} 
                                />
                                <label 
                                    className="text-start btn btn-outline-success my-1 btn-wave waves-effect waves-light" 
                                    htmlFor={`btnradio${index}4`}
                                >
                                    {item.d}
                                </label>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper> 
            </div>
            <div className="card-footer">
                <div className="btn-list d-flex justify-content-between">
                    <button 
                        type="button" 
                        className="btn btn-danger-light rounded-pill btn-wave waves-effect waves-light"
                        onClick={() => handleNavigation('prev')}
                    >
                        Câu trước
                    </button>
                    <button 
                        type="button" 
                        className="btn btn-warning-light rounded-pill btn-wave waves-effect waves-light"
                        onClick={() => handleNavigation('next')}
                    >
                        Câu sau
                    </button>
                </div>
            </div>
        </div>
    );
}
