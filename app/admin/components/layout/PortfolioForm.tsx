import { PlusOutlined } from '@ant-design/icons'
import {
  ColorPicker,
  DatePicker,
  Form,
  Input,
  Select,
  Slider,
  Upload
} from 'antd'
import CardContainer from '../layout/CardContainer'
import FormContainer from '../layout/FormContainer'
import { selectAfter, selectBefore } from '../shared/SelectAfterBefore'
import { normFile } from '@/utils/normFile'

export default function PortfolioForm({
  onFinish
}: {
  onFinish: (values: any) => Promise<void>
}) {
  return (
    <FormContainer onFinish={onFinish} submitBtnText='등록하기'>
      <CardContainer title='⚙️ 게시판 글 작성'>
        <div className='max-w-[600px]'>
          <Form.Item
            label='제목'
            name='title'
            rules={[{ required: true, message: '제목을 입력해 주세요' }]}
          >
            <Input placeholder='제목을 입력해 주세요' allowClear />
          </Form.Item>

          <Form.Item
            label='카테고리'
            name='category'
            rules={[{ required: true, message: '카테고리를 입력해 주세요' }]}
          >
            <Select placeholder='카테고리를 선택해 주세요'>
              <Select.Option value='web'>WEB</Select.Option>
              <Select.Option value='shop'>SHOP</Select.Option>
              <Select.Option value='toy'>TOY</Select.Option>
              <Select.Option value='etc'>ETC.</Select.Option>
            </Select>
          </Form.Item>

          <Form.Item
            label='작업 기간'
            name='period'
            rules={[{ required: true, message: '날짜를 입력해 주세요' }]}
          >
            <DatePicker.RangePicker placeholder={['시작일', '종료일']} />
          </Form.Item>

          <Form.Item
            label='기여도'
            name='contribution'
            rules={[{ required: true, message: '기여도를 입력해 주세요' }]}
          >
            <Slider />
          </Form.Item>

          <Form.Item
            label='브랜드 컬러'
            name='brandColor'
            rules={[{ required: true, message: '브랜드 컬러를 입력해 주세요' }]}
          >
            <ColorPicker format='hex' showText />
          </Form.Item>

          <Form.Item label='주소' name='link'>
            <Input
              addonBefore={selectBefore}
              addonAfter={selectAfter}
              defaultValue=''
              placeholder='도메인을 입력해 주세요'
              allowClear
            />
          </Form.Item>

          <Form.Item label='설명' name='content'>
            <Input.TextArea
              rows={4}
              placeholder='설명을 입력해 주세요'
              allowClear
            />
          </Form.Item>

          <Form.Item
            label='이미지'
            valuePropName='fileList'
            name='images'
            getValueFromEvent={normFile}
            rules={[{ required: true, message: '이미지를 등록해 주세요' }]}
          >
            <Upload action='/upload.do' listType='picture-card'>
              <button style={{ border: 0, background: 'none' }} type='button'>
                <PlusOutlined />
                <div style={{ marginTop: 8 }}>Upload</div>
              </button>
            </Upload>
          </Form.Item>
        </div>
      </CardContainer>
    </FormContainer>
  )
}
