import { cx } from "class-variance-authority"

export type TutorialGridProps = {
  left?: React.ReactNode
  right?: React.ReactNode
}

export const TutorialGrid = ({ left, right }: TutorialGridProps) => {
  return (
    <div
      className={cx(
        "grid grid-cols-1 gap-y-4 gap-x-6 px-4 mt-6",
        "lg:grid-cols-[auto_1fr] lg:px-10"
      )}
    >
      <div className="flex place-content-center">{left}</div>
      <div>{right}</div>
    </div>
  )
}
