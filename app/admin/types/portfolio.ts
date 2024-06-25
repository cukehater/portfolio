import { ObjectId } from 'mongodb'

export interface PortfolioItem {
  _id: ObjectId
  title: string
  category: string
  period: string[]
  contribution: number
  imageUrl: string
}
