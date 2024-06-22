import { connectDB } from '@/utils/db'
import { NextRequest, NextResponse } from 'next/server'

export async function POST(req: NextRequest) {
  try {
    const { body: data } = await req.json()
    console.log('data', data)
    const db = (await connectDB).db('portfolio')
    await db.collection('portfolio').insertOne(data)

    return NextResponse.json({ message: 'Success', data }, { status: 200 })
  } catch (error: any) {
    console.error('Error processing request:', error)

    return NextResponse.json(
      { message: 'Fail', error: error.message },
      { status: 500 }
    )
  }
}
