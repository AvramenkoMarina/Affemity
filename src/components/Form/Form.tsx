import './Form.css'
import classNames from 'classnames'
import { MainButton } from '../MainButton'
import { useFormWorker } from '../../hooks/useFormWorker'

export const Form = () => {
  const { email, emailError, handleEmailChange, handleSubmit } = useFormWorker({})

  return (
    <form className="confirmation-form" onSubmit={(event) => handleSubmit(event)}>
      <div className="form__input">
        <input
          type="text"
          value={email}
          onChange={(event) => handleEmailChange(event.target.value)}
          className={classNames('form__input-field', {
            'form__input-field--has-error': emailError,
          })}
          placeholder="example@gmail.com"
        />
        {emailError && <span className="form__input-error">{emailError}</span>}
      </div>

      <MainButton type="submit">Get results</MainButton>
    </form>
  )
}
