import styles from './PersonalizedPlan.module.scss'
import logo from '../../assets/logo.svg'
import review1 from '../../assets/review1.svg'
import review2 from '../../assets/review2.svg'
import review3 from '../../assets/review3.svg'
import { useCallback, useEffect, useState } from 'react'
import Modal from '../Modal/Modal'

const steps = [
  'Setting goals',
  'Adapting growth areas',
  'Picking content',
  'Prioritizing challenges',
]

const questions = [
  'Have you tried changing your love life before?',
  'Do you prefer to have expert guidance?',
  'Do you lack consistency?',
  'Are you open to self-improvement?',
]

const images = [review1, review2, review3]

const PersonalizedPlan = () => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [step, setStep] = useState(0) // від 0 до 3 (4 кроки)
  const [filled, setFilled] = useState(0) // прогресбар від 0 до 100
  const [showPopup, setShowPopup] = useState(false)
  const [isPaused, setIsPaused] = useState(false)
  const [popupShownForStep, setPopupShownForStep] = useState<boolean[]>(
    new Array(steps.length).fill(false)
  )

  useEffect(() => {
    if (isPaused || step >= steps.length) return

    const interval = setInterval(() => {
      setFilled((prev) => {
        const next = prev + 5

        if (next >= 50 && !popupShownForStep[step] && !showPopup) {
          setIsPaused(true)
          setShowPopup(true)
          setPopupShownForStep((prev) => {
            const copy = [...prev]
            copy[step] = true
            return copy
          })
          return 50
        }

        if (next >= 100) {
          setIsPaused(true)
          return 100
        }

        return next
      })
    }, 70)

    return () => clearInterval(interval)
  }, [isPaused, step, showPopup, popupShownForStep])

  useEffect(() => {
    if (filled === 100) {
      const timeout = setTimeout(() => {
        setStep((prevStep) => prevStep + 1)
        setFilled(0)
        setIsPaused(false)
      }, 300)
      return () => clearTimeout(timeout)
    }
  }, [filled])

  const handleAnswer = () => {
    setShowPopup(false)
    setIsPaused(false)
  }

  useEffect(() => {
    setFilled(0)
    setIsPaused(false)
  }, [step])

  // 🔁 Перемикання зображень
  const handleNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      handleNext()
    }, 3000)
    return () => clearInterval(interval)
  }, [handleNext])

  const handleClickOnLowerSwitch = (index: number) => {
    setCurrentIndex(index)
  }

  return (
    <div className={styles.plan}>
      <div className={styles.plan__content}>
        <img src={logo} alt="Affemity" className={styles.plan__logoImage} />
        <h1 className={styles.plan__title}>
          We are crafting your <br /> personalized plan
        </h1>
      </div>

      <div className={styles.plan__loader}>
        {steps.map((title, index) => (
          <div key={index} className={styles.plan__loaderContent}>
            <div className={styles.plan__loaderTitle}>
              <p>{title}</p>
              <p className={styles.plan__loaderPercent}>
                {index === step ? filled : index < step ? '100' : '0'}%
              </p>
            </div>
            <div className={styles.plan__progressBar}>
              <div
                className={styles.plan__progressBarFill}
                style={{
                  width: `${index === step ? filled : index < step ? 100 : 0}%`,
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.plan__imageContainer}>
        <img src={images[currentIndex]} alt={`Review ${currentIndex + 1}`} />
        <div className={styles.plan_lowerSwitches}>
          {images.map((_, index) => (
            <div
              key={index}
              className={`${styles.plan__switch} ${
                currentIndex === index ? styles.plan__active : ''
              }`}
              onClick={() => handleClickOnLowerSwitch(index)}
            ></div>
          ))}
        </div>
      </div>

      {showPopup && <Modal question={questions[step]} onAnswer={handleAnswer} />}
    </div>
  )
}

export default PersonalizedPlan
