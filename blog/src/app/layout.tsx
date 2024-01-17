import Header from '@/components/Header'
import './globals.css'
import Footer from '@/components/Footer'


export const metadata = {
  title: {
    default: '인아의 블로그',
    template: '인아의 블로그 | %s'
  },
  description: '프론트엔드 개발자 인아의 블로그',
  icons: {
    icon: '/favicon.ico'
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='flex flex-col w-full max-w-screen-2xl mx-auto'>
        <Header />
        <main className='grow'>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
