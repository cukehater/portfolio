import { Form, Select } from 'antd'

export const selectProtocol = (
  <Form.Item name='protocol' noStyle>
    <Select defaultValue='https://'>
      <Select.Option value='http://'>http://</Select.Option>
      <Select.Option value='https://'>https://</Select.Option>
    </Select>
  </Form.Item>
)

export const selectTopLevel = (
  <Form.Item name='topLevel' noStyle>
    <Select defaultValue='.com'>
      <Select.Option value=''>직접 작성</Select.Option>
      <Select.Option value='.com'>.com</Select.Option>
      <Select.Option value='.kr'>.kr</Select.Option>
      <Select.Option value='.net'>.net</Select.Option>
      <Select.Option value='.org'>.org</Select.Option>
    </Select>
  </Form.Item>
)
