import { cx } from "class-variance-authority"
import NonogramShowcase from "./_components/NonogramShowcase"
import DifficultiesSelection from "./_components/DifficultiesSelection"

export default function Home() {
  return (
    <main
      className={
        "flex justify-center items-center h-full xl:grid xl:grid-cols-[3fr_2fr]"
      }
    >
      <div className={"hidden xl:flex xl:place-content-center xl:-rotate-6"}>
        <NonogramShowcase />
      </div>
      <div>
        <h1
          className={
            "text-center font-bold text-primary-400 tracking-[0.2em] text-4xl"
          }
        >
          NONOGRAM
        </h1>
        <DifficultiesSelection />
      </div>
    </main>
  )
}
