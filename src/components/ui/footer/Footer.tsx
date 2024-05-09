import { tittleFont } from '@/config/fonts'
import Link from 'next/link'


export const Footer = () => {
  return (
    <div className='flex w-full justify-center text-xs mb-10'>
        <Link
        href="/"
        >
            <span className={`${tittleFont.className} antialiased font-bold`}>FR</span>
            <span>E-commerce</span>
            <span>© {new Date().getFullYear() }</span>
        </Link>

        <Link
        href="/"
        className='mx-3'
        >
        Privacidad y Legal
        </Link>

        <Link
        href="/"
        className='mx-3'
        >
        Ubicaciones
        </Link>

    </div>
  )
}
