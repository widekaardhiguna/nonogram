import { cx } from "class-variance-authority"

export type MainLayoutProps = {
  TopLeft: React.ReactNode
  TopRight: React.ReactNode
  Main: React.ReactNode
}

export const MainLayout = ({ Main, TopLeft, TopRight }: MainLayoutProps) => {
  return (
    <div
      className={cx(
        "h-screen bg-layered-steps bg-cover bg-bottom",
        "xl:grid xl:place-content-center"
      )}
    >
      <div
        className={cx(
          "relative h-full overflow-auto rounded-lg bg-neutral-900",
          "xl:h-[90vh] xl:w-[min(1400px,100vw)]"
        )}
      >
        <div className={cx("absolute flex w-full p-5")}>
          <div>{TopLeft}</div>
          <div className={cx("grow")}></div>
          <div>{TopRight}</div>
        </div>
        {Main}
      </div>
    </div>
  )
}
