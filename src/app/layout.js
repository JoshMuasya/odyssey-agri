import About from './components/about'
import Contact from './components/contact'
import Gift from './components/giftcard'
import Navbar from './components/navbar'
import Testimonials from './components/testimonials'
import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Granja Cereales',
  description: 'Grain Farm',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <About />
        <Testimonials />
        <Gift />
        <Contact />
      </body>
    </html>
  )
}
