import bcrypt from 'bcrypt'
import { ObjectId } from 'mongodb'
import { NextRequest, NextResponse } from 'next/server'

import { connectDB } from '@/utils/db'

export async function POST(req: NextRequest) {
  const { body } = await req.json()

  try {
    const db = (await connectDB).db('portfolio')
    await db.collection('portfolio').updateOne(
      { _id: new ObjectId(body._id) },
      {
        $set: {
          ...body,
          userPassword: await bcrypt.hash(body.userPassword, 10)
        }
      }
    )

    return NextResponse.json({ message: 'Success' }, { status: 200 })
  } catch (error: any) {
    console.error('Error processing request:', error)

    return NextResponse.json(
      { message: 'Fail', error: error.message },
      { status: 500 }
    )
  }
}
