'use client'

import { PropsWithChildren } from 'react'
import { Form } from 'antd'

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
