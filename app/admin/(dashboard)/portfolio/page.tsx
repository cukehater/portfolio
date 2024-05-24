'use client'

import { useEffect, useState } from 'react'
import { Button, Card, Typography, Flex, Pagination, Row } from 'antd'
import Image from 'next/image'
import { EditOutlined } from '@ant-design/icons'
import Link from 'next/link'
import PortfolioCard from '../../components/layout/PortfolioCard'

const { Title } = Typography

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
      <Title level={2}>게시판</Title>
      <Card>
        <Row gutter={[15, 15]}>
          {data.map(item => (
            <PortfolioCard key={item._id} item={item} />
          ))}
        </Row>

        <Flex justify='end' className='mt-10'>
          <Button type='primary'>
            <Link
              href='/admin/portfolio/write'
              className='flex items-center gap-1'
            >
              <EditOutlined /> 글 작성하기
            </Link>
          </Button>
        </Flex>

        <Flex justify='center' className='mt-10'>
          <Pagination defaultCurrent={1} total={50} />
        </Flex>
      </Card>
    </>
  )
}
