'use client'

import { useState } from 'react'
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

const { RangePicker } = DatePicker
const { TextArea } = Input
const { Title } = Typography
const { Option } = Select

export default function FormDisabledDemo() {
  return (
    <>
      <Title level={2}>포트폴리오</Title>

      {/* 업체 정보 */}
      <Card
        title={
          <Title level={5} className='mb-0'>
            ⚙️ 포트폴리오 작성하기
          </Title>
        }
        className='mt-4 rounded-xl'
      >
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 18 }}
          className='max-w-[600px]'
        >
          <Form.Item label='제목'>
            <Input />
          </Form.Item>

          <Form.Item label='카테고리'>
            <Select>
              <Select.Option value='web'>WEB</Select.Option>
              <Select.Option value='shop'>SHOP</Select.Option>
              <Select.Option value='toy'>TOY</Select.Option>
              <Select.Option value='etc'>ETC.</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item label='날짜'>
            <RangePicker placeholder={['시작일', '종료일']} />
          </Form.Item>

          <Form.Item label='기여도'>
            <Slider />
          </Form.Item>

          <Form.Item label='브랜드 컬러'>
            <ColorPicker />
          </Form.Item>

          <Form.Item label='주소'>
            <Input
              addonBefore={selectBefore}
              addonAfter={selectAfter}
              defaultValue=''
              placeholder='도메인을 입력해 주세요'
            />
          </Form.Item>

          <Form.Item label='설명'>
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item
            label='이미지'
            valuePropName='fileList'
            getValueFromEvent={normFile}
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
  <Select defaultValue='http://'>
    <Option value='http://'>http://</Option>
    <Option value='https://'>https://</Option>
  </Select>
)

const selectAfter = (
  <Select defaultValue='.com'>
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
