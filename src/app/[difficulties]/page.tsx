import StageButton from "./_components/StageButton"
import { cx } from "class-variance-authority"
import stages from "@/assets/stages/stages.json"

export type DifficultiesPageProps = {
  params: {
    difficulties: "easy" | "medium" | "hard"
  }
}

export default function DifficultiesPage({ params }: DifficultiesPageProps) {
  const game = stages[params.difficulties]
  const stageIds = Object.keys(game)
  return (
    <main className="h-full pt-14">
      <div>
        <h1 className="font-semibold tracking-wider text-primary-400 text-3xl text-center mb-2">
          SELECT STAGE
        </h1>
        <p className="text-center text-white mb-10 text-md">
          0 of 12 stages completed.
        </p>
        <nav
          className={cx(
            "grid grid-cols-3 mx-auto max-w-sm",
            "md:max-w-xl md:grid-cols-4",
            "lg:max-w-2xl lg:gap-y-4"
          )}
        >
          {stageIds.map((id) => (
            <div key={id} className="flex place-content-center">
              <StageButton href={`/${params.difficulties}/${id}`}>
                {params.difficulties} {id}
              </StageButton>
            </div>
          ))}
        </nav>
      </div>
    </main>
  )
}
