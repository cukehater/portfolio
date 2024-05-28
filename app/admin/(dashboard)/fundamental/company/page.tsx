'use client'

import CardContainer from '@/app/admin/components/layout/CardContainer'
import FormContainer from '@/app/admin/components/layout/FormContainer'
import CommonTitle from '@/app/admin/components/shared/CommonTitle'
import FormButtons from '@/app/admin/components/shared/FormButtons'
import { normFile } from '@/utils/normFile'
import { UploadOutlined } from '@ant-design/icons'
import { Button, Form, Input, Upload, UploadProps, message } from 'antd'

export default function Page() {
  const props: UploadProps = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
      authorization: 'authorization-text'
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList)
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`)
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
    }
  }

  return (
    <>
      <CommonTitle title='웹사이트 설정' />

      <FormContainer>
        <CardContainer title='⚙️ 회사 정보 설정'>
          <div className='max-w-[600px]'>
            <Form.Item label='업체명'>
              <Input placeholder='업체명을 입력해 주세요' allowClear />
            </Form.Item>

            <Form.Item label='대표명'>
              <Input placeholder='대표명을 입력해 주세요' allowClear />
            </Form.Item>

            <Form.Item label='사업자번호'>
              <Input
                placeholder='하이픈(-)을 포함하여 입력해 주세요'
                allowClear
              />
            </Form.Item>

            <Form.Item label='전화번호'>
              <Input
                placeholder='하이픈(-)을 포함하여 입력해 주세요'
                allowClear
              />
            </Form.Item>

            <Form.Item label='팩스'>
              <Input placeholder='팩스 번호를 입력해 주세요' allowClear />
            </Form.Item>

            <Form.Item label='이메일'>
              <Input placeholder='이메일을 입력해 주세요' allowClear />
            </Form.Item>

            <Form.Item label='사업장 주소'>
              <Input placeholder='사업장 주소를 입력해 주세요' allowClear />
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

        <FormButtons text='저장하기' />
      </FormContainer>
    </>
  )
}
