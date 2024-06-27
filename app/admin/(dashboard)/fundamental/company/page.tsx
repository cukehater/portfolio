import CommonTitle from '@/app/admin/components/shared/CommonTitle'
import CompanyForm from '@/app/admin/components/shared/company/CompanyForm'
import { connectDB } from '@/utils/db'

export default async function Page() {
  const db = (await connectDB).db('portfolio')
  const initData = await db.collection('company').find().toArray()

  return (
    <>
      <CommonTitle title='웹사이트 설정' />
      <CompanyForm initData={initData.length > 0 ? initData[0] : {}} />
    </>
  )
}
