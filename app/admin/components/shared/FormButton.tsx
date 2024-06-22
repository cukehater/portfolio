'use client'

import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Button, message } from 'antd'
import axios from 'axios'
import { useParams, useRouter } from 'next/navigation'

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

  const handleDelete = async () => {
    if (!redirectPath) return
    const result = await axios.get(`${deleteApi}?id=${slug}`)

    if (result.status === 200) {
      message.success('삭제가 완료되었습니다.')
      return router.push(redirectPath)
    }
  }

  const handleClick = () => {
    if (!redirectPath) return
    return router.push(redirectPath)
  }

  return (
    <div className='mt-8'>
      <Button
        type='primary'
        htmlType={isSubmit ? 'submit' : 'button'}
        className='flex items-center'
        shape='round'
        danger={Boolean(deleteApi)}
        onClick={() => {
          if (isSubmit) return
          deleteApi ? handleDelete() : handleClick()
        }}
      >
        {deleteApi ? <DeleteOutlined /> : <EditOutlined />} {text}
      </Button>
    </div>
  )
}
