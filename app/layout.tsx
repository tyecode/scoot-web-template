import './globals.css'
import { Navbar, Footer } from '@/components'

export const metadata = {
  title: {
    default: 'Scoot',
    template: '%s | Scoot',
  },
  description: 'Scoot - Web template',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="w-full flex-col overflow-x-hidden">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
