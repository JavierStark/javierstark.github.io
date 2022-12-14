import React from 'react';
import './testimonials.css';
import IMG from '../../assets/Me.jpeg';

// import Swiper core and required modules
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: IMG,
    name: 'Someone',
    review: 'dasfadasfadasfadasfadasfadasf \n' +
      'adasfadasfadasfadasfadasfadasfadasfa \n' +
      'dasfadasfadasfadasfa'
  },
  {
    avatar: IMG,
    name: 'Someone',
    review: 'dasfadasfadasfadasfadasfada\n' +
      'sfadasfadasfadasfadasfadasfadasfa\n' +
      'dasfadasfadasfadasfadasfa'
  },
  {
    avatar: IMG,
    name: 'Someone',
    review: 'dasfadasfadasfadas\n' +
      'fadasfadasfadasfadasfadasfadasfadas\n' +
      'fadasfadasfadasfadasfadasfadasfa'
  },
  {
    avatar: IMG,
    name: 'Someone',
    review: 'dasfadasfadasfadasfa\n' +
      'dasfadasfadasfadasfadasfadasfadasfad\n' +
      'asfadasfadasfadasfadasfadasfa'
  }
]

const Testimonials = () => {
  return (
    <section id={'testimonials'}>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container testimonials__container"
              modules={[Navigation, Pagination]}
              spaceBetween={40}
              slidesPerView={1}
              pagination={{clickable: true}}>
        {
          data.map(({avatar, name, review}, index) => {
            return (
              <SwiperSlide key={index} className="testimonial">
                <div className="client__avatar">
                  <img src={IMG} alt={name}/>
                </div>
                <h5 className={'client__name'}>{name}</h5>
                <small className={'client__review'}>{review}</small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  );
};

export default Testimonials;