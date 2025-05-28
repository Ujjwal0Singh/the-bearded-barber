import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'The Bearded Barber Co. - Premium Grooming',
  description: 'Premium barber services with traditional techniques and modern style',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} bg-gray-50`}>{children}</body>
    </html>
  )
}