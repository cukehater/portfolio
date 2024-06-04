'use client'

import CardContainer from '@/app/admin/components/shared/CardContainer'
import CommonTitle from '@/app/admin/components/shared/CommonTitle'
import ConfirmModal from '@/app/admin/components/shared/ConfirmModal'
import { accountItem } from '@/app/admin/types/admin'
import { Button, Flex, Table, TableProps, message } from 'antd'
import Link from 'next/link'
import { useEffect, useState } from 'react'

const columns: TableProps<accountItem>['columns'] = [
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
        <Button>
          <Link href={`/admin/account/update/${item._id}`}>수정</Link>
        </Button>
        <ConfirmModal
          title='삭제'
          description='해당 계정을 삭제하시겠습니까?'
          okText='네'
          cancelText='아니오'
          onConfirm={e => handleDelete(item)}
        />
      </Flex>
    )
  }
]

const handleDelete = async (item: accountItem) => {
  const response = await fetch(`/api/admin/delete?id=${item._id}`)
  if (response.ok) {
    message.success('계정이 삭제되었습니다')
  }
}

export default function Page() {
  const [data, setData] = useState<accountItem[]>([])

  const fetchData = async () => {
    const { data } = await fetch('/api/admin/read').then(res => res.json())
    const updateData = data.map((item: accountItem) => ({
      key: item._id,
      ...item
    }))
    setData(updateData)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <CommonTitle title='관리자 설정' />

      <CardContainer
        title='⚙️ 관리자 계정 관리'
        subTitle='관리자 계정은 최대 5개까지 생성 가능합니다. '
      >
        <Table columns={columns} dataSource={data} pagination={false} />
      </CardContainer>
    </>
  )
}
