import type { Option } from '../../types/Option'
import './OptionCard.css'
import classNames from 'classnames'

type Props = {
  option: Option
  onCheck: (title: string) => void
}

export const OptionCard: React.FC<Props> = (props) => {
  const { option, onCheck } = props

  return (
    <div
      key={option.title}
      className={classNames('option-card', {
        'option-card--checked': option.checked,
      })}
      onClick={() => onCheck(option.title)}
    >
      <div className="option-card__content">
        <img src={option.icon} alt={option.title} className="option-card__content-image" />
        <div className="option-card__content-title">{option.title}</div>
      </div>
      <input type="checkbox" className="option-card__checkbox" checked={option.checked} />
    </div>
  )
}
