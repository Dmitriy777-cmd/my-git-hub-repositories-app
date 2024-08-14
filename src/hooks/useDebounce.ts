import { useEffect, useState } from 'react'

/**
 * Кастомный хук для реализации дебаунса.
 * @param value - Значение, которое нужно дебаунсить.
 * @param delay - Задержка в миллисекундах.
 * @returns Дебаунсенное значение.
 */
const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value)

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value)
    }, delay)

    return () => {
      clearTimeout(handler)
    }
  }, [value, delay])

  return debouncedValue
}

export default useDebounce
