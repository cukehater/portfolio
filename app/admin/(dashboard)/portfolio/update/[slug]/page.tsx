'use client'

import PortfolioForm from '@/app/admin/components/layout/PortfolioForm'
import CommonTitle from '@/app/admin/components/shared/CommonTitle'
import {
  selectAfter,
  selectBefore
} from '@/app/admin/components/shared/SelectAfterBefore'
import { normFile } from '@/utils/normFile'
import { PlusOutlined } from '@ant-design/icons'
import {
  Button,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  Select,
  Slider,
  Upload,
  Typography,
  Card
} from 'antd'
import dayjs from 'dayjs'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'

const { Title } = Typography

interface Props {
  params: {
    slug: string
  }
}

interface GalleryItem {
  _id: string
  title: string
  category: string
  period: string[]
  contribution: number
  brandColor: any
  imageUrl: string
}

export default function Page({ params: slug }: Props) {
  const id = slug.slug
  const router = useRouter()
  const [data, setData] = useState<GalleryItem>()
  console.log('data', data)

  const fetchData = useCallback(async () => {
    const { data } = await fetch(`/api/gallery/read?id=${id}`).then(res =>
      res.json()
    )
    setData(data)
  }, [id])

  const handleFinish = async (values: any) => {
    try {
      const response = await fetch('/api/gallery/create', {
        method: 'POST',
        body: JSON.stringify(values)
      })

      if (response.ok) {
        router.push('/admin/portfolio')
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [fetchData])

  if (!data) return null

  return (
    <>
      <CommonTitle title='게시판' />
      <PortfolioForm onFinish={handleFinish} />
    </>
  )
}
