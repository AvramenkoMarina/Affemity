import { useCallback, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useDebounceEffect } from './useDebounceEffect'

interface UseFormWorkerProps {
  initialEmail?: string
}

export const useFormWorker = ({ initialEmail = '' }: UseFormWorkerProps) => {
  const [email, setEmail] = useState(initialEmail)
  const [emailError, setEmailError] = useState('')
  const [isTouched, setIsTouched] = useState(false)
  const navigate = useNavigate()

  const validateEmail = useCallback((email: string) => {
    if (!email) {
      return 'Email is required'
    }
    if (!email.includes('@')) {
      return "Email must include '@'"
    }
    return ''
  }, [])

  useDebounceEffect(
    () => {
      if (isTouched) {
        setEmailError(validateEmail(email))
      }
    },
    [email, isTouched],
    500
  )

  const handleEmailChange = useCallback(
    (newEmail: string) => {
      setEmail(newEmail)
      if (!isTouched) setIsTouched(true)
    },
    [isTouched]
  )

  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault()
      const error = validateEmail(email)
      setEmailError(error)

      if (error) return

      navigate('/results')
      setEmail('')
      setIsTouched(false)
    },
    [email, navigate, validateEmail]
  )

  return {
    email,
    emailError,
    handleEmailChange,
    handleSubmit,
  }
}
