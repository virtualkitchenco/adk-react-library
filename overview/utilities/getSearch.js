import { searchToObject } from './jsonQuery'

export const getSearch = (history) => {
  const {
    location: { search }
  } = history
  const searchParams = searchToObject(search)

  return searchParams
}
