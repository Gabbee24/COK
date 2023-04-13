import {Poppins} from 'next/font/google';
import Header from '@/components/header';
import './globals.css'
import '../components/global.css'

const poppins = Poppins({
  weight:['400','700'],
  subsets: ['latin']
});

export const metadata = {
  title: 'COK',
  description: 'a learning management system',
  keywords:  'web development, web design, typescript, css'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <Header/>
        <main className='container'>
          {children}
        </main>
      </body>
    </html>
  )
}