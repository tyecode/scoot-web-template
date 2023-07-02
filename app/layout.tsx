import './globals.css'
import { Navbar, Footer } from '@/compoments'

export const metadata = {
  title: 'Scoot',
  description: 'Scoot - Web template',
}

export const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout