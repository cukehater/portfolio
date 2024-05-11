'use client'

import { useEffect, useState } from 'react'
import { Button, Card, Col, Flex, Pagination, Row, Skeleton } from 'antd'
import { v4 as uuid } from 'uuid'
import Image from 'next/image'
import { EditOutlined } from '@ant-design/icons'

const { Meta } = Card

interface GalleryItem {
  _id: string
  title: string
  category: string
  imageUrl: string
  startDate: string
  endDate: string
}

export default function Page() {
  const [data, setData] = useState<GalleryItem[] | null>(null)
  const [loading, setLoading] = useState<boolean>(false)

  const fetchData = async () => {
    try {
      const { data } = await fetch('/api/gallery/read').then(res => res.json())
      setData(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!data) return null

  return (
    <>
      <Row gutter={[20, 20]}>
        {data.map(item => (
          <Col key={uuid()} span={6}>
            <Skeleton loading={loading} active>
              <Card cover={<Image src={item.imageUrl} alt={item.title} width={300} height={200} />}>
                <Meta title={item.title} />
              </Card>
            </Skeleton>
          </Col>
        ))}
      </Row>

      <Flex justify='end' className='mt-10'>
        <Button type='primary'>
          <EditOutlined />글 작성하기
        </Button>
      </Flex>

      <Flex justify='center' className='mt-10'>
        <Pagination defaultCurrent={1} total={50} />
      </Flex>
    </>
  )
}
