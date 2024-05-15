'use client'

import { PlusOutlined } from '@ant-design/icons'
import {
  Button,
  ColorPicker,
  DatePicker,
  Form,
  Input,
  Select,
  Slider,
  Upload,
  Typography,
  Card
} from 'antd'
import { useRouter } from 'next/navigation'

const { RangePicker } = DatePicker
const { TextArea } = Input
const { Title } = Typography
const { Option } = Select

export default function FormDisabledDemo() {
  const router = useRouter()
  const handleFinish = async (values: any) => {
    try {
      const response = await fetch('/api/gallery/create', {
        method: 'POST',
        body: JSON.stringify(values)
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
      <Title level={2}>포트폴리오</Title>

      {/* 업체 정보 */}
      <Card
        title={
          <Title level={5} className='mb-0'>
            ⚙️ 포트폴리오 게시글 작성
          </Title>
        }
        className='mt-4 rounded-xl'
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 18 }}
          className='max-w-[600px]'
          onFinish={handleFinish}
        >
          <Form.Item
            label='제목'
            name='title'
            rules={[{ required: true, message: '제목을 입력해 주세요.' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            label='카테고리'
            name='category'
            rules={[{ required: true, message: '카테고리를 입력해 주세요.' }]}
          >
            <Select>
              <Select.Option value='web'>WEB</Select.Option>
              <Select.Option value='shop'>SHOP</Select.Option>
              <Select.Option value='toy'>TOY</Select.Option>
              <Select.Option value='etc'>ETC.</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label='작업 기간'
            name='period'
            rules={[{ required: true, message: '날짜를 입력해 주세요.' }]}
          >
            <RangePicker placeholder={['시작일', '종료일']} />
          </Form.Item>

          <Form.Item
            label='기여도'
            name='contribution'
            rules={[{ required: true, message: '기여도를 입력해 주세요.' }]}
          >
            <Slider />
          </Form.Item>

          <Form.Item
            label='브랜드 컬러'
            name='brandColor'
            rules={[{ required: true, message: '브랜드컬러를 입력해 주세요.' }]}
          >
            <ColorPicker />
          </Form.Item>

          <Form.Item label='주소' name='link'>
            <Input
              addonBefore={selectBefore}
              addonAfter={selectAfter}
              defaultValue=''
              placeholder='도메인을 입력해 주세요'
            />
          </Form.Item>

          <Form.Item label='설명' name='content'>
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            label='이미지'
            valuePropName='fileList'
            name='images'
            getValueFromEvent={normFile}
            rules={[{ required: true, message: '이미지를 등록해 주세요.' }]}
          >
            <Upload action='/upload.do' listType='picture-card'>
              <button style={{ border: 0, background: 'none' }} type='button'>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </button>
            </Upload>
          </Form.Item>

          <Form.Item className='flex justify-end'>
            <Button type='primary' htmlType='submit'>
              등록하기
            </Button>
          </Form.Item>
        </Form>
      </Card>
    </>
  )
}

const selectBefore = (
  <Select defaultValue='https://'>
    <Option value='http://'>http://</Option>
    <Option value='https://'>https://</Option>
  </Select>
)

const selectAfter = (
  <Select defaultValue='.com' style={{ width: '100px' }}>
    <Option value=''>직접 작성</Option>
    <Option value='.com'>.com</Option>
    <Option value='.kr'>.kr</Option>
    <Option value='.net'>.net</Option>
    <Option value='.org'>.org</Option>
  </Select>
)

const normFile = (e: any) => {
  if (Array.isArray(e)) {
    return e
  }
  return e?.fileList
}
