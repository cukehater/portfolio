'use client'

import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Button, Popconfirm, message } from 'antd'
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'
import { useState } from 'react'

interface Props {
  text: string
  redirectPath?: string
  deleteApi?: string
  isSubmit?: boolean
}

export default function FormButton({
  text,
  deleteApi,
  redirectPath,
  isSubmit
}: Props) {
  const router = useRouter()
  const { slug } = useParams()

  const handleRouterPush = () => {
    if (!redirectPath) return
    return router.push(redirectPath)
  }

  const handleDelete = async () => {
    if (!redirectPath) return
    const result = await axios.get(`${deleteApi}?id=${slug}`)

    if (result.status === 200) {
      message.success('삭제가 완료되었습니다.')
      return router.push(redirectPath)
    }
  }

  return (
    <div className='mt-8'>
      {deleteApi ? (
        <Popconfirm
          title='정말 삭제하시겠습니까?'
          onConfirm={handleDelete}
          okText='예'
          cancelText='아니오'
        >
          <Button
            type='primary'
            htmlType='button'
            className='flex items-center'
            shape='round'
            danger
          >
            <DeleteOutlined /> {text}
          </Button>
        </Popconfirm>
      ) : (
        <Button
          type='primary'
          htmlType={isSubmit ? 'submit' : 'button'}
          className='flex items-center'
          shape='round'
          onClick={() => {
            if (isSubmit) return
            handleRouterPush()
          }}
        >
          <EditOutlined /> {text}
        </Button>
      )}
    </div>
  )
}
