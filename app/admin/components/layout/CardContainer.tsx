import { Card, Typography } from 'antd'
import { PropsWithChildren } from 'react'

export default function CardContainer({
  hasTitle = true,
  title,
  children
}: PropsWithChildren<{ hasTitle?: boolean; title?: string }>) {
  return (
    <Card
      title={
        hasTitle && (
          <Typography.Title level={5} className='mb-0'>
            {title}
          </Typography.Title>
        )
      }
      className='mt-4 rounded-xl'
    >
      {children}
    </Card>
  )
}
