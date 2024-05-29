'use client'

import { useEffect, useState } from 'react'
import { Row, Typography } from 'antd'
import PortfolioCard from '../../components/shared/PortfolioCard'
import CommonTitle from '../../components/shared/CommonTitle'
import CardContainer from '../../components/shared/CardContainer'
import FormButtons from '../../components/shared/FormButtons'
import { useRouter } from 'next/navigation'

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
  const router = useRouter()
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
      <CommonTitle title='게시판' />
      <CardContainer hasTitle={false}>
        <Row gutter={[15, 15]}>
          {data.map(item => (
            <PortfolioCard key={item._id} item={item} />
          ))}
        </Row>
      </CardContainer>

      <FormButtons
        text='글 작성하기'
        onClick={() => {
          router.push('/admin/portfolio/write')
        }}
      />
    </>
  )
}
