'use client'

import CardContainer from '@/app/admin/components/layout/CardContainer'
import CommonTitle from '@/app/admin/components/shared/CommonTitle'
import ConfirmModal from '@/app/admin/components/shared/ConfirmModal'
import { Button, Flex, Popconfirm, Table, TableProps } from 'antd'
import Link from 'next/link'

interface DataType {
  key: string
  name: string
  code: string
  count: number
}

const columns: TableProps<DataType>['columns'] = [
  {
    title: '그룹명',
    dataIndex: 'name',
    key: 'name',
    align: 'center',
    render: text => <Link href='/admin/writer'>{text}</Link>
  },
  {
    title: '그룹 코드',
    dataIndex: 'code',
    key: 'code',
    width: 300,
    align: 'center',
    render: text => <p>{text}</p>
  },
  {
    title: '개수',
    dataIndex: 'count',
    key: 'count',
    width: 200,
    align: 'center',
    render: text => <p>{text}</p>
  },
  {
    title: '수정 / 삭제',
    key: 'action',
    width: 400,
    align: 'center',
    render: () => (
      <Flex gap='small' justify='center'>
        <Button>
          <Link href='/admin/writer'>수정</Link>
        </Button>
        <ConfirmModal
          title='삭제'
          description='페이지를 정말 삭제하시겠습니까?'
          okText='네'
          cancelText='아니오'
        />
      </Flex>
    )
  }
]

const data: DataType[] = [
  {
    key: '1',
    name: '메인비주얼',
    code: 'mainvisual',
    count: 3
  },
  {
    key: '2',
    name: '서브비주얼',
    code: 'subvisual',
    count: 3
  }
]

export default function page() {
  return (
    <>
      <CommonTitle title='관리자 설정' />

      <CardContainer title='⚙️ 관리자 계정 관리'>
        <Table columns={columns} dataSource={data} />
      </CardContainer>
    </>
  )
}
