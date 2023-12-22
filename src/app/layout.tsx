import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { IconHelpCircle, IconChevronLeft } from "@tabler/icons-react"
import Link from "next/link"
import { TutorialDialog } from "./_components/TutorialDialog"
import MainLayout from "./_components/MainLayout"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Nonogram",
  description: "Learn and play Nonogram.",
  icons: {
    icon: "/icon.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
        <meta property="og:title" content="Nonogram online" />
        <meta property="og:url" content="https://nono-gram.vercel.app" />
        <meta
          property="og:image"
          content="https://nono-gram.vercel.app/thumbnail.png"
        />
        <meta property="og:image:width" content="1400" />
        <meta property="og:image:height" content="900" />
      </head>
      <body className={poppins.className}>
        <MainLayout
          TopLeft={
            <Link href=".">
              <IconChevronLeft className="text-white" />
            </Link>
          }
          TopRight={
            <TutorialDialog
              Trigger={
                <button>
                  <IconHelpCircle className="text-white" />
                </button>
              }
            />
          }
          Main={children}
        />
      </body>
    </html>
  )
}
