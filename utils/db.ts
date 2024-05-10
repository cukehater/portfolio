import { MongoClient } from 'mongodb'

const url: string = String(process.env.DB_URL)
const connectDB: Promise<MongoClient> = new MongoClient(url).connect()

export { connectDB }
