'use client'

import { PropsWithChildren } from 'react'
import { Button, Flex, Form } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { useParams, useRouter } from 'next/navigation'

export default function FormContainer({
  onFinish,
  children
}: PropsWithChildren<{
  onFinish?: (values: any) => Promise<void>
}>) {
  return (
    <Form
      onFinish={onFinish}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      labelAlign='left'
    >
      {children}
    </Form>
  )
}
