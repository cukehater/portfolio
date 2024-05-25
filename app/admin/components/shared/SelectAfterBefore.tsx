import { Select } from 'antd'

export const selectBefore = (
  <Select defaultValue='https://'>
    <Select.Option value='http://'>http://</Select.Option>
    <Select.Option value='https://'>https://</Select.Option>
  </Select>
)

export const selectAfter = (
  <Select defaultValue='.com' style={{ width: '100px' }}>
    <Select.Option value=''>직접 작성</Select.Option>
    <Select.Option value='.com'>.com</Select.Option>
    <Select.Option value='.kr'>.kr</Select.Option>
    <Select.Option value='.net'>.net</Select.Option>
    <Select.Option value='.org'>.org</Select.Option>
  </Select>
)
