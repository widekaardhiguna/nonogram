import StageGrid from "@/app/[difficulties]/[stage]/_components/StageGrid"

type DifficultiesLayoutProps = {
  action: React.ReactNode
  howToPlay: React.ReactNode
  nonogram: React.ReactNode
  timer: React.ReactNode
}

const DifficultiesLayout = ({
  action,
  howToPlay,
  nonogram,
  timer,
}: DifficultiesLayoutProps) => {
  return (
    <StageGrid
      top={timer}
      mid={nonogram}
      right={
        <>
          {howToPlay}
          <div className={"flex gap-2 justify-end xl:justify-normal"}>
            {action}
          </div>
        </>
      }
    />
  )
}

export default DifficultiesLayout
