'use client'

import { InfoCircleOutlined, PlusOutlined } from '@ant-design/icons'
import { Form, Input, Select, Switch, Tooltip, Upload, message } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import axios from 'axios'

import { normFile } from '@/utils/normFile'

import CardContainer from '../CardContainer'
import FormButton from '../FormButton'

interface Props {
  initData: any
}

export default function WebsiteForm({ initData }: Props) {
  const handleFinish = async (values: any) => {
    const res = await axios.post('/api/website/update', {
      body: { ...values, _id: initData?._id }
    })

    if (res.status === 200) {
      message.success('변경 사항이 성공적으로 저장되었습니다')
    } else {
      message.error('저장을 실패했습니다')
    }
  }

  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      labelAlign='left'
      onFinish={handleFinish}
      initialValues={initData}
    >
      <CardContainer title='⚙️ 사이트 정보 설정'>
        <div className='max-w-[600px]'>
          <Form.Item label='웹사이트 명' name='name'>
            <Input placeholder='웹사이트 명을 입력해 주세요' allowClear />
          </Form.Item>
          <Form.Item label='도메인' name='domain'>
            <Input
              addonBefore={
                <Form.Item name='protocol' noStyle>
                  <Select defaultValue={'https://'}>
                    <Select.Option value='http://'>http://</Select.Option>
                    <Select.Option value='https://'>https://</Select.Option>
                  </Select>
                </Form.Item>
              }
              placeholder='도메인을 입력해 주세요'
            />
          </Form.Item>
          <Form.Item label='제목' name='title'>
            <Input placeholder='웹사이트의 제목을 입력해 주세요' allowClear />
          </Form.Item>
          <Form.Item label='설명' name='description'>
            <Input.TextArea
              placeholder='웹사이트에 대한 설명을 입력해 주세요'
              autoSize
            />
          </Form.Item>
          <Form.Item label='키워드' name='keyword'>
            <TextArea
              rows={4}
              placeholder='웹사이트와 관련된 키워드를 입력해 주세요'
              allowClear
            />
          </Form.Item>
          <Form.Item
            label={
              <>
                <Tooltip
                  title='오픈 그래프(Open Graph)는 카카오톡, 인스타그램 등 SNS 공유 시 노출되는 정보입니다'
                  className='mr-1'
                >
                  <InfoCircleOutlined style={{ color: 'rgba(0,0,0,.45)' }} />
                </Tooltip>
                오픈 그래프 이미지
              </>
            }
            valuePropName='fileList'
            name='ogImage'
            getValueFromEvent={normFile}
          >
            <Upload action='/upload.do' listType='picture-card'>
              <button style={{ border: 0, background: 'none' }} type='button'>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </button>
            </Upload>
          </Form.Item>

          <Form.Item label='오픈 그래프 제목' name='ogTitle'>
            <Input placeholder='웹사이트의 제목을 입력해 주세요' allowClear />
          </Form.Item>

          <Form.Item label='오픈 그래프 설명' name='ogDescription'>
            <Input.TextArea
              placeholder='웹사이트에 대한 설명을 입력해 주세요'
              autoSize
            />
          </Form.Item>

          <Form.Item label='검색 태그' name='searchTag'>
            <Input
              placeholder='meta 태그의 content 내용을 입력해 주세요'
              allowClear
            />
          </Form.Item>

          <Form.Item label='검색 봇 수집 여부' name='searchBot'>
            <Switch />
          </Form.Item>
        </div>
      </CardContainer>

      <FormButton text='저장' isSubmit />
    </Form>
  )
}
