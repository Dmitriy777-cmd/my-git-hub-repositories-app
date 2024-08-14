import React from 'react'

interface ErrorMessageProps {
  message: string
}

const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => (
  <p>Ошибка: {message}</p>
)

export default ErrorMessage
