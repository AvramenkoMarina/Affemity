import './OptionsList.css'
import { OptionCard } from '../OptionCard'
import { MainButton } from '../MainButton'
import { useOptionsList } from '../../hooks/useOptionsList'
import type { Option } from '../../types/Option'

type Props = {
  options: Option[]
}

export const OptionsList: React.FC<Props> = ({ options }) => {
  const { currentOptions, handleCheck, handleContinue, isAnyChecked } = useOptionsList(options)

  return (
    <div className="options-list">
      <div className="options-list__list">
        {currentOptions.map((option) => (
          <OptionCard key={option.title} option={option} onCheck={handleCheck} />
        ))}
      </div>
      <div className="options-list__button">
        <MainButton isDisabled={!isAnyChecked} onClick={handleContinue}>
          Continue
        </MainButton>
      </div>
    </div>
  )
}
