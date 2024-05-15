import { connectDB } from '@/utils/db'
import { NextResponse } from 'next/server'

export async function GET() {
  try {
    const db = (await connectDB).db('portfolio')
    const data = await db.collection('gallery').find().toArray()

    return NextResponse.json({ message: 'Success', data }, { status: 200 })
  } catch (error: any) {
    console.error('Error processing request:', error)
    return NextResponse.json(
      { message: 'Fail', error: error.message },
      { status: 500 }
    )
  }
}
