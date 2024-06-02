'use client'

import '@/app/globals.css'
import { ConfigProvider, FloatButton, Layout as AntdLayout } from 'antd'
import Sidebar from '../components/layout/Sidebar'

export default function Layout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimary: '#1638f9',
          borderRadius: 2
        },
        components: {
          Layout: {
            siderBg: '#001529'
          },
          Input: {
            borderRadius: 4
          },
          Tooltip: {
            fontSize: 13,
            colorBgSpotlight: '#ea500e'
          },
          Divider: {
            margin: 1
          }
        }
      }}
    >
      <AntdLayout className='!min-h-screen'>
        <Sidebar />
        <AntdLayout className='ml-[250px]'>
          <AntdLayout.Content className='m-4 ml-4 pt-5'>
            {children}
          </AntdLayout.Content>
          <AntdLayout.Footer className='text-center'>
            © 2024 Created by Kyoungsic Kim
          </AntdLayout.Footer>
        </AntdLayout>
        <FloatButton.BackTop />
      </AntdLayout>
    </ConfigProvider>
  )
}
