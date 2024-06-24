'use client'

import { Form, Input, message } from 'antd'
import axios from 'axios'
import { useRouter } from 'next/navigation'

import CardContainer from '../CardContainer'
import FormButton from '../FormButton'

export default function CreateForm() {
  const router = useRouter()

  const handleFinish = async (values: any) => {
    try {
      await axios.post('/api/account/create', {
        body: { userId: values.userId, userPassword: values.userPassword }
      })

      message.success('계정 생성이 완료되었습니다.')
      return router.push('/admin/account/list')
    } catch (error: any) {
      if (error.response.data.hasLimit) {
        return message.error('계정은 최대 5개까지 생성 가능합니다')
      }

      if (error.response.data.isDuplicated) {
        return message.error('이미 사용 중인 아이디 입니다.')
      }
    }
  }

  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      labelAlign='left'
      onFinish={handleFinish}
    >
      <CardContainer
        title='⚙️ 관리자 계정 생성'
        subTitle='관리자 계정은 최대 5개까지 생성 가능합니다. '
      >
        <div className='max-w-[600px]'>
          <Form.Item
            label='아이디'
            name='userId'
            rules={[
              {
                required: true,
                message: '아이디를 입력해 주세요'
              }
            ]}
          >
            <Input placeholder='아이디를 입력해 주세요' allowClear />
          </Form.Item>

          <Form.Item
            label='비밀번호'
            name='userPassword'
            rules={[
              {
                required: true,
                message: ''
              }
            ]}
          >
            <Input.Password placeholder='비밀번호를 입력해 주세요' />
          </Form.Item>

          <Form.Item
            label='비밀번호 확인'
            name='confirmPassword'
            dependencies={['password']}
            rules={[
              {
                required: true,
                message: ''
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('userPassword') === value) {
                    return Promise.resolve()
                  }
                  return Promise.reject(
                    new Error('비밀번호가 일치하지 않습니다')
                  )
                }
              })
            ]}
          >
            <Input.Password placeholder='비밀번호를 입력해 주세요' />
          </Form.Item>
        </div>
      </CardContainer>
      <FormButton text='생성하기' isSubmit />
    </Form>
  )
}
