import { cx } from "class-variance-authority"
import Link from "next/link"
import DifficultiesButton from "./_components/DifficultiesButton"
import { Nonogram } from "@/components"
import NonogramShowcase from "./_components/NonogramShowcase"

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
            "text-center font-bold text-primary-400 tracking-widest text-4xl"
          )}
        >
          NONOGRAM
        </h1>
        <div className={cx("h-[6rem]")}></div>
        <h2
          className={cx(
            "font-semibold tracking-wide text-white mb-5 text-lg text-center"
          )}
        >
          SELECT DIFFICULTIES
        </h2>
        <div className={cx("flex flex-col gap-3")}>
          <DifficultiesButton href="easy">Easy</DifficultiesButton>
          <DifficultiesButton href="medium">Medium</DifficultiesButton>
          <DifficultiesButton href="hard">Hard</DifficultiesButton>
        </div>
      </div>
    </main>
  )
}
