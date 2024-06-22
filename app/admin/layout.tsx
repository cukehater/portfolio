import './globals.css'
import { ConfigProvider } from 'antd'
import { AntdRegistry } from '@ant-design/nextjs-registry'

const RootLayout = ({ children }: React.PropsWithChildren) => (
  <AntdRegistry>
    <ConfigProvider>{children}</ConfigProvider>
  </AntdRegistry>
)

export default RootLayout
