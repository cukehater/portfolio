'use client'

import { UploadOutlined } from '@ant-design/icons'
import { Button, Form, Input, Upload, UploadProps, message } from 'antd'
import TextArea from 'antd/es/input/TextArea'
import axios from 'axios'

import { normFile } from '@/utils/normFile'

import CardContainer from '../CardContainer'
import FormButton from '../FormButton'

interface Props {
  initData: any
}

const props: UploadProps = {
  name: 'file',
  action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
  headers: {
    authorization: 'authorization-text'
  },
  onChange(info) {
    if (info.file.status !== 'uploading') {
      // console.log(info.file, info.fileList)
    }
    if (info.file.status === 'done') {
      message.success(`${info.file.name} file uploaded successfully`)
    } else if (info.file.status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  }
}

export default function CompanyForm({ initData }: Props) {
  const handleFinish = async (values: any) => {
    const res = await axios.post('/api/company/update', {
      body: { ...values, _id: initData?._id }
    })

    if (res.status === 200) {
      message.success('변경 사항이 성공적으로 저장되었습니다')
    } else {
      message.error('저장을 실패했습니다. 잠시 후 다시 시도해 주세요')
    }
  }

  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      labelAlign='left'
      initialValues={initData}
      onFinish={handleFinish}
    >
      <CardContainer title='⚙️ 회사 정보 설정'>
        <div className='max-w-[600px]'>
          <Form.Item label='업체명' name='name'>
            <Input placeholder='업체명을 입력해 주세요' allowClear />
          </Form.Item>

          <Form.Item label='대표명' name='president'>
            <Input placeholder='대표명을 입력해 주세요' allowClear />
          </Form.Item>

          <Form.Item label='사업자번호' name='businessNum'>
            <Input
              placeholder='하이픈(-)을 포함하여 입력해 주세요'
              allowClear
            />
          </Form.Item>

          <Form.Item label='전화번호' name='tel'>
            <Input
              placeholder='하이픈(-)을 포함하여 입력해 주세요'
              allowClear
            />
          </Form.Item>

          <Form.Item label='팩스' name='fax'>
            <Input placeholder='팩스 번호를 입력해 주세요' allowClear />
          </Form.Item>

          <Form.Item label='이메일' name='email'>
            <Input placeholder='이메일을 입력해 주세요' allowClear />
          </Form.Item>

          <Form.Item label='사업장 주소' name='address'>
            <TextArea
              rows={4}
              placeholder='사업장 주소를 입력해 주세요'
              allowClear
            />
          </Form.Item>

          <Form.Item
            label='회사소개서'
            valuePropName='fileList'
            name='images'
            getValueFromEvent={normFile}
          >
            <Upload {...props}>
              <Button icon={<UploadOutlined />}>파일 업로드</Button>
            </Upload>
          </Form.Item>
        </div>
      </CardContainer>

      <FormButton text='저장하기' isSubmit />
    </Form>
  )
}
