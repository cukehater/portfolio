'use client'

import CardContainer from '@/app/admin/components/shared/CardContainer'
import FormContainer from '@/app/admin/components/shared/FormContainer'
import CommonTitle from '@/app/admin/components/shared/CommonTitle'
import FormButtons from '@/app/admin/components/shared/FormButtons'
import { Input, Form } from 'antd'

export default function Page() {
  return (
    <>
      <CommonTitle title='관리자 설정' />

      <FormContainer>
        <CardContainer title='⚙️ 관리자 계정 생성'>
          <div className='max-w-[600px]'>
            <Form.Item label='아이디' name='userId'>
              <Input placeholder='아이디를 입력해 주세요' allowClear />
            </Form.Item>

            <Form.Item label='비밀번호' name='userPassword'>
              <Input.Password placeholder='비밀번호를 입력해 주세요' />
              <Input.Password
                placeholder='비밀번호를 한번 더 입력해 주세요'
                className='mt-2'
              />
            </Form.Item>
          </div>
        </CardContainer>
        <FormButtons text='생성하기' />
      </FormContainer>
    </>
  )
}
