import { cx } from "class-variance-authority"

type StageGridProps = {
  top?: React.ReactNode
  mid?: React.ReactNode
  right?: React.ReactNode
}

const StageGrid = ({ top, mid, right }: StageGridProps) => {
  return (
    <main className="grid items-center justify-center h-full w-full">
      <div>
        {top}
        <div
          className={
            "grid grid-cols-[1fr] gap-y-5 gap-x-12 xl:grid-cols-[1fr_auto_1fr]"
          }
        >
          <div></div>
          <div className="grid justify-center">{mid}</div>
          <div>{right}</div>
        </div>
      </div>
    </main>
  )
}

export default StageGrid
