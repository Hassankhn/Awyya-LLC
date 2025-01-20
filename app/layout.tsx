import './globals.css'
import { Inter } from 'next/font/google'
import LandingPage from './components/LandingPage'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ayywa Trading Company LLC - Import/Export, Sourcing, and Procurement',
  description: 'Your trusted partner in global trade solutions, based in Dubai and operating worldwide.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <LandingPage />
        {children}
      </body>
    </html>
  )
}

