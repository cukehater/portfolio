'use client'

import type { FormProps } from 'antd'
import { Button, Checkbox, Form, Input } from 'antd'
import Logo from '@/public/vercel.svg'
import Image from 'next/image'

type FieldType = {
  username?: string
  password?: string
  remember?: string
}

const onFinish: FormProps<FieldType>['onFinish'] = values => {
  console.log('Success:', values)
}

const onFinishFailed: FormProps<FieldType>['onFinishFailed'] = errorInfo => {
  console.log('Failed:', errorInfo)
}

export default function page() {
  return (
    <section className='min-h-screen flex items-center justify-center'>
      <article className='w-[500px] bg-white rounded-2xl shadow-xl p-12'>
        <figure className='flex justify-center mb-8'>
          <Image src={Logo} alt='Vercel' width={150} />
        </figure>
        <Form
          name='basic'
          labelCol={{ span: 8 }}
          wrapperCol={{ span: 16 }}
          initialValues={{ remember: false }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete='off'
        >
          <Form.Item<FieldType>
            label='Username'
            name='username'
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label='Password'
            name='password'
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType> name='remember' valuePropName='checked' wrapperCol={{ offset: 8, span: 16 }}>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }} style={{ marginBottom: 0 }}>
            <Button type='primary' htmlType='submit'>
              로그인
            </Button>
          </Form.Item>
        </Form>
      </article>
    </section>
  )
}
