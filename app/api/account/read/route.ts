import { connectDB } from '@/utils/db'
import { ObjectId } from 'mongodb'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(req: NextRequest) {
  try {
    const db = (await connectDB).db('portfolio')
    const id = req.nextUrl.searchParams.get('id')

    const data = id
      ? [await db.collection('admin').findOne({ _id: new ObjectId(id) })]
      : await db.collection('admin').find().toArray()

    const dataCopy = data.map(item => ({
      userId: item?.userId,
      _id: item?._id
    }))

    return NextResponse.json(
      {
        message: 'Success',
        data: dataCopy
      },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      {
        message: 'Fail'
      },
      { status: 200 }
    )
  }
}
