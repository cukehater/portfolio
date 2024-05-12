'use client'

import '@/app/globals.css'
import { ConfigProvider, FloatButton, Layout } from 'antd'
import Sidebar from '../components/layout/Sidebar'

const { Content, Footer } = Layout

export default function layout({ children }: Readonly<{ children: React.ReactNode }>) {
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
      <Layout className='!min-h-screen'>
        <Sidebar />
        <Layout className='ml-[250px]'>
          <Content className='m-4 ml-4 pt-5'>{children}</Content>
          <Footer className='text-center'>© 2024 Created by Kyoungsic Kim</Footer>
        </Layout>
        <FloatButton.BackTop />
      </Layout>
    </ConfigProvider>
  )
}
