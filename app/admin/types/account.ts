import { ObjectId } from 'mongodb'

export interface AccountItem {
  _id: ObjectId
  userId: string
  userPassword?: string
}
