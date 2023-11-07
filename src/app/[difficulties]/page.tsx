import StageButton from "./_components/StageButton"
import { cx } from "class-variance-authority"

export type DifficultiesPageProps = {
  params: {
    difficulties: "easy" | "medium" | "hard"
  }
}

export default function DifficultiesPage({ params }: DifficultiesPageProps) {
  return (
    <main className="h-full pt-14">
      <div>
        <h1 className="font-semibold tracking-wider text-primary-400 text-3xl text-center mb-2">
          SELECT STAGE
        </h1>
        <p className="text-center text-white mb-10 text-md">
          0 of 12 stages completed.
        </p>
        <div
          className={cx(
            "grid grid-cols-3 mx-auto max-w-sm",
            "md:max-w-xl md:grid-cols-4",
            "lg:max-w-2xl lg:gap-y-4"
          )}
        >
          <div className="flex place-content-center">
            <StageButton href={`/${params.difficulties}/1`}>Easy 1</StageButton>
          </div>
          <div className="flex place-content-center">
            <StageButton href={`/${params.difficulties}/1`}>
              Stage 2
            </StageButton>
          </div>
          <div className="flex place-content-center">
            <StageButton href={`/${params.difficulties}/1`}>
              Stage 3
            </StageButton>
          </div>
          <div className="flex place-content-center">
            <StageButton href={`/${params.difficulties}/1`}>
              Stage 4
            </StageButton>
          </div>
          <div className="flex place-content-center">
            <StageButton href={`/${params.difficulties}/1`}>
              Stage 5
            </StageButton>
          </div>
          <div className="flex place-content-center">
            <StageButton href={`/${params.difficulties}/1`}>
              Stage 6
            </StageButton>
          </div>
          <div className="flex place-content-center">
            <StageButton href={`/${params.difficulties}/1`}>
              Stage 7
            </StageButton>
          </div>
          <div className="flex place-content-center">
            <StageButton href={`/${params.difficulties}/1`}>
              Stage 8
            </StageButton>
          </div>
          <div className="flex place-content-center">
            <StageButton href={`/${params.difficulties}/1`}>
              Stage 9
            </StageButton>
          </div>
          <div className="flex place-content-center">
            <StageButton href={`/${params.difficulties}/1`}>
              Stage 10
            </StageButton>
          </div>
          <div className="flex place-content-center">
            <StageButton href={`/${params.difficulties}/1`}>
              Stage 11
            </StageButton>
          </div>
          <div className="flex place-content-center">
            <StageButton href={`/${params.difficulties}/1`}>
              Stage 12
            </StageButton>
          </div>
        </div>
      </div>
    </main>
  )
}
