import { Model, Types } from 'mongoose'
import { IUser } from '../user/user.interface'

export type ICowCategories = 'Dairy' | 'Beef' | 'DualPurpose'
export type ICowLabel = 'for sale' | 'sold out'

export type IBook = {
  title: string
  author: string
  genre: string
  publication_date: Date
  added_by: Types.ObjectId | IUser
}

export type BookModel = {
  validateBookOwnership(
    book_id: Types.ObjectId,
    owner_id: Types.ObjectId
  ): Promise<Partial<IBook> | null>
  isBookAvailable(id: Types.ObjectId): Promise<Partial<IBook> | null>
} & Model<IBook>

export type IBookFilter = {
  title?: string
  author?: string
  genre?: string
  publication_date?: string
  searchTerm?: string
}
