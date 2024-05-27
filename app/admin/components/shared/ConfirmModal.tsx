'use client'

import type { PopconfirmProps } from 'antd'
import { Button, message, Popconfirm as Confirm } from 'antd'

const confirm: PopconfirmProps['onConfirm'] = e => {
  console.log(e)
  message.success('Click on Yes')
}

const cancel: PopconfirmProps['onCancel'] = e => {
  console.log(e)
  message.error('Click on No')
}

export default function ConfirmModal({
  title,
  description,
  okText,
  cancelText
}: {
  title: string
  description: string
  okText: string
  cancelText: string
}) {
  return (
    <Confirm
      title={title}
      description={description}
      onConfirm={confirm}
      onCancel={cancel}
      okText={okText}
      cancelText={cancelText}
    >
      <Button danger>삭제</Button>
    </Confirm>
  )
}
