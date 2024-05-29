'use client'

import CommonTitle from '@/app/admin/components/shared/CommonTitle'
import FormButtons from '@/app/admin/components/shared/FormButtons'
import PortfolioForm from '@/app/admin/components/shared/PortfolioForm'
import { useRouter } from 'next/navigation'

export default function FormDisabledDemo() {
  const router = useRouter()
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

  return (
    <>
      <CommonTitle title='게시판' />
      <PortfolioForm
        onFinish={handleFinish}
        buttons={<FormButtons text='글 작성하기' />}
      />
    </>
  )
}
