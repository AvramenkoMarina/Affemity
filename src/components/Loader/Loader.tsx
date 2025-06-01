import './Loader.css'
import type { LoaderTitle } from '../../types/LoaderTitle'
import { PopUp } from '../PopUp'
import { popUpQuestion } from '../../utils/PopUpQuestion'
import { useLoaderProgress } from '../../hooks/useLoaderProgress'

type Props = {
  loaderTitle: LoaderTitle
  isActive: boolean
  onComplete: (percent: number) => void
}

export const Loader: React.FC<Props> = ({ loaderTitle, isActive, onComplete }) => {
  const { filled, isPopUpOpen, handlePopupClose } = useLoaderProgress({
    isActive,
    onComplete,
  })

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
