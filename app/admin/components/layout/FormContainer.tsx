'use client'

import { PropsWithChildren } from 'react'
import { Button, Flex, Form } from 'antd'
import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { useParams, useRouter } from 'next/navigation'

export default function FormContainer({
  onFinish,
  submitBtnText,
  isWrite = false,
  children
}: PropsWithChildren<{
  onFinish?: (values: any) => Promise<void>
  submitBtnText: string
  isWrite?: boolean
}>) {
  const router = useRouter()
  const { slug } = useParams()
  const handleDelete = async () => {
    const result = await fetch(`/api/gallery/delete?id=${slug}`)

    if (result.ok) {
      window.alert('삭제 성공')
      router.push('/admin/portfolio/')
    }
  }

  return (
    <Form
      onFinish={onFinish}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      labelAlign='left'
    >
      {children}
      <Flex gap={10} justify='end' className='mt-8'>
        <Button type='primary' htmlType='submit' className='flex items-center'>
          <EditOutlined />
          {submitBtnText}
        </Button>
        {!isWrite && (
          <Button
            type='primary'
            htmlType='button'
            className='flex items-center'
            danger
            onClick={handleDelete}
          >
            <DeleteOutlined />
            삭제하기
          </Button>
        )}
      </Flex>
    </Form>
  )
}
