import { MongoClient } from 'mongodb'

const url: string = String(process.env.NEXT_DB_URL)
const connectDB: Promise<MongoClient> = new MongoClient(url).connect()

export { connectDB }
