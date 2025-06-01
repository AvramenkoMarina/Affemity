import { useCallback, useMemo, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import type { Option } from '../types/Option'

export const useOptionsList = (initialOptions: Option[]) => {
  const [currentOptions, setCurrentOptions] = useState(initialOptions)
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

  return {
    currentOptions,
    handleCheck,
    handleContinue,
    isAnyChecked,
  }
}
