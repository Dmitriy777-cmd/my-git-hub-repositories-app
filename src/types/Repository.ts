export interface Repository {
  id: number // Уникальный идентификатор репозитория
  name: string // Название репозитория
  description: string // Описание репозитория
  language: string // Язык программирования, на котором написан репозиторий
  forks_count: number // Количество форков
  stargazers_count: number // Количество звезд
  updated_at: string // Дата последнего обновления
  license?: {
    // Лицензия, если она есть
    name: string // Название лицензии
  }
}
