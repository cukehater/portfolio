import { connectDB } from '@/utils/db'
import { ObjectId } from 'mongodb'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const db = (await connectDB).db('portfolio')
    const dataCopy = { ...data }
    delete dataCopy._id

    await db
      .collection('portfolio')
      .updateOne({ _id: new ObjectId(data._id) }, { $set: dataCopy })

    return NextResponse.json({ message: 'Success', data }, { status: 200 })
  } catch (error: any) {
    console.error('Error processing request:', error)

    return NextResponse.json(
      { message: 'Fail', error: error.message },
      { status: 500 }
    )
  }
}
