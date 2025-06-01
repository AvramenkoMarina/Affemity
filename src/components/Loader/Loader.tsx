import { useEffect, useState } from 'react'
import './Loader.css'
import type { LoaderTitle } from '../../types/LoaderTitle'
import { PopUp } from '../PopUp'
import { popUpQuestion } from '../../utils/PopUpQuestion'

type Props = {
  loaderTitle: LoaderTitle
  isActive: boolean
  onComplete: (percent: number) => void
}

export const Loader: React.FC<Props> = (props) => {
  const { loaderTitle, isActive, onComplete } = props

  const [filled, setFilled] = useState(0)
  const [isPopUpOpen, setIsPopUpOpen] = useState(false)

  useEffect(() => {
    if (!isActive || isPopUpOpen) return

    if (filled < 50) {
      const timeout = setTimeout(() => setFilled((prev) => prev + 1), 50)
      return () => clearTimeout(timeout)
    }

    if (filled === 50) {
      setIsPopUpOpen(true)
    }

    if (filled > 50 && filled < 100) {
      const timeout = setTimeout(() => setFilled((prev) => prev + 1), 50)
      return () => clearTimeout(timeout)
    }

    if (filled === 100) {
      setTimeout(onComplete, 500)
    }
  }, [filled, isActive, isPopUpOpen, onComplete])

  const handlePopupClose = () => {
    setIsPopUpOpen(false)
    setFilled(51)
  }

  return (
    <>
      <div className="loader">
        <div className="loader__content">
          <p className="loader__content-title">{loaderTitle.title}</p>
          <span className="loader__content-percent">{filled}%</span>
        </div>
        <div className="loader__progress">
          <div className="loader__progress-filled" style={{ width: `${filled}%` }}></div>
        </div>
      </div>
      {isActive && isPopUpOpen && (
        <PopUp question={popUpQuestion[loaderTitle.id - 1]} onClose={handlePopupClose} />
      )}
    </>
  )
}
