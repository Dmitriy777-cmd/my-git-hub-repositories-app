import React from 'react'
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TablePagination,
} from '@mui/material'
import { Repository } from '../types/Repository'
import styles from '../styles/RepositoryTable.module.scss'

interface RepositoryTableProps {
  repositories: Repository[]
  page: number
  rowsPerPage: number
  handleChangePage: (event: unknown, newPage: number) => void
  handleChangeRowsPerPage: (event: React.ChangeEvent<HTMLInputElement>) => void
  handleRowClick: (repo: Repository) => void
}

const RepositoryTable: React.FC<RepositoryTableProps> = ({
  repositories,
  page,
  rowsPerPage,
  handleChangePage,
  handleChangeRowsPerPage,
  handleRowClick,
}) => {
  return (
    <TableContainer className={styles.tableContainer}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell className={styles.tableCell}>Название</TableCell>
            <TableCell className={styles.tableCell}>Язык</TableCell>
            <TableCell className={styles.tableCell}>Число форков</TableCell>
            <TableCell className={styles.tableCell}>Число звёзд</TableCell>
            <TableCell className={styles.tableCell}>Дата обновления</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {repositories
            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            .map((repo) => (
              <TableRow
                key={repo.id}
                className={styles.tableRow}
                onClick={() => handleRowClick(repo)}
              >
                <TableCell className={styles.tableCell}>{repo.name}</TableCell>
                <TableCell className={styles.tableCell}>
                  {repo.language}
                </TableCell>
                <TableCell className={styles.tableCell}>
                  {repo.forks_count}
                </TableCell>
                <TableCell className={styles.tableCell}>
                  {repo.stargazers_count}
                </TableCell>
                <TableCell className={styles.tableCell}>
                  {new Date(repo.updated_at).toLocaleDateString()}
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>
      <TablePagination
        rowsPerPageOptions={[5, 10, 25]}
        component="div"
        count={repositories.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </TableContainer>
  )
}

export default RepositoryTable
