'use client'

import { DatePicker, Form, Input, Select, Slider, Upload, message } from 'antd'
import CardContainer from '../shared/CardContainer'
import { selectProtocol, selectTopLevel } from '../shared/SelectAfterBefore'
import { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { PlusOutlined } from '@ant-design/icons'
import { uploadProps } from '@/utils/uploadProps'
import { PortfolioItem } from '../../types/portfolio'
import { useParams, useRouter } from 'next/navigation'
import axios from 'axios'
interface Props {
  initData?: PortfolioItem
  button: React.ReactNode
}

export default function PortfolioForm({ initData, button }: Props) {
  const { slug } = useParams()
  const router = useRouter()
  const [initValues, setInitValues] = useState({})

  const handleFinish = async (values: any) => {
    try {
      const apiUrl = initData
        ? `/api/portfolio/update?_id=${slug}`
        : '/api/portfolio/create'

      const res = await axios.post(apiUrl, {
        body: values
      })
      console.log('res', res)

      if (res.status === 200) {
        message.success(`${initData ? '수정' : '등록'}이 완료되었습니다.`)
        return router.push('/admin/portfolio')
      }
    } catch (error) {
      console.error('Error creating portfolio item:', error)
    }
  }

  useEffect(() => {
    if (!initData) return

    setInitValues(() => ({
      ...initData,
      period: initData.period && [
        dayjs(initData.period[0]),
        dayjs(initData.period[1])
      ]
    }))
  }, [])

  if (initData && Object.keys(initValues).length === 0) return null

  return (
    <Form
      onFinish={handleFinish}
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      labelAlign='left'
      initialValues={initValues}
    >
      <CardContainer title='⚙️ 게시판 글 작성'>
        <div className='max-w-[600px]'>
          <Form.Item
            label='제목'
            name='title'
            // rules={[{ required: true, message: '제목을 입력해 주세요' }]}
          >
            <Input placeholder='제목을 입력해 주세요' allowClear />
          </Form.Item>

          <Form.Item
            label='카테고리'
            name='category'
            // rules={[{ required: true, message: '카테고리를 입력해 주세요' }]}
          >
            <Select placeholder='카테고리를 선택해 주세요'>
              <Select.Option value='web'>WEB</Select.Option>
              <Select.Option value='shop'>SHOP</Select.Option>
              <Select.Option value='toy'>TOY</Select.Option>
              <Select.Option value='etc'>ETC.</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label='작업 기간'
            name='period'
            // rules={[{ required: true, message: '날짜를 입력해 주세요' }]}
          >
            <DatePicker.RangePicker placeholder={['시작일', '종료일']} />
          </Form.Item>

          <Form.Item
            label='기여도'
            name='contribution'
            // rules={[{ required: true, message: '기여도를 입력해 주세요' }]}
          >
            <Slider />
          </Form.Item>

          <Form.Item label='주소' name='domainName'>
            <Input
              addonBefore={selectProtocol}
              addonAfter={selectTopLevel}
              placeholder='도메인을 입력해 주세요'
              allowClear
            />
          </Form.Item>

          <Form.Item label='설명' name='content'>
            <Input.TextArea
              rows={4}
              placeholder='설명을 입력해 주세요'
              allowClear
            />
          </Form.Item>

          <Form.Item
            label='이미지'
            // valuePropName='fileList'
            name='images'
            // getValueFromEvent={normFile}
            // rules={[{ required: true, message: '이미지를 등록해 주세요' }]}
          >
            <Upload listType='picture-card' {...uploadProps}>
              <button style={{ border: 0, background: 'none' }} type='button'>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </button>
            </Upload>
          </Form.Item>
        </div>
      </CardContainer>

      {button}
    </Form>
  )
}
