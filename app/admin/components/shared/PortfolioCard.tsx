import { Card, Col, Skeleton } from 'antd'
import CardMeta from 'antd/lib/card/Meta'
import Image from 'next/image'
import Link from 'next/link'

import { PortfolioItem } from '../../types/portfolio'

interface Props {
  item: PortfolioItem
}

export default function PortfolioCard({ item }: Props) {
  return (
    <Col key={item._id.toString()} span={4}>
      <Skeleton
        // loading={loading}
        loading={false}
        active
      >
        <Link href={`/admin/portfolio/edit/${item._id.toString()}`}>
          <Card
            hoverable
            cover={
              item.imageUrl && (
                <Image
                  src={item.imageUrl}
                  alt={item.title}
                  width={300}
                  height={200}
                />
              )
            }
            className='rounded-lg'
            bodyStyle={{ padding: '16px' }}
          >
            <CardMeta title={item.title} />
          </Card>
        </Link>
      </Skeleton>
    </Col>
  )
}
