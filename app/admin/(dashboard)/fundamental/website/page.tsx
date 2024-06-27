import CommonTitle from '@/app/admin/components/shared/CommonTitle'
import WebsiteForm from '@/app/admin/components/shared/website/WebsiteForm'
import { connectDB } from '@/utils/db'

export default async function Page() {
  const db = (await connectDB).db('portfolio')
  const initData = await db.collection('website').find().toArray()

  return (
    <>
      <CommonTitle title='웹사이트 설정' />
      <WebsiteForm initData={initData.length > 0 ? initData[0] : {}} />
    </>
  )
}
