import { NextRequest, NextResponse } from 'next/server'

import { connectDB } from '@/utils/db'

export async function POST(req: NextRequest) {
  try {
    const { body } = await req.json()

    const db = (await connectDB).db('portfolio')
    await db.collection('portfolio').insertOne(body)

    return NextResponse.json({ message: 'Success' }, { status: 200 })
  } catch (error: any) {
    console.error('Error processing request:', error)

    return NextResponse.json(
      { message: 'Fail', error: error.message },
      { status: 500 }
    )
  }
}
