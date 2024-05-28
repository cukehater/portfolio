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
  getItem(
    '웹 사이트 설정', //
    '/admin/fundamental',
    <SettingOutlined />,
    [
      getItem(
        <Link href='/admin/fundamental/company'>회사 정보 설정</Link>,
        '/admin/fundamental/company'
      ),
      getItem(
        <Link href='/admin/fundamental/website'>사이트 정보 설정</Link>,
        '/admin/fundamental/website'
      )
    ]
  ),
  getItem(
    '관리자 설정', //
    '/admin/account',
    <UserOutlined />,
    [
      getItem(
        <Link href='/admin/account/create'>관리자 계정 생성</Link>,
        '/admin/account/create'
      ),
      getItem(
        <Link href='/admin/account/list'>관리자 계정 관리</Link>,
        '/admin/account/list'
      )
    ]
  ),
  getItem(
    <Link href='/admin/portfolio'>게시판</Link>,
    '/admin/portfolio',
    <CopyOutlined />
  )
]

export default function Sidebar() {
  const pathname = usePathname()
  const [current, setCurrent] = useState('/admin/fundamental/company')

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
        defaultSelectedKeys={['/admin/fundamental']}
        defaultOpenKeys={['/admin/fundamental']}
        selectedKeys={[current]}
        onClick={handleClick}
      />
    </Sider>
  )
}
