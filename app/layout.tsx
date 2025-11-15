import './globals.css'

export const metadata = {
  title: 'रामू की कहानी - एक किसान की संघर्ष गाथा',
  description: 'एक छोटे से गाँव में रामू नाम का किसान रहता था। उसकी ज़िंदगी मेहनत, संघर्ष और उम्मीदों की एक लंबी त्रोरी थी।',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="hi">
      <body>{children}</body>
    </html>
  )
}
