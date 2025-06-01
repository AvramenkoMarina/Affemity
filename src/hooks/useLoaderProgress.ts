import { useEffect, useState } from 'react'

export const useLoaderProgress = ({
  isActive,
  onComplete,
}: {
  isActive: boolean
  onComplete: (percent: number) => void
}) => {
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
      setTimeout(() => onComplete(filled), 500)
    }
  }, [filled, isActive, isPopUpOpen, onComplete])

  const handlePopupClose = () => {
    setIsPopUpOpen(false)
    setFilled(51)
  }

  return {
    filled,
    isPopUpOpen,
    handlePopupClose,
  }
}
