'use client'

import { Input, Tooltip, Form, Switch, Upload, Flex } from 'antd'
import { InfoCircleOutlined, PlusOutlined } from '@ant-design/icons'
import FormContainer from '../../components/layout/FormContainer'
import CardContainer from '../../components/layout/CardContainer'
import CommonTitle from '../../components/shared/CommonTitle'
import {
  selectAfter,
  selectBefore
} from '../../components/shared/SelectAfterBefore'
import { normFile } from '@/utils/normFile'

export default function FundamentalPage() {
  return (
    <>
      <CommonTitle title='웹사이트 설정' />

      <FormContainer submitBtnText='저장하기'>
        {/* 업체 정보 */}
        <CardContainer title='🛠️ 회사 정보 설정'>
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
          </div>
        </CardContainer>

        {/* 사이트 정보 */}
        <CardContainer title='🛠️ 사이트 정보 설정'>
          <div className='max-w-[600px]'>
            <Form.Item label='웹사이트 명'>
              <Input placeholder='웹사이트 명을 입력해 주세요' allowClear />
            </Form.Item>
            <Form.Item label='도메인'>
              <Input
                addonBefore={selectBefore}
                addonAfter={selectAfter}
                placeholder='도메인을 입력해 주세요'
              />
            </Form.Item>
            <Form.Item label='제목'>
              <Input placeholder='웹사이트의 제목을 입력해 주세요' allowClear />
            </Form.Item>
            <Form.Item label='설명'>
              <Input.TextArea
                placeholder='웹사이트에 대한 설명을 입력해 주세요'
                autoSize
              />
            </Form.Item>
            <Form.Item label='키워드'>
              <Input
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
              name='images'
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

            <Form.Item label='오픈 그래프 설명' name='ogContent'>
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
      </FormContainer>
    </>
  )
}
