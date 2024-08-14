import React from 'react'
import { Repository } from '../types/Repository'
import styles from '../styles/RepositoryDetail.module.scss'

interface RepositoryDetailsProps {
  repo: Repository | null
}

const RepositoryDetails: React.FC<RepositoryDetailsProps> = ({ repo }) => {
  if (!repo)
    return <div className={styles.repository__detail}>Выберите репозиторий</div>

  return (
    <div>
      <h2>{repo.name}</h2>
      <p>{repo.description}</p>
      <p>
        <strong>Лицензия:</strong> {repo.license?.name || 'Нет лицензии'}
      </p>
    </div>
  )
}

export default RepositoryDetails
