'use client'

import { Form, Input, message } from 'antd'
import axios from 'axios'
import { useRouter } from 'next/navigation'

import { AccountItem } from '@/app/admin/types/account'

import CardContainer from '../CardContainer'
import FormButton from '../FormButton'

interface Props {
  initData?: AccountItem
}

export default function AccountForm({ initData }: Props) {
  const router = useRouter()

  // 계정 생성
  const handleCreate = async (values: AccountItem) => {
    try {
      await axios.post('/api/account/create', {
        body: { userId: values.userId, userPassword: values.userPassword }
      })

      message.success('계정 생성이 완료되었습니다')
      return router.push('/admin/account/list')
    } catch (error: any) {
      if (error.response.data.hasLimit) {
        return message.error('계정은 최대 5개까지 생성 가능합니다')
      }

      if (error.response.data.isDuplicated) {
        return message.error('이미 사용 중인 아이디 입니다')
      }
    }
  }

  // 계정 수정
  const handleUpdate = async (values: AccountItem) => {
    if (!initData) return

    try {
      await axios.post('/api/account/update', {
        body: {
          _id: initData._id,
          userId: values.userId,
          userPassword: values.userPassword
        }
      })

      message.success('수정이 완료되었습니다')
      return router.push('/admin/account/list')
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <Form
      labelCol={{ span: 6 }}
      wrapperCol={{ span: 18 }}
      labelAlign='left'
      onFinish={item => {
        initData ? handleUpdate(item) : handleCreate(item)
      }}
      initialValues={initData}
    >
      <CardContainer
        title={`⚙️ 관리자 계정 ${initData ? '수정 ' : '생성'}`}
        subTitle={initData ? '' : '관리자 계정은 최대 5개까지 생성 가능합니다 '}
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
            <Input
              placeholder='아이디를 입력해 주세요'
              allowClear
              disabled={Boolean(initData)}
            />
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
      <FormButton text={initData ? '수정' : '생성'} isSubmit />
    </Form>
  )
}
