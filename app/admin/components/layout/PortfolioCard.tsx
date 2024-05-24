'use client'

import { Card, Col, Skeleton } from 'antd'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const { Meta } = Card

interface Props {
  item: {
    _id: string
    title: string
    imageUrl: string
  }
}

export default function PortfolioCard({ item }: Props) {
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false)
    }, 1000)

    return () => {
      clearTimeout(timer)
    }
  }, [])

  return (
    <Col key={item._id} span={4}>
      <Skeleton loading={loading} active>
        <Link
          href={`/admin/portfolio/update/${item._id.toString()}`}
          className='cursor-pointer'
        >
          <Card
            cover={
              <Image
                src={item.imageUrl}
                alt={item.title}
                width={300}
                height={200}
              />
            }
            className='rounded-lg'
          >
            <Meta title={item.title} />
          </Card>
        </Link>
      </Skeleton>
    </Col>
  )
}
