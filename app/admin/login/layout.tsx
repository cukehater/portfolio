import { AntdRegistry } from '@ant-design/nextjs-registry'
import '../globals.css'

export default function Layout({
  children
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <AntdRegistry> {children} </AntdRegistry>
    </>
  )
}
