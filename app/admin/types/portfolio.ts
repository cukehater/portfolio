import { ObjectId } from 'mongodb'

export interface PortfolioItem {
  _id: ObjectId
  title: string
  category: string
  period: string[]
  brandColor: any
  contribution: number
  imageUrl: string
  hex: string
}
