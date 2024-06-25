'use client'

import { Button, Flex, Table, TableProps, message } from 'antd'
import axios from 'axios'
import Link from 'next/link'

import { AccountItem } from '@/app/admin/types/account'

import ConfirmModal from '../ConfirmModal'

interface Props {
  data: AccountItem[]
}

const columns: TableProps<AccountItem>['columns'] = [
  {
    title: '아이디',
    dataIndex: 'userId',
    key: 'userId',
    align: 'center'
  },
  {
    title: '수정 / 삭제',
    key: 'action',
    width: 300,
    align: 'center',
    render: item => (
      <Flex gap='small' justify='center'>
        <Link href={`/admin/account/edit/${item._id}`}>
          <Button>수정</Button>
        </Link>
        <ConfirmModal
          title='해당 계정을 삭제하시겠습니까?'
          description=''
          okText='네'
          cancelText='아니오'
          onConfirm={() => handleDelete(item)}
        />
      </Flex>
    )
  }
]

const handleDelete = async (item: AccountItem) => {
  const response = await axios.get(`/api/account/delete?id=${item._id}`)
  if (response.status === 200) {
    message.success('계정 삭제가 완료되었습니다')
  }
}

export default function AccountList({ data }: Props) {
  return <Table columns={columns} dataSource={data} pagination={false} />
}
