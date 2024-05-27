import { DeleteOutlined, EditOutlined } from '@ant-design/icons'
import { Button, Flex } from 'antd'
import { useParams, useRouter } from 'next/navigation'

interface Props {
  text: string
  deleteApi?: string
}

export default function FormButtons({ text, deleteApi }: Props) {
  const router = useRouter()
  const { slug } = useParams()

  const handleDelete = async () => {
    const result = await fetch(`${deleteApi}?id=${slug}`)

    if (result.ok) {
      window.alert('삭제 성공')
      router.push('/admin/portfolio/')
    }
  }

  return (
    <Flex gap={10} className='mt-8'>
      <Button
        type='primary'
        htmlType='submit'
        className='flex items-center'
        shape='round'
      >
        <EditOutlined />
        {text}
      </Button>
      {deleteApi && (
        <Button
          type='primary'
          htmlType='button'
          className='flex items-center'
          danger
          shape='round'
          onClick={handleDelete}
        >
          <DeleteOutlined />
          삭제하기
        </Button>
      )}
    </Flex>
  )
}
