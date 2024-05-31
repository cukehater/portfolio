import { connectDB } from '@/utils/db'
import { ObjectId } from 'mongodb'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const id = req.nextUrl.searchParams.get('id')

    const db = (await connectDB).db('portfolio')
    const data = id
      ? await db.collection('portfolio').findOne({ _id: new ObjectId(id) })
      : await db.collection('portfolio').find().toArray()

    return NextResponse.json({ message: 'Success', data }, { status: 200 })
  } catch (error: any) {
    console.error('Error processing request:', error)
    return NextResponse.json(
      { message: 'Fail', error: error.message },
      { status: 500 }
    )
  }
}
