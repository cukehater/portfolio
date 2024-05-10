import { connectDB } from '@/utils/db'

export default async function ListPage() {
  const db = (await connectDB).db('portfolio')
  const result = await db.collection('gallery').find().toArray()

  return (
    <>
      <h1>List Page!</h1>
      {result.map(item => (
        <li key={item._id.toString()}>{item.title}</li>
      ))}
    </>
  )
}
