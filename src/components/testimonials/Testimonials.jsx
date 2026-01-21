import React from 'react';
import './testimonials.css';
const GABRIEL = '/assets/Gabriel.jpg';
const LL2222 = '/assets/Il2222.jpg';
const ALEJANDRO = '/assets/Alejandro.jpg';

// import Swiper core and required modules
import {Swiper, SwiperSlide} from 'swiper/react';
import {Navigation, Pagination} from 'swiper';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

const data = [
  {
    avatar: GABRIEL,
    name: 'Gabriel',
    review: 'Javier has been able to convey the knowledge in a clear and concise way. I recommend him'
  },
  {
    avatar: LL2222,
    name: 'll2222',
    review: 'I had a class with Javier about basic javascript and it was great! His explanations are very clear and give examples for a good understanding, without a doubt, I\'ll have more classes with him'
  },
  {
    avatar: ALEJANDRO,
    name: 'Alejandro',
    review: 'Javier understands the limitations and pros of each person, allowing the learning process to be faster or slower based on your ability to overcome obstacles. Furthermore, on a personal note, it\'s very helpful to be able to speak in your own language with someone about programming.',
  },
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
                  <img src={avatar} alt={name}/>
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