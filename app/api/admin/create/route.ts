import { connectDB } from '@/utils/db'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const data = await req.json()
    const db = (await connectDB).db('portfolio')
    const count = await db.collection('admin').count()

    // 계정이 5개 이상일 때
    if (count >= 5) {
      return NextResponse.json(
        { message: 'Fail', hasLimit: true },
        { status: 200 }
      )
    }

    // 아이디가 중복될 때
    if (await db.collection('admin').findOne({ userId: data.userId })) {
      return NextResponse.json(
        { message: 'Fail', isDuplicated: true },
        { status: 200 }
      )
    }

    await db.collection('admin').insertOne(data)
    return NextResponse.json({ message: 'Success', data }, { status: 200 })
  } catch (error: any) {
    return NextResponse.json(
      { message: 'Fail', error: error.message },
      { status: 500 }
    )
  }
}
