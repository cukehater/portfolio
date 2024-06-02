'use client'

import {
  CopyOutlined,
  SettingOutlined,
  UserOutlined,
  GlobalOutlined,
  LogoutOutlined
} from '@ant-design/icons'
import Lottie from 'react-lottie-player'
import gradientLottie from '@/public/images/admin/gradient.json'
import { Layout, Menu, MenuProps } from 'antd'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import { usePathname } from 'next/navigation'

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

const urlPaths = [
  '/admin/fundamental/company',
  '/admin/fundamental/website',
  '/admin/account/create',
  '/admin/account/list',
  '/admin/portfolio'
]

export default function Sidebar() {
  const pathname = usePathname()
  const [current, setCurrent] = useState<string | undefined>(
    '/admin/fundamental/company'
  )

  const handleClick: MenuProps['onClick'] = e => {
    setCurrent(e.key)
  }

  useEffect(() => {
    setCurrent(urlPaths.find(path => pathname.includes(path)))
  }, [pathname])

  return (
    <Layout.Sider
      width={250}
      className='top-0 bottom-0 left-0 h-screen pt-5 pb-0 overflow-auto'
      style={{
        position: 'fixed'
      }}
    >
      <header className='mb-4'>
        <div className='flex items-center gap-1 mb-4 ml-2.5'>
          <div className='w-10 rounded-full'>
            <Lottie loop play animationData={gradientLottie} />
          </div>

          <p className='text-white text-lg'>Administrator</p>
        </div>

        <div className='flex justify-center bg-slate-100 p-2'>
          <button className='relative flex-1 text-xs flex items-center justify-center hover:opacity-75 after:content-[""] after:w-[1px] after:h-[14px] after:bg-gray-400 after:transform-x-[10px] after:absolute after:right-0'>
            <GlobalOutlined />
            <Link href='/' target='_blank' className='ml-1 text-zinc-700'>
              웹사이트
            </Link>
          </button>
          <button className='flex-1 text-xs flex items-center justify-center hover:opacity-75'>
            <LogoutOutlined />
            <p className='ml-1 text-zinc-700'>로그아웃</p>
          </button>
        </div>
      </header>

      <Menu
        theme='dark'
        items={items}
        mode='inline'
        defaultSelectedKeys={['/admin/fundamental']}
        defaultOpenKeys={['/admin/fundamental']}
        selectedKeys={[current ? current : '']}
        onClick={handleClick}
      />
    </Layout.Sider>
  )
}
