import { Card } from 'antd'
import TypographyTitle from 'antd/lib/typography/title'
import { PropsWithChildren } from 'react'

export default function CardContainer({
  hasTitle = true,
  title,
  subTitle,
  children
}: PropsWithChildren<{
  hasTitle?: boolean
  title?: string
  subTitle?: string
}>) {
  return (
    <Card
      title={
        hasTitle && (
          <div className='py-4'>
            <TypographyTitle level={4} className='mb-0'>
              {title}
            </TypographyTitle>
            {subTitle && (
              <TypographyTitle
                level={5}
                className='mb-0 mt-2 text-gray-500 font-normal text-sm'
              >
                {subTitle}
              </TypographyTitle>
            )}
          </div>
        )
      }
      className='mt-4 rounded-xl'
    >
      {children}
    </Card>
  )
}
