'use client'

import CommonTitle from '@/app/admin/components/shared/CommonTitle'
import FormButtons from '@/app/admin/components/shared/FormButtons'
import PortfolioForm from '@/app/admin/components/shared/PortfolioForm'
import { rgbaToHex } from '@/app/utils/rgbToHex'
import { useRouter } from 'next/navigation'

export default function FormDisabledDemo() {
  const router = useRouter()
  const handleFinish = async (values: any) => {
    try {
      const response = await fetch('/api/portfolio/create', {
        method: 'POST',
        body: JSON.stringify({
          ...values,
          brandColor:
            typeof values.brandColor === 'string'
              ? values.brandColor
              : rgbaToHex(
                  values.brandColor.metaColor.r,
                  values.brandColor.metaColor.g,
                  values.brandColor.metaColor.b,
                  values.brandColor.metaColor.a
                )
        })
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
