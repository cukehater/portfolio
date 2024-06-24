import { Empty, Row } from 'antd'

import { connectDB } from '@/utils/db'

import CardContainer from '../../components/shared/CardContainer'
import CommonTitle from '../../components/shared/CommonTitle'
import FormButton from '../../components/shared/FormButton'
import PortfolioCard from '../../components/shared/PortfolioCard'
import { PortfolioItem } from '../../types/portfolio'

export default async function Page() {
  const db = (await connectDB).db('portfolio')
  const data = await db.collection<PortfolioItem>('portfolio').find().toArray()

  return (
    <>
      <CommonTitle title='게시판' />
      <CardContainer hasTitle={false}>
        {data.length > 0 ? (
          <Row gutter={[15, 15]}>
            {data.map(item => (
              <PortfolioCard key={item._id.toString()} item={item} />
            ))}
          </Row>
        ) : (
          <div className='py-20'>
            <Empty description={'데이터가 없습니다'} />
          </div>
        )}
      </CardContainer>

      <FormButton text='글 작성하기' redirectPath='/admin/portfolio/write' />
    </>
  )
}
