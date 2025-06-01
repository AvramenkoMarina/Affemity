import './ReviewCard.css'
import type { Review } from '../../types/Review'

type Props = {
  review: Review
}

export const ReviewCard: React.FC<Props> = (props) => {
  const { review } = props

  return (
    <div className="review-card">
      <div className="review-card__heading">
        <div className="review-card__heading-name">{review.name}</div>
        <div className="review-card__heading-rating rating">
          <div className="rating__icon">
            <img className="rating__icon-img" src="images/rate.svg" alt="Rate stars" />
          </div>
          <div className="rating__rate">{review.rate.toFixed(1)}</div>
        </div>
      </div>
      <div className="review-card__comment">{review.comment}</div>
    </div>
  )
}
