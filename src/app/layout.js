export const metadata = {
  title: 'Makit',
  description: 'Make it differently, your website by Makit.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
