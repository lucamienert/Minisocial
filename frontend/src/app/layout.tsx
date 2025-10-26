import Navbar from "@/components/navbar"
import "./globals.css"

export const metadata = {
  title: "MicroSocial",
  description: "A minimal social media platform",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-background text-foreground min-h-screen">
        <Navbar />
        <main className="container mx-auto px-4 py-6">{children}</main>
      </body>
    </html>
  )
}
