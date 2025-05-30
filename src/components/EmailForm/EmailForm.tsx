import { useState, useRef } from 'react'
import debounce from 'lodash.debounce'
import logo from '../../assets/logo.svg'
import privacy from '../../assets/Group.svg'
import styles from './EmailForm.module.scss'

const EmailForm = () => {
	const [email, setEmail] = useState<string>('')
	const [error, setError] = useState<boolean>(false)

	const validateEmail = (value: string) => {
		const trimmed = value.trim()

		if (!trimmed) {
			setError(true)
		} else if (!trimmed.includes('@')) {
			setError(true)
		} else {
			setError(false)
		}
	}

	const debouncedValidate = useRef(
		debounce((value: string) => {
			validateEmail(value)
		}, 500)
	)

	const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
		const value = event.target.value
		setEmail(value)
		debouncedValidate.current(value)
	}

	const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
		event.preventDefault()
		const trimmedEmail = email.trim()

		if (!trimmedEmail || error) {
			alert('Будь ласка, введіть коректний email для отримання результатів.')
			return
		}

		alert(`Дякуємо! Ваш email: ${trimmedEmail} відправлено.`)
		setEmail('')
		setError(false)
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
					className={`${styles.emailForm__input} ${
						error ? styles.emailForm__inputError : ''
					}`}
					value={email}
					onChange={handleEmailChange}
				/>

				<button
					type='submit'
					className={styles.emailForm__button}
					disabled={!email.trim() || error}
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
