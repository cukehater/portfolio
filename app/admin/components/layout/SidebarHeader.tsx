'use client'

import Lottie from 'react-lottie-player'
import gradientLottie from '@/public/images/admin/gradient.json'
import { GlobalOutlined, LogoutOutlined } from '@ant-design/icons'
import Link from 'next/link'

export default function SidebarHeader() {
  return (
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
  )
}
