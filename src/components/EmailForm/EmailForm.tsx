import logo from '../../assets/logo.svg'
import privacy from '../../assets/Group.svg'
import styles from './EmailForm.module.scss'
import { useState } from 'react'

const EmailForm = () => {
	const [email, setEmail] = useState<string>('')

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		setEmail(event.target.value)
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()

		const trimmedEmail = email.trim()

		if (!trimmedEmail) {
			alert('Будь ласка, введіть ваш email для отримання результатів.')
			return
		}
		alert(`Дякуємо! Ваш email: ${trimmedEmail} відправлено.`)

		setEmail('')
	}

	return (
		<div className={styles.emailForm}>
			<img src={logo} alt='Affemity' className={styles.emailForm__logoImage} />
			<h1 className={styles.emailForm__title}>You’re almost done!</h1>
			<p className={styles.emailForm__description}>
				Please enter your email to see results
			</p>
			<form onSubmit={handleSubmit} className={styles.emailForm__form}>
				<input
					type='email'
					placeholder='example@gmail.com'
					className={styles.emailForm__input}
					value={email}
					onChange={handleEmailChange}
					required
				/>
				<button
					type='submit'
					className={styles.emailForm__button}
					disabled={!email.trim()}
				>
					Get results
				</button>
			</form>

			<div className={styles.emailForm__privacyNotice}>
				<img
					src={privacy}
					alt='Privacy'
					className={styles.emailForm__privacyImage}
				/>
				<p className={styles.emailForm__privacyText}>
					We respect your privacy and are committed to protecting your personal
					data. We’ll email you a copy of your results for convenient access.
				</p>
			</div>
		</div>
	)
}

export default EmailForm
