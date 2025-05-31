import styles from './Modal.module.scss'

type ModalProps = {
  question: string
  onAnswer: () => void
}

const Modal = ({ question, onAnswer }: ModalProps) => {
  return (
    <div className={styles.modal}>
      <div className={styles.modal__wrapper}>
        <div className={styles.modal__content}>
          <div className={styles.modal__header}>
            <p className={styles.modal__paragraph}>To move forward, specify</p>
            <h2 className={styles.modal__title}>{question}</h2>
          </div>
          <div className={styles.modal__options}>
            <div className={styles.modal__option} onClick={onAnswer}>
              Yes
            </div>
            <div className={styles.modal__option} onClick={onAnswer}>
              No
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Modal
