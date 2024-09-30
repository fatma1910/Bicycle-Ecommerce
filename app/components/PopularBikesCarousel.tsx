'use client'

import {Swiper, SwiperSlide} from 'swiper/react'

import 'swiper/css';
import 'swiper/css/pagination';

import {Pagination} from 'swiper/modules'
import { BikeProps } from '@/types';
import Bike from './Bike';

interface BikesProps_ {
    bikes: BikeProps[] ;
}

const PopularBikesCarousel = ({bikes}:BikesProps_) => {
  return (
    <Swiper
    spaceBetween={5}
    slidesPerView={1}
    breakpoints={{
        640: {slidesPerView:1},
        768: {slidesPerView:2},
        960: {slidesPerView:3},
        1440: {slidesPerView:4},
    }}
    pagination={{
        clickable: true,
    }}
    modules={[Pagination]}
    
    >
        {bikes.map(bike => {
            return (
            <SwiperSlide key={bike._id} >
                <Bike bike={bike} />
            </SwiperSlide>
        )
        })

        }
    </Swiper>
  )
}

export default PopularBikesCarousel