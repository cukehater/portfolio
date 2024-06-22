import PortfolioForm from '@/app/admin/components/shared/PortfolioForm'
import CommonTitle from '@/app/admin/components/shared/CommonTitle'
import { connectDB } from '@/utils/db'
import { ObjectId } from 'mongodb'
import { PortfolioItem } from '@/app/admin/types/portfolio'
import FormButton from '@/app/admin/components/shared/FormButton'
import { Flex } from 'antd'

interface Props {
  params: {
    slug: string
  }
}

export default async function Page({ params: slug }: Props) {
  const id = slug.slug
  const db = (await connectDB).db('portfolio')
  const initData = await db
    .collection<PortfolioItem>('portfolio')
    .findOne({ _id: new ObjectId(id) })

  if (!initData) return null

  return (
    <>
      <CommonTitle title='게시판' />
      <PortfolioForm
        initData={initData}
        button={
          <Flex gap={10}>
            <FormButton text='글 수정하기' isSubmit />
            <FormButton
              text='글 삭제하기'
              deleteApi='/api/portfolio/delete'
              redirectPath='/admin/portfolio'
            />
          </Flex>
        }
      />
    </>
  )
}
