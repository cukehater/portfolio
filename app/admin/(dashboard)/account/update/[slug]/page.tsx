'use client'

import CardContainer from '@/app/admin/components/shared/CardContainer'
import CommonTitle from '@/app/admin/components/shared/CommonTitle'
import FormButton from '@/app/admin/components/shared/FormButton'
import { accountItem } from '@/app/admin/types/admin'
import { Input, Form } from 'antd'
import { useParams } from 'next/navigation'
import { useEffect, useState } from 'react'

export default function Page() {
  const { slug } = useParams()
  const [data, setData] = useState<accountItem>()

  const fetchData = async () => {
    const { data } = await fetch(`/api/admin/read?id=${slug}`).then(res =>
      res.json()
    )
    setData(data[0])
  }

  useEffect(() => {
    fetchData()
  }, [])

  if (!data) return null

  return (
    <>
      <CommonTitle title='관리자 설정' />

      <Form
        labelCol={{ span: 6 }}
        wrapperCol={{ span: 18 }}
        labelAlign='left'
        initialValues={data}
      >
        <CardContainer title='⚙️ 관리자 계정 수정'>
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
              label='현재 비밀번호'
              name='currentPassword'
              rules={[
                {
                  required: true,
                  message: ''
                }
              ]}
            >
              <Input.Password placeholder='현재 비밀번호를 입력해 주세요' />
            </Form.Item>

            <Form.Item
              label='새 비밀번호'
              name='userPassword'
              rules={[
                {
                  required: true,
                  message: ''
                }
              ]}
            >
              <Input.Password placeholder='새 비밀번호를 입력해 주세요' />
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
        <FormButton text='수정하기' />
      </Form>
    </>
  )
}
