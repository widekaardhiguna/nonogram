import { cx } from "class-variance-authority"
import Link from "next/link"
import DifficultiesButton from "./_components/DifficultiesButton"
import { Nonogram } from "@/components"
import NonogramShowcase from "./_components/NonogramShowcase"
import ModeTab from "./_components/ModeTab"
import DifficultiesSelection from "./_components/DifficultiesSelection"

export default function Home() {
  return (
    <main
      className={cx(
        "flex justify-center items-center h-full",
        "xl:grid xl:grid-cols-[3fr_2fr]"
      )}
    >
      <div
        className={cx("hidden", "xl:flex xl:place-content-center xl:-rotate-6")}
      >
        <NonogramShowcase />
      </div>
      <div>
        <h1
          className={cx(
            "text-center font-bold text-primary-400 tracking-[0.2em] text-4xl"
          )}
        >
          NONOGRAM
        </h1>
        <DifficultiesSelection />
      </div>
    </main>
  )
}
