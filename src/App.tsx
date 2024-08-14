import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchRepositories } from './features/repositoriesSlice'
import SearchInput from './components/SearchInput'
import LoadingSpinner from './components/LoadingSpinner'
import ErrorMessage from './components/ErrorMessage'
import RepositoryContainer from './components/RepositoryContainer'
import { AppDispatch, RootState } from './store'
import { Repository } from './types/Repository'
import styles from './styles/App.module.scss'

const App: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>()
  const { repositories, loading, error } = useSelector(
    (state: RootState) => state.repositories
  )
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [selectedRepo, setSelectedRepo] = useState<Repository | null>(null)
  const [searchQuery, setSearchQuery] = useState<string>('')

  useEffect(() => {
    if (searchQuery) {
      dispatch(fetchRepositories(searchQuery))
    }
  }, [dispatch, searchQuery])

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  const handleRowClick = (repo: Repository) => {
    setSelectedRepo(repo)
  }

  return (
    <div className={styles.appContainer}>
      <header className={styles.header}>
        <SearchInput onSearch={setSearchQuery} />
      </header>
      <div className={styles.body}>
        {!searchQuery ? (
          <p className={styles.body__text}>Добро пожаловать</p>
        ) : (
          <>
            {loading && <LoadingSpinner />}
            {error && <ErrorMessage message={error} />}
            <RepositoryContainer
              repositories={repositories}
              page={page}
              rowsPerPage={rowsPerPage}
              onRowClick={handleRowClick}
              selectedRepo={selectedRepo}
              onChangePage={handleChangePage}
              onChangeRowsPerPage={handleChangeRowsPerPage}
            />
          </>
        )}
      </div>
      <footer className={styles.footer}></footer>
    </div>
  )
}

export default App
