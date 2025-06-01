import './ReviewsList.css'
import { ReviewCard } from '../ReviewCard'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay } from 'swiper/modules'
import { Review } from '../../types/Review'

type Props = {
  reviews: Review[]
}

export const ReviewsList: React.FC<Props> = (props) => {
  const { reviews } = props

  return (
    <div className="reviews-list">
      <Swiper
        slidesPerView={1}
        spaceBetween={100}
        autoplay={{ delay: 3000 }}
        loop={true}
        modules={[Autoplay]}
        speed={500}
      >
        {reviews.map((review) => (
          <SwiperSlide key={review.id}>
            <ReviewCard review={review} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}
