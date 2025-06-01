import './OptionsList.css'
import { OptionCard } from '../OptionCard'
import { MainButton } from '../MainButton'
import { useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Option } from '../../types/Option'

type Props = {
  options: Option[]
}

export const OptionsList: React.FC<Props> = (props) => {
  const { options } = props

  const [currentOptions, setCurrentOptions] = useState(options)

  const navigate = useNavigate()

  const handleCheck = useCallback((title: string) => {
    setCurrentOptions((prevOptions) =>
      prevOptions.map((option) =>
        option.title === title ? { ...option, checked: !option.checked } : option
      )
    )
  }, [])

  const isAnyChecked = useMemo(
    () => currentOptions.some((option) => option.checked),
    [currentOptions]
  )

  const handleContinue = useCallback(() => {
    if (isAnyChecked) {
      navigate('/confirmation')
    }
  }, [isAnyChecked, navigate])

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
