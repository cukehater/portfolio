'use client'

import {
  CopyOutlined,
  DesktopOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons'
import { Layout, Menu, MenuProps } from 'antd'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'
import SidebarHeader from './SidebarHeader'
const { Sider } = Layout

type MenuItem = Required<MenuProps>['items'][number]

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[]
): MenuItem {
  return {
    label,
    key,
    icon,
    children
  } as MenuItem
}

const items: MenuItem[] = [
  // getItem(
  //   <Link href='/admin/account'>관리자 정보</Link>,
  //   '/admin/account',
  //   <UserOutlined />
  // ),
  // getItem(
  //   <Link href='/admin/fundamental'>웹사이트 설정</Link>, //
  //   '/admin/fundamental',
  //   <SettingOutlined />
  // ),
  // getItem(
  //   <Link href='/admin/banners'>배너 관리</Link>,
  //   '/admin/banners',
  //   <DesktopOutlined />
  // ),
  // getItem(
  //   <Link href='/admin/edits'>페이지 관리</Link>,
  //   '/admin/edits',
  //   <CopyOutlined />
  // ),
  getItem(
    <Link href='/admin/portfolio'>포트폴리오</Link>,
    '/admin/portfolio',
    <CopyOutlined />
  )
  // getItem('게시판 관리', '', <CopyOutlined />, [
  //   getItem(<Link href='/admin/board1'>일반 게시판</Link>, '/admin/board1'),
  //   getItem(<Link href='/admin/board2'>갤러리 게시판</Link>, '/admin/board2')
  // ])
]

export default function Sidebar() {
  const pathname = usePathname()
  console.log('pathname', pathname)
  const [current, setCurrent] = useState('/admin/fundamental')
  console.log('current', current)

  const handleClick: MenuProps['onClick'] = e => {
    setCurrent(e.key)
  }

  useEffect(() => {
    setCurrent(pathname.replace('/write', ''))
  }, [pathname])

  return (
    <Sider
      width={250}
      className='top-0 bottom-0 left-0 h-screen pt-5 pb-0 overflow-auto'
      style={{
        position: 'fixed'
      }}
    >
      <SidebarHeader />
      <Menu
        theme='dark'
        items={items}
        mode='inline'
        selectedKeys={[current]}
        onClick={handleClick}
      />
    </Sider>
  )
}
