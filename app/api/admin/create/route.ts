import { connectDB } from '@/utils/db'
import { NextRequest, NextResponse } from 'next/server'
import bcrypt from 'bcrypt'

export async function POST(req: NextRequest) {
  try {
    const body = await req.json()
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
    if (await db.collection('admin').findOne({ userId: body.userId })) {
      return NextResponse.json(
        { message: 'Fail', isDuplicated: true },
        { status: 200 }
      )
    }

    const data = {
      ...body,
      userPassword: await bcrypt.hash(body.userPassword, 10)
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
