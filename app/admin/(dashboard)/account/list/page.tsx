import AccountList from '@/app/admin/components/shared/account/AccountList'
import CardContainer from '@/app/admin/components/shared/CardContainer'
import CommonTitle from '@/app/admin/components/shared/CommonTitle'
import { AccountItem } from '@/app/admin/types/account'
import { connectDB } from '@/utils/db'

export default async function Page() {
  const db = (await connectDB).db('portfolio')
  const data = await db.collection<AccountItem>('account').find().toArray()

  return (
    <>
      <CommonTitle title='관리자 설정' />
      <CardContainer
        title='⚙️ 관리자 계정 관리'
        subTitle='관리자 계정은 최대 5개까지 생성 가능합니다. '
      >
        <AccountList data={data} />
      </CardContainer>
    </>
  )
}
