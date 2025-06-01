import './PopUp.css'
import type { PopUpQuestion } from '../../types/PopUpQuestion'

type Props = {
  question: PopUpQuestion
  onClose: () => void
}

export const PopUp: React.FC<Props> = (props) => {
  const { question, onClose } = props

  return (
    <div className="pop-up__wrapper">
      <div key={question.id} className="pop-up">
        <div className="pop-up__heading">
          <div className="pop-up__heading-subtitle">To move forward, specify</div>
          <div className="pop-up__heading-title">{question.content}</div>
        </div>
        <div className="pop-up__variants">
          <button className="pop-up__variants-var" onClick={onClose}>
            No
          </button>
          <button className="pop-up__variants-var" onClick={onClose}>
            Yes
          </button>
        </div>
      </div>
    </div>
  )
}
