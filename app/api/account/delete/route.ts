import { ObjectId } from 'mongodb'
import { NextRequest, NextResponse } from 'next/server'

import { connectDB } from '@/utils/db'

export async function GET(req: NextRequest) {
  const id = req.nextUrl.searchParams.get('id')
  if (!id) return

  const db = (await connectDB).db('portfolio')
  await db.collection('account').deleteOne({ _id: new ObjectId(id) })

  return NextResponse.json({ message: 'Success' }, { status: 200 })
}
