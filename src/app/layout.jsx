import './ui/globals.css'
import { poppins } from './fonts/fonts'
import Nav from './ui/nav'

export const metadata = {
  title: 'Yael Correa',
  description: 'Generated by Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="https://res.cloudinary.com/dkfa8olux/image/upload/v1733517665/icon_gcvvjo.ico" type="image/x-icon" />
      </head>
      <body className={`${poppins.className} antialiased`}>
        <Nav/>
        {children}
      </body>
    </html>
  )
}
