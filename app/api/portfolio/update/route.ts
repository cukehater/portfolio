import { ObjectId } from 'mongodb'
import { NextRequest, NextResponse } from 'next/server'

import { connectDB } from '@/utils/db'

export async function POST(req: NextRequest) {
  try {
    const _id = req.nextUrl.searchParams.get('_id')

    if (!_id) {
      return NextResponse.json(
        { message: 'Fail', error: '_id 파라미터를 찾을 수 없습니다' },
        { status: 400 }
      )
    }

    const { body: data } = await req.json()
    const db = (await connectDB).db('portfolio')
    await db
      .collection('portfolio')
      .updateOne({ _id: new ObjectId(_id) }, { $set: data })

    return NextResponse.json({ message: 'Success' }, { status: 200 })
  } catch (error: any) {
    console.error('Error processing request:', error)

    return NextResponse.json(
      { message: 'Fail', error: error.message },
      { status: 500 }
    )
  }
}
