import AccountForm from '@/app/admin/components/shared/Account/AccountForm'
import CommonTitle from '@/app/admin/components/shared/CommonTitle'

export default function Page() {
  return (
    <>
      <CommonTitle title='관리자 설정' />
      <AccountForm />
    </>
  )
}
