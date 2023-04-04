import './globals.css'

export const metadata = {
  title: 'IMDb Clone',
  description: 'A clone of IMDb for learning purposes only.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
