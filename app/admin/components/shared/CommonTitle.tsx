import TypographyTitle from 'antd/lib/typography/title'
import Image from 'next/image'

import Logo from '@/public/next.svg'

export default function CommonTitle({ title }: { title: string }) {
  return (
    <>
      <TypographyTitle level={2} className='flex items-center gap-3'>
        <Image src={Logo} height={25} alt='회사 로고' />
        {title}
      </TypographyTitle>
    </>
  )
}
