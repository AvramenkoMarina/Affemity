import graphics from '../../assets/graphics.svg'
import styles from './Main.module.scss'
import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { GoalContext } from '../../context/GoalContext'

const Main = () => {
  const navigate = useNavigate()
  const { setGoal } = useContext(GoalContext)

  const handleSelect = (goal: 'goal1' | 'goal2') => {
    setGoal(goal)
    navigate(`/${goal}`)
  }

  return (
    <main className={styles.main}>
      <div className={styles.main__graphicsWrapper}>
        <img src={graphics} alt="graphics" className={styles.main__graphicsImage} />
      </div>

      <div className={styles.main__content}>
        <h1 className={styles.main__contentTitle}>What is your main goal?</h1>

        <div className={styles.main__options}>
          <div onClick={() => handleSelect('goal1')} className={styles.main__option}>
            Build a deep connection
          </div>
          <div onClick={() => handleSelect('goal2')} className={styles.main__option}>
            Create emotional attraction
          </div>
        </div>

        <div className={styles.main__linkWrapper}>
          <a href="#" className={styles.main__link}>
            Other
          </a>
        </div>
      </div>
    </main>
  )
}

export default Main
