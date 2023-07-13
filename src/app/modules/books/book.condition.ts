import { book_search_condition_keys } from './book.constant'
import { IBookFilter } from './book.interface'

export const filter_book_conditions = (
  filers: IBookFilter
): { [key: string]: Array<Record<string, any>> } | undefined => {
  const { searchTerm, ...filter_keys } = filers

  const conditions = []

  if (searchTerm) {
    conditions.push({
      $or: book_search_condition_keys.map(item => ({
        [item]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    })
  }

  //
  if (Object.keys(filter_keys).length) {
    conditions.push({
      $and: Object.entries(filter_keys).map(([key, value]) => {
        // if (key === 'minPrice') {
        //   return { price: { $gte: value } }
        // } else if (key === 'maxPrice') {
        //   return { price: { $lte: value } }
        // } else {
        //   return { [key]: value }
        // }
        return { [key]: value }
      }),
    })
  }

  return conditions?.length > 0 ? { $and: conditions } : undefined
}
