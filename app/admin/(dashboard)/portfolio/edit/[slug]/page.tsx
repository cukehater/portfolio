import { Flex } from 'antd'
import { ObjectId } from 'mongodb'

import CommonTitle from '@/app/admin/components/shared/CommonTitle'
import FormButton from '@/app/admin/components/shared/FormButton'
import PortfolioForm from '@/app/admin/components/shared/portfolio/PortfolioForm'
import { PortfolioItem } from '@/app/admin/types/portfolio'
import { connectDB } from '@/utils/db'

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
            <FormButton text='수정' isSubmit />
            <FormButton
              text='삭제'
              deleteApi='/api/portfolio/delete'
              redirectPath='/admin/portfolio'
            />
          </Flex>
        }
      />
    </>
  )
}
