'use client'

import PortfolioForm from '@/app/admin/components/shared/PortfolioForm'
import CommonTitle from '@/app/admin/components/shared/CommonTitle'
import { useRouter } from 'next/navigation'
import { useCallback, useEffect, useState } from 'react'
import FormButtons from '@/app/admin/components/shared/FormButtons'

interface Props {
  params: {
    slug: string
  }
}

export default function Page({ params: slug }: Props) {
  const id = slug.slug
  const router = useRouter()
  const [data, setData] = useState<PortfolioItem>()

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
      <PortfolioForm
        onFinish={handleFinish}
        data={data}
        buttons={
          <FormButtons text='글 수정하기' deleteApi='/api/gallery/delete/' />
        }
      />
    </>
  )
}
