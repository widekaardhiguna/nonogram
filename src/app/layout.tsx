import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import { cx } from "class-variance-authority"
import { IconHelpCircle, IconChevronLeft } from "@tabler/icons-react"
import Link from "next/link"
import { TutorialDialog } from "./_components/TutorialDialog"
import { IconButton } from "@/components"

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
        <div
          className={cx(
            "h-screen bg-layered-steps bg-cover bg-bottom",
            "xl:grid xl:place-content-center"
          )}
        >
          <div
            className={cx(
              "relative h-full overflow-auto rounded-lg bg-neutral-900",
              // "md:grid",
              "xl:h-[90vh] xl:w-[1400px]"
            )}
          >
            <div className={cx("absolute flex w-full", "xl:px-4 xl:py-4")}>
              <div>
                <Link href=".">
                  <IconChevronLeft className="text-white" />
                </Link>
              </div>
              <div className={cx("grow")}> </div>
              <div>
                <TutorialDialog
                  Trigger={
                    <button>
                      <IconHelpCircle className="text-white" />
                    </button>
                  }
                />
              </div>
            </div>
            {children}
          </div>
        </div>
      </body>
    </html>
  )
}
