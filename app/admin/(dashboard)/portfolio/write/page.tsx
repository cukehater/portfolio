import CommonTitle from '@/app/admin/components/shared/CommonTitle'
import FormButton from '@/app/admin/components/shared/FormButton'
import PortfolioForm from '@/app/admin/components/shared/portfolio/PortfolioForm'

export default function Page() {
  return (
    <>
      <CommonTitle title='게시판' />
      <PortfolioForm button={<FormButton text='등록 하기' isSubmit />} />
    </>
  )
}
