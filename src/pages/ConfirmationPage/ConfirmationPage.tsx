import './ConfirmationPage.css'
import { Logo } from '../../components/Logo'
import { Form } from '../../components/Form'
import { Privacy } from '../../components/Privacy'

export const ConfirmationPage = () => {
  return (
    <div className="confirmation">
      <Logo />
      <div className="confirmation__content">
        <h2 className="confirmation__content-title title">You’re almost done!</h2>
        <div className="confirmation__content-subtitle">Please enter your email to see results</div>
      </div>
      <Form />
      <Privacy />
    </div>
  )
}
