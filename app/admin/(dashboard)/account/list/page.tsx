'use client'

import CardContainer from '@/app/admin/components/shared/CardContainer'
import CommonTitle from '@/app/admin/components/shared/CommonTitle'
import ConfirmModal from '@/app/admin/components/shared/ConfirmModal'
import { Button, Flex, Table, TableProps } from 'antd'
import Link from 'next/link'
import { v4 as uuid } from 'uuid'

interface DataType {
  key: string
  userId: string
}

const data: DataType[] = [
  {
    key: uuid(),
    userId: 'admin'
  },
  {
    key: uuid(),
    userId: 'admin'
  },
  {
    key: uuid(),
    userId: 'admin'
  },
  {
    key: uuid(),
    userId: 'admin'
  },
  {
    key: uuid(),
    userId: 'admin'
  }
]

const columns: TableProps<DataType>['columns'] = [
  {
    title: '아이디',
    dataIndex: 'userId',
    key: 'userId',
    align: 'center'
    // render: text => <Link href='/admin/writer'>{text}</Link>
  },
  {
    title: '수정 / 삭제',
    key: 'action',
    width: 300,
    align: 'center',
    render: () => (
      <Flex gap='small' justify='center'>
        <Button>
          <Link href={`/admin/account/update`}>수정</Link>
        </Button>
        <ConfirmModal
          title='삭제'
          description='계정을 삭제하시겠습니까?'
          okText='네'
          cancelText='아니오'
        />
      </Flex>
    )
  }
]

export default function Page() {
  return (
    <>
      <CommonTitle title='관리자 설정' />

      <CardContainer title='⚙️ 관리자 계정 관리'>
        <Table columns={columns} dataSource={data} />
      </CardContainer>
    </>
  )
}
