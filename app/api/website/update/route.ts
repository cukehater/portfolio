import { ObjectId } from 'mongodb'
import { NextRequest, NextResponse } from 'next/server'

import { connectDB } from '@/utils/db'

export async function POST(req: NextRequest) {
  const { body } = await req.json()
  console.log('body', body)

  try {
    const db = (await connectDB).db('portfolio')
    if (body?._id) {
      // 업데이트
      const { _id, ...data } = body
      await db
        .collection('website')
        .updateOne({ _id: new ObjectId(_id) }, { $set: data })
    } else {
      // 생성
      await db.collection('website').insertOne(body)
    }

    return NextResponse.json(
      { message: 'Success' },
      {
        status: 200
      }
    )
  } catch (error: any) {
    console.error('Error processing request:', error)

    return NextResponse.json(
      { message: 'Fail', error: error.message },
      { status: 500 }
    )
  }
}
