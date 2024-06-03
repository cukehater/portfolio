'use client'

import type { PopconfirmProps } from 'antd'
import { Button, Popconfirm as Confirm } from 'antd'

export default function ConfirmModal({
  title,
  description,
  okText,
  cancelText,
  onConfirm,
  onCancel
}: {
  title: string
  description: string
  okText: string
  cancelText: string
  onConfirm: PopconfirmProps['onConfirm']
  onCancel?: PopconfirmProps['onCancel']
}) {
  return (
    <Confirm
      title={title}
      description={description}
      onConfirm={onConfirm}
      onCancel={onCancel}
      okText={okText}
      cancelText={cancelText}
    >
      <Button danger>삭제</Button>
    </Confirm>
  )
}
