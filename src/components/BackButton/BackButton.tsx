import './BackButton.css'
import { Link } from 'react-router-dom'

export const BackButton = () => {
  return (
    <Link to=".." className="back-button">
      <img src="images/arrow.svg" alt="Back arrow" className="back-button__icon" />
    </Link>
  )
}
