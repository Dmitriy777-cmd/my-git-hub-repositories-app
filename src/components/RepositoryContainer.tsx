import React from 'react'
import RepositoryTable from './RepositoryTable'
import RepositoryDetails from './RepositoryDetails'
import { Repository } from '../types/Repository'
import styles from '../styles/RepositoryContainer.module.scss'

interface RepositoryContainerProps {
  repositories: Repository[]
  page: number
  rowsPerPage: number
  onRowClick: (repo: Repository) => void
  selectedRepo: Repository | null
  onChangePage: (event: unknown, newPage: number) => void
  onChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void
}

const RepositoryContainer: React.FC<RepositoryContainerProps> = ({
  repositories,
  page,
  rowsPerPage,
  onRowClick,
  selectedRepo,
  onChangePage,
  onChangeRowsPerPage,
}) => (
  <>
    <p className={styles.repository__text}>Результаты поиска</p>
    <RepositoryTable
      repositories={repositories}
      page={page}
      rowsPerPage={rowsPerPage}
      handleChangePage={onChangePage}
      handleChangeRowsPerPage={onChangeRowsPerPage}
      handleRowClick={onRowClick}
    />
    <RepositoryDetails repo={selectedRepo} />
  </>
)

export default RepositoryContainer
