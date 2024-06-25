import { ObjectId } from 'mongodb'

import AccountForm from '@/app/admin/components/shared/Account/AccountForm'
import CommonTitle from '@/app/admin/components/shared/CommonTitle'
import { connectDB } from '@/utils/db'

interface Props {
  params: { slug: string }
}

export default async function Page({ params: { slug } }: Props) {
  const db = (await connectDB).db('portfolio')
  const initData = await db
    .collection('account')
    .findOne({ _id: new ObjectId(slug) })
    .then(res => {
      if (res) {
        return { _id: res?._id, userId: res?.userId }
      }
      return null
    })

  if (!initData) return null

  return (
    <>
      <CommonTitle title='관리자 설정' />
      <AccountForm initData={initData} />
    </>
  )
}
