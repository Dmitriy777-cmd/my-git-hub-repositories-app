import React, { useState } from 'react'
import styles from '../styles/SearchInput.module.scss'

interface SearchInputProps {
  onSearch: (query: string) => void
}

const SearchInput: React.FC<SearchInputProps> = ({ onSearch }) => {
  const [inputValue, setInputValue] = useState<string>('')

  const handleSubmit = () => {
    onSearch(inputValue)
  }

  return (
    <div className={styles.container}>
      <input
        className={styles.input__search}
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        placeholder="Введите поисковый запрос"
      />
      <button onClick={handleSubmit} className={styles.search__button}>
        искать
      </button>
    </div>
  )
}
export default SearchInput
