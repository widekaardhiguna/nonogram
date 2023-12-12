import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { cx } from "class-variance-authority"
import { IconHelpCircle, IconChevronLeft } from "@tabler/icons-react"
import Link from "next/link"
import { TutorialDialog } from "./_components/TutorialDialog"
import { MainLayout } from "./_components/MainLayout"

const poppins = Poppins({
  weight: ["300", "400", "500", "600", "700", "800"],
  subsets: ["latin"],
  display: "swap",
})

export const metadata: Metadata = {
  title: "Nonogram",
  description: "Learn and play Nonogram.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
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
