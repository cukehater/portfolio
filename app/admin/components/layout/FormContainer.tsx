'use client'

import { PropsWithChildren } from 'react'
import { Button, Form } from 'antd'
import { EditOutlined } from '@ant-design/icons'

export default function FormContainer({
  onFinish,
  submitBtnText,
  children
}: PropsWithChildren<{
  onFinish?: (values: any) => Promise<void>
  submitBtnText: string
}>) {
  return (
    <Form
      onFinish={onFinish}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      labelAlign='left'
    >
      {children}
      <Form.Item className='flex justify-end mt-8'>
        <Button type='primary' htmlType='submit' className='flex items-center'>
          <EditOutlined />
          {submitBtnText}
        </Button>
      </Form.Item>
    </Form>
  )
}
