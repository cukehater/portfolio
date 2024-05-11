import { connectDB } from '@/utils/db'

export async function GET() {
  const db = (await connectDB).db('portfolio')
  const data = await db.collection('gallery').find().toArray()

  return Response.json({ data })
}
