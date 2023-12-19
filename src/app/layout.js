export const metadata = {
  title: 'Makit',
  description: 'Make it differently, your website by Makit.',
  favicon: '/favicon.ico',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  )
}
